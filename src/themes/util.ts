import { colord } from "../colord";

export interface Theme {
  _meta: {
    name: string;
    id: string;
  };
  [token: string]: {
    [property: string]: string;
  };
}

export function lch(l: number, c: number, h: number): string {
  return colord({ l, c, h }).toHex();
}

export function hsl(h: number, s: number, l: number): string {
  return colord({ h, s, l }).toHex();
}

export function colorStyle<TColor extends string>(color: TColor) {
  return { color } as const;
}
