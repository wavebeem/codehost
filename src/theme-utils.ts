export type Theme = Record<string, ThemeObj>;
export type ThemeObj = Record<string, string>;

export function colorStyle<TColor extends string>(color: TColor) {
  return { color } as const;
}

export function colorStyleBold<TColor extends string>(color: TColor) {
  return { color, "font-weight": "bold" } as const;
}

export const themeRootBase: ThemeObj = {
  padding: "12px",
  "border-radius": "0",
  "line-height": "1.5",
  "overflow-x": "auto",
  "font-size": "14px",
  "margin-left": "-12px",
  "margin-right": "-12px",
  border: "0",
};
