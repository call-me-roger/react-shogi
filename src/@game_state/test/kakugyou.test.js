import Bishop from "../src/Bishop";
import Square from "../src/square";
import GameState from "../src/game_state";

describe("Bishop", () => {
  describe("destinations", () => {
    it("must return only valid destinations", () => {
      let Bishop = new Bishop({ id: 17, player_number: 1, type: "Bishop" });
      let origin = new Square({ id: "88", x: 1, y: 7, piece: Bishop });
      let forward = new Square({ id: "87", x: 1, y: 6, piece: null });
      let far = new Square({ id: "86", x: 1, y: 5, piece: null });
      let occupied = new Square({
        id: "85",
        x: 1,
        y: 4,
        piece: { id: 18, player_number: 1, type: "Pawn" }
      });
      let blocked = new Square({ id: "84", x: 1, y: 3, piece: null });
      let diagonalForward = new Square({ id: "77", x: 2, y: 6, piece: null });
      let diagonalFar = new Square({ id: "66", x: 3, y: 5, piece: null });
      let side = new Square({ id: "78", x: 2, y: 7, piece: null });
      let diagonalBack = new Square({ id: "79", x: 2, y: 8, piece: null });
      let back = new Square({ id: "89", x: 1, y: 8, piece: null });
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          occupied,
          blocked,
          diagonalForward,
          diagonalFar,
          side,
          diagonalBack,
          back
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = Bishop.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(occupied);
      expect(result.squares).not.toContainEqual(blocked);
      expect(result.squares).toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it("must return occupied by opponent squares", () => {
      let Bishop = new Bishop({ id: 17, player_number: 1, type: "Bishop" });
      let origin = new Square({ id: "88", x: 1, y: 7, piece: Bishop });
      let forward = new Square({
        id: "87",
        x: 1,
        y: 6,
        piece: { id: 1, player_number: 2, type: "Pawn" }
      });
      let far = new Square({
        id: "86",
        x: 1,
        y: 5,
        piece: { id: 2, player_number: 2, type: "Pawn" }
      });
      let occupied = new Square({
        id: "85",
        x: 1,
        y: 4,
        piece: { id: 18, player_number: 1, type: "Pawn" }
      });
      let blocked = new Square({
        id: "84",
        x: 1,
        y: 3,
        piece: { id: 19, player_number: 2, type: "Pawn" }
      });
      let diagonalForward = new Square({
        id: "77",
        x: 2,
        y: 6,
        piece: { id: 20, player_number: 2, type: "Pawn" }
      });
      let diagonalFar = new Square({
        id: "66",
        x: 3,
        y: 5,
        piece: { id: 21, player_number: 2, type: "Pawn" }
      });
      let side = new Square({
        id: "78",
        x: 2,
        y: 7,
        piece: { id: 22, player_number: 2, type: "Pawn" }
      });
      let diagonalBack = new Square({
        id: "79",
        x: 2,
        y: 8,
        piece: { id: 23, player_number: 2, type: "Pawn" }
      });
      let back = new Square({
        id: "89",
        x: 1,
        y: 8,
        piece: { id: 24, player_number: 2, type: "Pawn" }
      });
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          occupied,
          blocked,
          diagonalForward,
          diagonalFar,
          side,
          diagonalBack,
          back
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = Bishop.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(occupied);
      expect(result.squares).not.toContainEqual(blocked);
      expect(result.squares).toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(diagonalBack);
    });

    it("must not return occupied by player squares", () => {
      let Bishop = new Bishop({ id: 17, player_number: 1, type: "Bishop" });
      let origin = new Square({ id: "88", x: 1, y: 7, piece: Bishop });
      let forward = new Square({
        id: "87",
        x: 1,
        y: 6,
        piece: { id: 1, player_number: 1, type: "Pawn" }
      });
      let far = new Square({
        id: "86",
        x: 1,
        y: 5,
        piece: { id: 2, player_number: 1, type: "Pawn" }
      });
      let occupied = new Square({
        id: "85",
        x: 1,
        y: 4,
        piece: { id: 18, player_number: 1, type: "Pawn" }
      });
      let blocked = new Square({
        id: "84",
        x: 1,
        y: 3,
        piece: { id: 19, player_number: 1, type: "Pawn" }
      });
      let diagonalForward = new Square({
        id: "77",
        x: 2,
        y: 6,
        piece: { id: 20, player_number: 1, type: "Pawn" }
      });
      let diagonalFar = new Square({
        id: "66",
        x: 3,
        y: 5,
        piece: { id: 21, player_number: 1, type: "Pawn" }
      });
      let side = new Square({
        id: "78",
        x: 2,
        y: 7,
        piece: { id: 22, player_number: 1, type: "Pawn" }
      });
      let diagonalBack = new Square({
        id: "79",
        x: 2,
        y: 8,
        piece: { id: 23, player_number: 1, type: "Pawn" }
      });
      let back = new Square({
        id: "89",
        x: 1,
        y: 8,
        piece: { id: 24, player_number: 1, type: "Pawn" }
      });
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          occupied,
          blocked,
          diagonalForward,
          diagonalFar,
          side,
          diagonalBack,
          back
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = Bishop.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(occupied);
      expect(result.squares).not.toContainEqual(blocked);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });
  });
});
