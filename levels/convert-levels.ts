import fs from "fs";
import { XMLParser } from "fast-xml-parser";
import path from "path";

/* ============================
   Types
============================ */

type LevelXML = {
  "@_number": string;
  "@_color": string;
  "@_modifier": string;
  "@_solution"?: string;
};

type SquareProps = {
  targetColor: string;
  color: string;
  modifier?: string;
};

type Level = SquareProps[][];

type LevelProgress = {
  status: string;
  best: number | null;
};

/* ============================
   Mappings
============================ */

const colorMapping: Record<string, string> = {
  r: "Color.red",
  g: "Color.green",
  b: "Color.blue",
  o: "Color.yellow",
  d: "Color.indigo",
  "0": "Color.none",
  X: "Color.none",
};

const modifierMapping: Record<string, string> = {
  "0": "Modifier.none",
  U: "Modifier.up",
  R: "Modifier.right",
  D: "Modifier.down",
  L: "Modifier.left",
  w: "Modifier.rotateUp",
  x: "Modifier.rotateRight",
  s: "Modifier.rotateDown",
  a: "Modifier.rotateLeft",
  F: "Modifier.circle",
  B: "Modifier.bomb",
};

/* ============================
   Helpers
============================ */

function serializeTS(value: unknown): string {
  return JSON.stringify(value, null, 2)
    .replace(/"Color\.(\w+)"/g, "Color.$1")
    .replace(/"Modifier\.(\w+)"/g, "Modifier.$1")
    .replace(/"levelStatus\.(\w+)"/g, "levelStatus.$1");
}

/* ============================
   Main
============================ */

const LEVEL_PACKS = ["Easy", "Medium", "Hard", "Community"];
const parser = new XMLParser({ ignoreAttributes: false });

LEVEL_PACKS.forEach((pack) => {
  const xmlPath = path.join("levels", `levels${pack}.xml`);
  const xml = fs.readFileSync(xmlPath, "utf8");

  const parsed = parser.parse(xml);
  const xmlLevels: LevelXML[] = parsed.levels.level;

  const levels: Level[] = [];
  const solutions: (string[] | null)[] = [];
  const defaultProgress: LevelProgress[] = [];

  xmlLevels.forEach((level, index) => {
    const colorRows = level["@_color"].trim().split(" ");
    const modifierRows = level["@_modifier"].trim().split(" ");

    if (colorRows.length !== modifierRows.length) {
      throw new Error(`Row mismatch in ${pack} level ${index}`);
    }

    const grid: Level = [];

    colorRows.forEach((row, y) => {
      const modRow = modifierRows[y];

      if (row.length !== modRow.length) {
        throw new Error(
          `Column mismatch in ${pack} level ${index}, row ${y}`
        );
      }

      const rowSquares: SquareProps[] = [];

      [...row].forEach((char) => {
        rowSquares.push({
          targetColor: colorMapping[char] ?? "Color.none",
          color: "Color.none",
        });
      });

      grid.push(rowSquares);
    });

    modifierRows.forEach((row, y) => {
      [...row].forEach((char, x) => {
        const square = grid[y][x];
        const modifier = modifierMapping[char] ?? "Modifier.none";
        const colorOverride = colorMapping[char];

        square.modifier = modifier;

        square.color =
          modifier !== "Modifier.none"
            ? square.targetColor
            : colorOverride ?? "Color.none";
      });
    });

    levels.push(grid);

    solutions.push(
      level["@_solution"]
        ? level["@_solution"].split(",").map((s) => s.trim())
        : null
    );

    defaultProgress.push({
      status:
        index < 5
          ? "levelStatus.unlocked"
          : "levelStatus.locked",
      best: null,
    });
  });

  const output = `
import { Color, Modifier } from "@/components/Square/Square";
import { Level } from "@/components/Game/Game";
import { levelStatus, levelProgressProps } from "@/levels/levelsUtils";

export const ${pack}Levels: Level[] =
${serializeTS(levels)}

export const ${pack}Solutions: (string[] | null)[] =
${JSON.stringify(solutions, null, 2)}

export const ${pack}DefaultProgress: levelProgressProps[] =
${serializeTS(defaultProgress)}
`;

  const outPath = path.join("levels", `${pack}.ts`);
  fs.writeFileSync(outPath, output.trim() + "\n");
  console.log(`✓ Generated ${outPath}`);
});
