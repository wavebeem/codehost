declare const chroma: any;

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
  return chroma.lch(l, c, h).hex();
}

export function hsl(h: number, s: number, l: number): string {
  return chroma.hsl(h, s / 100, l / 100).hex();
}

export function colorStyle<TColor extends string>(color: TColor) {
  return { color } as const;
}
