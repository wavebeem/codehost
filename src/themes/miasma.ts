import { hsl, colorStyle, Theme } from "./util";

const hue = {
  bg: 160,
  uno: 85,
  due: 20,
  tre: 320,
} as const;

const ui = {
  bg0: hsl(hue.bg, 50, 14),
  bg1: hsl(hue.bg, 50, 17),

  fg: hsl(hue.bg, 70, 80),

  border0: hsl(hue.bg, 50, 25),
  border1: hsl(hue.bg, 50, 45),

  link: hsl(hue.uno, 90, 50),

  accent0: hsl(hue.tre, 90, 80),
  accent1: hsl(hue.due, 90, 80),

  bracket1: hsl(hue.uno, 40, 50),
  bracket2: hsl(hue.due, 40, 60),
  bracket3: hsl(hue.tre, 30, 65),

  error: hsl(350, 80, 75),
} as const;

const syntax = {
  default: hsl(hue.bg, 60, 90),

  alt0: hsl(hue.bg, 15, 60),
  alt1: hsl(hue.bg, 40, 48),

  uno0: hsl(hue.uno, 80, 80),
  uno1: hsl(hue.uno, 70, 60),

  due0: hsl(hue.due, 100, 90),
  due1: hsl(hue.due, 90, 75),
  due2: hsl(hue.due, 90, 60),

  tre0: hsl(hue.tre, 100, 90),
  tre1: hsl(hue.tre, 85, 80),
  tre2: hsl(hue.tre, 90, 70),
} as const;

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
  _meta: {
    name: "Miasma",
    id: "miasma",
  },

  _root: {
    background: ui.bg0,
    color: syntax.default,
    "color-scheme": "dark",
    "scrollbar-color": `${ui.fg} ${ui.bg1}`,
  },

  _footer: {
    background: ui.bg1,
    color: ui.fg,
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
