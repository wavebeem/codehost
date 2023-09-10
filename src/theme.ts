import { colord } from "./colord";

export type Theme = Record<string, ThemeObj>;
export type ThemeObj = Record<string, string>;

const hue = {
  main: 170,
  uno: 100,
  due: 65,
  tre: 330,
} as const;

export const ui = {
  bg0: lch(18, 14, hue.main),
  bg1: lch(12, 14, hue.main),

  fg: lch(90, 20, hue.main),

  border0: lch(30, 20, hue.main),
  border1: lch(50, 30, hue.main),

  bracket1: lch(65, 48, hue.uno),
  bracket2: lch(65, 32, hue.due),
  bracket3: lch(65, 31, hue.tre),
} as const;

const syntax = {
  default: ui.fg,
  alt0: lch(61, 14, hue.main),
  alt1: lch(61, 40, hue.main),

  uno0: lch(90, 30, hue.uno),
  uno1: lch(80, 60, hue.uno),

  due0: lch(90, 30, hue.due),
  due1: lch(80, 50, hue.due),
  due2: lch(70, 60, hue.due),

  tre0: lch(90, 30, hue.tre),
  tre1: lch(80, 50, hue.tre),
  tre2: lch(70, 60, hue.tre),
} as const;

function lch(l: number, c: number, h: number): string {
  return colord({ l, c, h }).toHex();
}

export function colorStyle<TColor extends string>(color: TColor) {
  return { color } as const;
}

const colors = {
  fg: colorStyle(syntax.default),
  comment: colorStyle(syntax.alt0),
  punctuation: colorStyle(syntax.alt1),
  string: colorStyle(syntax.tre1),
  number: colorStyle(syntax.tre0),
  unit: colorStyle(syntax.tre2),
  property: colorStyle(syntax.uno0),
  selector: colorStyle(syntax.due1),
  operator: colorStyle(syntax.alt1),
  function: colorStyle(syntax.due0),
  class: colorStyle(syntax.due1),
  keyword: colorStyle(syntax.uno1),
} as const;

export const theme: Theme = {
  _root: {
    padding: "0.75rem",
    "border-radius": "0",
    "line-height": "1.5",
    "overflow-x": "auto",
    "font-size": "1rem",
    margin: "1.25rem -0.75rem",
    border: "0",
    "scrollbar-color": `${ui.fg} ${ui.bg1}`,
    background: ui.bg0,
    color: syntax.default,
    "color-scheme": "dark",
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

  number: colors.number,
  hexcode: colors.number,
  regex: colors.number,

  unit: colors.unit,

  operator: colors.operator,
  entity: colors.operator,
  url: colors.operator,

  atrule: colors.function,
  "attr-name": colors.function,
  function: colors.function,

  "class-name": colors.class,

  tag: colors.keyword,
  selector: colors.selector,
  keyword: colors.keyword,
  rule: colors.keyword,

  property: colors.property,
  constant: colors.property,

  symbol: colors.property,
  deleted: colors.property,
  boolean: colors.property,
  important: colors.property,
};
