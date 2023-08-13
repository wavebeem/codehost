export type Theme = Record<string, ThemeObj>;
export type ThemeObj = Record<string, string>;

export function colorStyle<TColor extends string>(color: TColor) {
  return { color } as const;
}

export const themeRootBase: ThemeObj = {
  padding: "0.75rem",
  "border-radius": "0",
  "line-height": "1.5",
  "overflow-x": "auto",
  "font-size": "1rem",
  "margin-left": "-0.75rem",
  "margin-right": "-0.75rem",
  border: "0",
};
