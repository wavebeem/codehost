import { extend } from "colord";
import lchPlugin from "colord/plugins/lch";
import a11yPlugin from "colord/plugins/a11y";
import mixPlugin from "colord/plugins/mix";

extend([lchPlugin, a11yPlugin, mixPlugin]);

export { colord } from "colord";
