import { Theme, colorStyle } from "./util";

export const ui = {
  bg0: "#191a21",
  bg1: "#282A36",

  fg: "#F8F8F2",
} as const;

const syntax = {
  default: ui.fg,
  comment: "#6272A4",
  pink: "#FF79C6",
  green: "#50FA7B",
  red: "#FF5555",
  purple: "#BD93F9",
  yellow: "#F1FA8C",
  cyan: "#8BE9FD",
  orange: "#FFB86C",
} as const;

const colors = {
  fg: colorStyle(syntax.default),
  comment: colorStyle(syntax.comment),
  pink: colorStyle(syntax.pink),
  green: colorStyle(syntax.green),
  red: colorStyle(syntax.red),
  purple: colorStyle(syntax.purple),
  yellow: colorStyle(syntax.yellow),
  cyan: colorStyle(syntax.cyan),
  orange: colorStyle(syntax.orange),
} as const;

export const theme: Theme = {
  _meta: {
    name: "Dracula",
    id: "dracula",
  },

  _root: {
    background: ui.bg1,
    color: syntax.default,
    "color-scheme": "dark",
    "scrollbar-color": `${ui.fg} ${ui.bg0}`,
  },

  _footer: {
    background: ui.bg0,
    color: ui.fg,
  },

  script: colors.fg,

  comment: colors.comment,
  prolog: colors.comment,
  doctype: colors.comment,
  cdata: colors.comment,

  punctuation: colors.fg,

  "attr-value": colors.yellow,
  string: colors.yellow,
  char: colors.purple,
  inserted: colors.yellow,

  number: colors.purple,
  hexcode: colors.purple,
  regex: colors.red,

  unit: colors.purple,

  operator: colors.pink,
  url: colors.pink,

  atrule: colors.pink,
  "attr-name": colors.green,
  function: colors.green,

  "class-name": colors.cyan,

  tag: colors.pink,
  selector: colors.pink,
  keyword: colors.pink,
  rule: colors.pink,

  property: colors.purple,
  constant: colors.purple,

  builtin: colors.cyan,
  variable: colors.orange,

  symbol: colors.purple,
  deleted: colors.orange,
  boolean: colors.purple,
  important: colors.pink,
};
