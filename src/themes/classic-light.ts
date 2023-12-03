import { Theme, colorStyle } from "./util";

export const ui = {
  bg0: "#fff",
  bg1: "#eee",

  fg: "#000",
} as const;

const syntax = {
  default: ui.fg,
  alt0: "#080",
  alt1: "#000",

  uno0: "#008",
  uno1: "#00f",

  due0: "#608",
  due1: "#a0c",

  tre0: "#950",
  tre1: "#c00",
  tre2: "#a60",
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
    name: "Classic Light",
    id: "classic-light",
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
    "scrollbar-color": `${ui.fg} ${ui.bg1}`,
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
