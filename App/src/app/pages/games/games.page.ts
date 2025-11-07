import {Component, OnDestroy} from '@angular/core';

type GameKey = 'reflex' | 'tetris';
type TetrominoKey = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

interface TargetStyle {
  top: string;
  left: string;
}

interface ActivePiece {
  key: TetrominoKey;
  rotationIndex: number;
  x: number;
  y: number;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const TETROMINOES: Record<TetrominoKey, number[][][]> = {
  I: [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0]
    ]
  ],
  J: [
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1]
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ]
  ],
  L: [
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0]
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
  ],
  O: [
    [
      [1, 1],
      [1, 1]
    ]
  ],
  S: [
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
    ]
  ],
  T: [
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
    ],
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ]
  ],
  Z: [
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ]
  ]
};

const TETROMINO_COLORS: Record<TetrominoKey, string> = {
  I: 'tetris-cell--cyan',
  J: 'tetris-cell--blue',
  L: 'tetris-cell--orange',
  O: 'tetris-cell--yellow',
  S: 'tetris-cell--green',
  T: 'tetris-cell--purple',
  Z: 'tetris-cell--red'
};

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnDestroy {
  selectedGame: GameKey = 'reflex';

  // Reflex mini-game
  reflexIsPlaying = false;
  reflexScore = 0;
  reflexTimeLeft = 30;
  reflexBestScore = 0;
  reflexTargetStyle: TargetStyle = {top: '50%', left: '50%'};
  private reflexMoveIntervalId: ReturnType<typeof setInterval> | null = null;
  private reflexCountdownId: ReturnType<typeof setInterval> | null = null;

  // Tetris mini-game
  tetrisBoard: string[][] = this.createEmptyBoard();
  tetrisIsPlaying = false;
  tetrisScore = 0;
  tetrisLines = 0;
  tetrisLevel = 1;
  tetrisBestScore = 0;
  private activePiece: ActivePiece | null = null;
  private tetrisDropIntervalId: ReturnType<typeof setInterval> | null = null;

  startReflex(): void {
    if (this.reflexIsPlaying) {
      return;
    }
    this.reflexIsPlaying = true;
    this.reflexScore = 0;
    this.reflexTimeLeft = 30;
    this.moveReflexTarget();
    this.reflexCountdownId = setInterval(() => {
      this.reflexTimeLeft -= 1;
      if (this.reflexTimeLeft <= 0) {
        this.endReflex();
      }
    }, 1000);
    this.reflexMoveIntervalId = setInterval(() => this.moveReflexTarget(), 900);
  }

  endReflex(): void {
    if (!this.reflexIsPlaying) {
      return;
    }
    this.reflexIsPlaying = false;
    this.clearReflexTimers();
    if (this.reflexScore > this.reflexBestScore) {
      this.reflexBestScore = this.reflexScore;
    }
  }

  hitReflexTarget(): void {
    if (!this.reflexIsPlaying) {
      return;
    }
    this.reflexScore += 1;
    this.moveReflexTarget();
  }

  startTetris(): void {
    if (this.tetrisIsPlaying) {
      return;
    }
    this.resetTetrisState();
    this.tetrisIsPlaying = true;
    this.spawnPiece();
    this.updateTetrisInterval();
  }

  pauseTetris(): void {
    if (!this.tetrisIsPlaying) {
      return;
    }
    this.tetrisIsPlaying = false;
    this.clearTetrisInterval();
  }

  movePiece(offsetX: number): void {
    if (!this.tetrisIsPlaying || !this.activePiece) {
      return;
    }
    if (this.canPlace(this.activePiece, this.activePiece.x + offsetX, this.activePiece.y, this.activePiece.rotationIndex)) {
      this.activePiece.x += offsetX;
    }
  }

  softDrop(): void {
    if (!this.tetrisIsPlaying || !this.activePiece) {
      return;
    }
    if (this.canPlace(this.activePiece, this.activePiece.x, this.activePiece.y + 1, this.activePiece.rotationIndex)) {
      this.activePiece.y += 1;
    } else {
      this.lockPiece();
    }
  }

  rotatePiece(): void {
    if (!this.tetrisIsPlaying || !this.activePiece) {
      return;
    }
    const nextRotation = (this.activePiece.rotationIndex + 1) % TETROMINOES[this.activePiece.key].length;
    if (this.canPlace(this.activePiece, this.activePiece.x, this.activePiece.y, nextRotation)) {
      this.activePiece.rotationIndex = nextRotation;
    }
  }

  ngOnDestroy(): void {
    this.clearReflexTimers();
    this.clearTetrisInterval();
  }

  onGameSelectionChange(game: GameKey): void {
    if (game === this.selectedGame) {
      return;
    }
    this.selectedGame = game;
    if (game !== 'reflex') {
      this.endReflex();
    }
    if (game !== 'tetris') {
      this.pauseTetris();
    }
  }

  private moveReflexTarget(): void {
    const top = 12 + Math.random() * 70;
    const left = 12 + Math.random() * 70;
    this.reflexTargetStyle = {
      top: `${top}%`,
      left: `${left}%`
    };
  }

  private clearReflexTimers(): void {
    if (this.reflexMoveIntervalId) {
      clearInterval(this.reflexMoveIntervalId);
      this.reflexMoveIntervalId = null;
    }
    if (this.reflexCountdownId) {
      clearInterval(this.reflexCountdownId);
      this.reflexCountdownId = null;
    }
  }

  private createEmptyBoard(): string[][] {
    return Array.from({length: BOARD_HEIGHT}, () => Array(BOARD_WIDTH).fill(''));
  }

  private resetTetrisState(): void {
    this.tetrisBoard = this.createEmptyBoard();
    this.tetrisScore = 0;
    this.tetrisLines = 0;
    this.tetrisLevel = 1;
    this.activePiece = null;
    this.clearTetrisInterval();
  }

  private spawnPiece(): void {
    const keys = Object.keys(TETROMINOES) as TetrominoKey[];
    const key = keys[Math.floor(Math.random() * keys.length)];
    this.activePiece = {
      key,
      rotationIndex: 0,
      x: Math.floor(BOARD_WIDTH / 2) - 2,
      y: 0
    };
    if (!this.canPlace(this.activePiece, this.activePiece.x, this.activePiece.y, this.activePiece.rotationIndex)) {
      // game over
      this.pauseTetris();
      if (this.tetrisScore > this.tetrisBestScore) {
        this.tetrisBestScore = this.tetrisScore;
      }
    }
  }

  private getCurrentShape(piece: ActivePiece, rotationIndex?: number): number[][] {
    const rotations = TETROMINOES[piece.key];
    return rotations[rotationIndex ?? piece.rotationIndex];
  }

  private canPlace(piece: ActivePiece, targetX: number, targetY: number, rotationIndex: number): boolean {
    const shape = this.getCurrentShape(piece, rotationIndex);
    for (let row = 0; row < shape.length; row += 1) {
      for (let col = 0; col < shape[row].length; col += 1) {
        if (!shape[row][col]) {
          continue;
        }
        const x = targetX + col;
        const y = targetY + row;
        if (x < 0 || x >= BOARD_WIDTH || y >= BOARD_HEIGHT) {
          return false;
        }
        if (y >= 0 && this.tetrisBoard[y][x]) {
          return false;
        }
      }
    }
    return true;
  }

  private lockPiece(): void {
    if (!this.activePiece) {
      return;
    }
    const shape = this.getCurrentShape(this.activePiece);
    const key = this.activePiece.key;
    for (let row = 0; row < shape.length; row += 1) {
      for (let col = 0; col < shape[row].length; col += 1) {
        if (!shape[row][col]) {
          continue;
        }
        const boardY = this.activePiece.y + row;
        const boardX = this.activePiece.x + col;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          this.tetrisBoard[boardY][boardX] = TETROMINO_COLORS[key];
        }
      }
    }
    this.clearCompletedLines();
    this.spawnPiece();
  }

  private clearCompletedLines(): void {
    const newBoard: string[][] = [];
    let clearedLines = 0;
    for (const row of this.tetrisBoard) {
      if (row.every(cell => cell)) {
        clearedLines += 1;
      } else {
        newBoard.push(row);
      }
    }
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(''));
    }
    if (clearedLines > 0) {
      this.tetrisBoard = newBoard;
      this.tetrisLines += clearedLines;
      this.tetrisScore += this.computeScore(clearedLines);
      this.tetrisLevel = 1 + Math.floor(this.tetrisLines / 10);
      if (this.tetrisScore > this.tetrisBestScore) {
        this.tetrisBestScore = this.tetrisScore;
      }
      this.updateTetrisInterval();
    }
  }

  private computeScore(lines: number): number {
    const base = [0, 100, 250, 500, 800][lines] ?? 0;
    return base * this.tetrisLevel;
  }

  private updateTetrisInterval(): void {
    this.clearTetrisInterval();
    const speed = Math.max(150, 850 - (this.tetrisLevel - 1) * 80);
    this.tetrisDropIntervalId = setInterval(() => {
      if (!this.activePiece) {
        return;
      }
      if (this.canPlace(this.activePiece, this.activePiece.x, this.activePiece.y + 1, this.activePiece.rotationIndex)) {
        this.activePiece.y += 1;
      } else {
        this.lockPiece();
      }
    }, speed);
  }

  private clearTetrisInterval(): void {
    if (this.tetrisDropIntervalId) {
      clearInterval(this.tetrisDropIntervalId);
      this.tetrisDropIntervalId = null;
    }
  }

  get renderedBoard(): string[][] {
    const snapshot = this.tetrisBoard.map(row => [...row]);
    if (!this.activePiece) {
      return snapshot;
    }
    const shape = this.getCurrentShape(this.activePiece);
    const color = `${TETROMINO_COLORS[this.activePiece.key]} tetris-cell--active`;
    for (let row = 0; row < shape.length; row += 1) {
      for (let col = 0; col < shape[row].length; col += 1) {
        if (!shape[row][col]) {
          continue;
        }
        const y = this.activePiece.y + row;
        const x = this.activePiece.x + col;
        if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
          snapshot[y][x] = color;
        }
      }
    }
    return snapshot;
  }
}
