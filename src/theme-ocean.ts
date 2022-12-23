import { Theme, colorStyle, themeRootBase } from "./themes";

const bg = "hsl(200 20% 15%)";
// Copy/paste from Color Combos
// https://color-combos.wavebeem.com
const [fg, subtle, green, blue, orange] = `
hsl(220 80% 90%)
hsl(220 40% 65%)
hsl(160 80% 65%)
hsl(200 80% 65%)
hsl(30 80% 65%)
`
  .trim()
  .split("\n")
  .map((s) => s.trim())
  .filter((s) => s);

const colors = {
  fg: colorStyle(fg),
  comment: colorStyle(subtle),
  punctuation: colorStyle(subtle),
  string: colorStyle(orange),
  property: colorStyle(blue),
  selector: colorStyle(green),
  operator: colorStyle(subtle),
  function: colorStyle(blue),
  keyword: colorStyle(green),
} as const;

export const themeOcean: Theme = {
  _root: {
    ...themeRootBase,
    "scrollbar-color": "hsl(200 10% 75%) hsl(200 20% 35%)",
    background: bg,
    color: fg,
  },

  script: colors.fg,

  comment: colors.comment,
  prolog: colors.comment,
  doctype: colors.comment,
  cdata: colors.comment,

  punctuation: colors.punctuation,

  "attr-value": colors.string,
  string: colors.string,
  char: colors.string,
  builtin: colors.string,
  inserted: colors.string,

  operator: colors.operator,
  entity: colors.operator,
  url: colors.operator,

  atrule: colors.function,
  "attr-name": colors.function,
  function: colors.function,
  "class-name": colors.function,

  tag: colors.keyword,
  selector: colors.keyword,
  keyword: colors.keyword,
  rule: colors.keyword,

  property: colors.property,
  constant: colors.property,
  symbol: colors.property,
  deleted: colors.property,
  boolean: colors.property,
  number: colors.property,
  regex: colors.property,
  important: colors.property,
};
