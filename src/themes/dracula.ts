import { Theme, colorStyle } from "./util";

export const ui = {
  bg0: "#282A36",
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
} as const;

const colors = {
  fg: colorStyle(syntax.default),
  comment: colorStyle(syntax.comment),
  punctuation: colorStyle(syntax.default),
  string: colorStyle(syntax.yellow),
  char: colorStyle(syntax.purple),
  regex: colorStyle(syntax.red),
  number: colorStyle(syntax.purple),
  unit: colorStyle(syntax.purple),
  property: colorStyle(syntax.purple),
  selector: colorStyle(syntax.pink),
  operator: colorStyle(syntax.pink),
  function: colorStyle(syntax.green),
  class: colorStyle(syntax.cyan),
  keyword: colorStyle(syntax.pink),
} as const;

export const theme: Theme = {
  _meta: {
    name: "Dracula",
    id: "dracula",
  },

  _root: {
    "box-sizing": "border-box",
    padding: "0.75rem",
    margin: "1.25rem -0.75rem",
    "border-radius": "0",
    "line-height": "1.5",
    "overflow-x": "auto",
    background: ui.bg0,
    color: syntax.default,
    "color-scheme": "dark",
    "scrollbar-color": `${ui.bg1} ${ui.fg}`,
    "border-top": "1px solid #ccc",
    "border-bottom": "1px solid #ccc",
  },

  _footer: {
    margin: "-0.75rem",
    marginTop: "-1.25rem",
    marginBottom: "1.25rem",
    padding: "0.25rem 0.5rem",
    fontSize: "smaller",
    textAlign: "right",
    background: ui.bg1,
    color: ui.fg,
    "border-bottom": "1px solid #ccc",
  },

  script: colors.fg,

  comment: colors.comment,
  prolog: colors.comment,
  doctype: colors.comment,
  cdata: colors.comment,

  punctuation: colors.punctuation,

  "attr-value": colors.string,
  string: colors.string,
  char: colors.char,
  inserted: colors.string,

  number: colors.number,
  hexcode: colors.number,
  regex: colors.regex,

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

  symbol: colors.function,
  deleted: colors.property,
  boolean: colors.property,
  important: colors.property,
};
