import { Theme, colorStyle } from "./util";

export const ui = {
  bg0: "#161B22",
  bg1: "#0D1117",

  fg: "#E6EDF3",
} as const;

const syntax = {
  default: ui.fg,
  gray: "#8B949E",
  red: "#FF7B72",
  green: "#7EE787",
  purple: "#D2A8FF",
  cyan: "#A5D6FF",
  blue: "#79C0FF",
  orange: "#FFA657",
} as const;

const colors = {
  fg: colorStyle(syntax.default),
  gray: colorStyle(syntax.gray),
  red: colorStyle(syntax.red),
  green: colorStyle(syntax.green),
  purple: colorStyle(syntax.purple),
  cyan: colorStyle(syntax.cyan),
  blue: colorStyle(syntax.blue),
  orange: colorStyle(syntax.orange),
} as const;

export const theme: Theme = {
  _meta: {
    name: "GitHub Dark Default",
    id: "github-dark-default",
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

  comment: colors.gray,
  prolog: colors.gray,
  doctype: colors.gray,
  cdata: colors.gray,

  punctuation: colors.fg,

  "attr-value": colors.orange,
  string: colors.cyan,
  char: colors.cyan,
  inserted: colors.orange,

  number: colors.blue,
  hexcode: colors.purple,
  regex: colors.cyan,

  unit: colors.purple,

  operator: colors.red,
  url: colors.orange,

  atrule: colors.red,
  "attr-name": colors.fg,
  function: colors.purple,

  "class-name": colors.orange,

  tag: colors.red,
  selector: colors.red,
  keyword: colors.red,
  rule: colors.red,

  property: colors.purple,
  constant: colors.blue,

  builtin: colors.blue,
  variable: colors.orange,

  symbol: colors.purple,
  deleted: colors.red,
  boolean: colors.blue,
  important: colors.red,
};
