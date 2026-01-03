import { Color, Modifier } from "@/components/Square/Square";
import { Level } from "@/components/Game/Game";
import { levelStatus, levelProgressProps } from "@/levels/levelsUtils";

export const HardLevels: Level[] =
[
  {
    "grid": [
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.bomb
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        }
      ]
    ],
    "solution": [
      "A1",
      "B2",
      "C5",
      "C5",
      "E3",
      "D1",
      "E2",
      "E3",
      "B6",
      "E2",
      "B6",
      "C5",
      "E3",
      "C5",
      "E3",
      "E4",
      "B6",
      "E6"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateDown
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateUp
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "D2",
      "B3",
      "E5",
      "D2",
      "B3",
      "B3",
      "B3",
      "A1",
      "A1",
      "A1",
      "A1",
      "A1",
      "A1",
      "A1",
      "A1",
      "B3",
      "E5",
      "C4",
      "B3",
      "D1",
      "A6",
      "D1",
      "D1",
      "E5",
      "C4"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.rotateDown
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateDown
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "A4",
      "C3",
      "C6",
      "C3",
      "A1",
      "A1",
      "D6",
      "E1",
      "D6",
      "A1",
      "A1",
      "A1",
      "A1",
      "A1",
      "E3",
      "E1",
      "C3",
      "E1",
      "A1",
      "E3",
      "C3",
      "A6",
      "E4",
      "E4",
      "D6",
      "E3",
      "E3",
      "C3",
      "D6",
      "C6"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateUp
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.rotateLeft
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "A3",
      "C3",
      "C3",
      "C3",
      "A4",
      "E5",
      "B6",
      "B6",
      "D6",
      "D6",
      "A1",
      "E4",
      "A1",
      "C3",
      "A1",
      "C3",
      "C3",
      "C3",
      "C3",
      "A6"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.rotateLeft
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "E1",
      "A2",
      "B6",
      "E4",
      "E4",
      "E4",
      "E4",
      "B6",
      "A1",
      "A3",
      "A6"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateUp
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.circle
        }
      ],
      [
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "A2",
      "C4",
      "C6",
      "A2",
      "A2",
      "A2",
      "B6",
      "B6",
      "D6",
      "A2",
      "D6",
      "B6",
      "A2",
      "B6",
      "A2",
      "E4",
      "B6",
      "E3",
      "C1",
      "E4",
      "C1",
      "D6",
      "A6",
      "E3",
      "C1",
      "A2",
      "A2",
      "A2",
      "E3",
      "C1",
      "A2",
      "E4",
      "C6"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateUp
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "E2",
      "E2",
      "E2",
      "C5",
      "C5",
      "E2",
      "A1",
      "C5",
      "A1",
      "D4",
      "A5",
      "C6",
      "C1",
      "A1",
      "D1",
      "C1",
      "A5",
      "D1",
      "B6",
      "A4",
      "D1",
      "A4",
      "B6",
      "C6",
      "D1",
      "B6",
      "D1"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.rotateLeft
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "E1",
      "E1",
      "E1",
      "C6",
      "B1",
      "E1",
      "E1",
      "E1",
      "E1",
      "A3",
      "A3",
      "A3",
      "E1",
      "A3",
      "A6",
      "C2",
      "A6",
      "A5",
      "A5",
      "A4",
      "C6",
      "A4",
      "E1",
      "A4",
      "A2"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.left
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.rotateUp
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        }
      ]
    ],
    "solution": [
      "A3",
      "D3",
      "D3",
      "E4",
      "E4",
      "E6",
      "C2",
      "B1",
      "D1",
      "D3",
      "E6",
      "E4",
      "E4",
      "E4",
      "E4",
      "E4",
      "A6",
      "E4",
      "E4",
      "D6",
      "D3",
      "C5",
      "D6",
      "E6"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        }
      ]
    ],
    "solution": [
      "E2",
      "E3",
      "B5",
      "E3",
      "A4",
      "C5",
      "A6",
      "B6",
      "B6",
      "A6",
      "C5",
      "E3",
      "D5",
      "C6",
      "E6",
      "E5",
      "C1",
      "E2",
      "E6",
      "E2",
      "C1",
      "E6",
      "E6",
      "E4"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.left
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "C4",
      "A6",
      "C4",
      "D3",
      "D4",
      "F2",
      "D4",
      "C5",
      "C4",
      "E1",
      "E1",
      "E1",
      "A6",
      "E1",
      "A6",
      "D4",
      "B7",
      "C4",
      "B7",
      "B7",
      "F2",
      "B7",
      "F2",
      "C1",
      "D1",
      "C1",
      "C4",
      "D4",
      "D7",
      "C7",
      "D7",
      "D4"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.down
        },
        {
          "targetColor": Color.indigo,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.blue,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.red,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.yellow,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.yellow,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.none,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ]
    ],
    "solution": [
      "D8",
      "D8",
      "B8",
      "B8",
      "E8",
      "F7",
      "C8",
      "C8",
      "A8",
      "A8",
      "D8",
      "D8",
      "B8",
      "B8",
      "D8",
      "D8",
      "A8",
      "A8",
      "C8",
      "C8",
      "D8",
      "D8",
      "F7",
      "E8",
      "D1",
      "A8",
      "E8",
      "D1",
      "F7",
      "D8"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        }
      ]
    ],
    "solution": [
      "F8",
      "F8",
      "B8",
      "B8",
      "E8",
      "E8",
      "F8",
      "F8",
      "B8",
      "B8",
      "E8",
      "E8",
      "C8",
      "C8",
      "A8"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.blue,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.indigo,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.yellow,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.green,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.blue,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.circle
        }
      ]
    ],
    "solution": [
      "B8",
      "B8",
      "D8",
      "E8",
      "D8",
      "E8",
      "D8",
      "E8",
      "D8",
      "A8",
      "A8",
      "C8",
      "C8",
      "B8",
      "B8",
      "A8",
      "A8",
      "C8",
      "C8",
      "A8",
      "A8",
      "B8",
      "D8",
      "E8",
      "F8",
      "F8",
      "B8",
      "E8",
      "E8",
      "D8",
      "D8",
      "F8",
      "F8",
      "E8",
      "E8",
      "C8",
      "C8",
      "F8",
      "F8",
      "A8",
      "A8",
      "E8",
      "E8",
      "A8"
    ]
  },
  {
    "grid": [
      [
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.circle
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.blue,
          "modifier": Modifier.bomb
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.bomb
        }
      ],
      [
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.blue,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.indigo,
          "color": Color.indigo,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.left
        }
      ],
      [
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.indigo,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.right
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        }
      ],
      [
        {
          "targetColor": Color.yellow,
          "color": Color.yellow,
          "modifier": Modifier.circle
        },
        {
          "targetColor": Color.yellow,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.red,
          "color": Color.red,
          "modifier": Modifier.up
        },
        {
          "targetColor": Color.green,
          "color": Color.none,
          "modifier": Modifier.none
        },
        {
          "targetColor": Color.green,
          "color": Color.green,
          "modifier": Modifier.circle
        }
      ]
    ],
    "solution": [
      "C8",
      "F8",
      "C8",
      "A8",
      "D3",
      "F8",
      "F3",
      "B3",
      "A8",
      "F5",
      "C8",
      "A7",
      "D8",
      "F8",
      "A7",
      "A8",
      "F1",
      "F5",
      "F1",
      "F5",
      "A5"
    ]
  }
]

export const HardDefaultProgress: levelProgressProps[] =
[
  {
    "status": levelStatus.unlocked,
    "best": null
  },
  {
    "status": levelStatus.unlocked,
    "best": null
  },
  {
    "status": levelStatus.unlocked,
    "best": null
  },
  {
    "status": levelStatus.unlocked,
    "best": null
  },
  {
    "status": levelStatus.unlocked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  },
  {
    "status": levelStatus.locked,
    "best": null
  }
]
