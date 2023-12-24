import { Theme } from "./util";

export const theme: Theme = {
  _meta: {
    name: "Base (Internal)",
    id: "base",
  },

  _root: {
    "box-sizing": "border-box",
    padding: "0.5rem",
    margin: "1.25rem 0 0 0",
    "border-radius": "0.25rem 0.25rem 0 0",
    "line-height": "1.5",
    "overflow-x": "auto",
    "color-scheme": "light",
  },

  "_root::last": {
    "border-radius": "0.25rem",
    margin: "1.25rem 0",
  },

  _footer: {
    "margin-bottom": "1.25rem",
    padding: "0.25rem 0.5rem",
    "font-size": "smaller",
    "text-align": "right",
    "border-radius": "0 0 0.25rem 0.25rem",
  },
};
