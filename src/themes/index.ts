import { theme as miasma } from "./miasma";
import { theme as toxic } from "./toxic";
import { theme as classicLight } from "./classic-light";
import { theme as dracula } from "./dracula";

const themesList = [miasma, toxic, classicLight, dracula];

export const themes = Object.fromEntries(
  themesList.map((theme) => [theme._meta.id, theme])
);

export type { Theme } from "./util";
