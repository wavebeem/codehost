import {
  Theme,
  colorStyle,
  themeRootBase,
  colorStyleBold,
} from "./theme-utils";
import { qw } from "./utils";

const bg = "hsl(200 45% 20%)";
// Copy/paste from Color Combos
// https://color-combos.wavebeem.com
const [fg, subtle, uno, due, tre] = qw`
hsl(220 80% 90%)
hsl(220 40% 66%)
hsl(160 60% 50%)
hsl(200 80% 65%)
hsl(30 80% 65%)
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
  keyword: colorStyleBold(uno),
} as const;

export const theme: Theme = {
  _root: {
    ...themeRootBase,
    "scrollbar-color": `${fg} ${bg}`,
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
