import { SquareString } from '@/app/constants';
import { RefObject } from 'react';

export type Color = 'w' | 'b';

export type Figure = 'p' | 'k' | 'q' | 'n';

export type MoveType = 'move' | 'capture' | 'enpassant' | 'promotion';

export type VectorArray = [number, number][];

export interface PieceMapElement {
  figure: Figure;
  color: 'w' | 'b';
}

export interface PossibleMove {
  origin: SquareString;
  destination: SquareString;
  type: MoveType;
  passedPawn?: SquareString;
}

export type OcasionalMove = PossibleMove;

export type CalcPossibleMovesFT = (position: SquareString, figure: Figure) => void;

export type MakeMoveFT = ({
  origin,
  destination,
  type,
}: {
  origin: SquareString;
  destination: SquareString;
  type?: string;
}) => void;

export interface PieceInterface {
  position: SquareString;
  figure: Figure;
  color: string;
  boardRef: RefObject<HTMLDivElement>;
  extra?: {};
  ownPiece: boolean;
  calcPossibleMoves: CalcPossibleMovesFT;
  makeMove: MakeMoveFT;
  key: string;
}

export interface MoveHintInterface {
  origin: SquareString;
  destination: SquareString;
  type: string;
  makeMove: MakeMoveFT;
}
