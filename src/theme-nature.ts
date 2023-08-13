import { Theme, colorStyle, themeRootBase } from "./theme-utils";
import { qw } from "./utils";

const bg = "hsl(160 40% 94%)";
// Copy/paste from Color Combos
// https://color-combos.wavebeem.com
const [fg, subtle, uno, due, tre] = qw`
hsl(160 100% 21%)
hsl(205 50% 42%)
hsl(205 85% 37%)
hsl(50 80% 27%)
hsl(310 95% 35%)
`;

const colors = {
  fg: colorStyle(fg),
  comment: colorStyle(subtle),
  punctuation: colorStyle(subtle),
  string: colorStyle(tre),
  property: colorStyle(due),
  selector: colorStyle(uno),
  operator: colorStyle(subtle),
  function: colorStyle(due),
  keyword: colorStyle(uno),
} as const;

export const theme: Theme = {
  _root: {
    ...themeRootBase,
    "scrollbar-color": `${fg} ${bg}`,
    "box-shadow": `
      inset 0 1px 0 0 hsl(160 40% 75%),
      inset 0 -1px 0 0 hsl(160 40% 75%)
    `,
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
