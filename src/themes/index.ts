import { theme as miasma } from "./miasma";
import { theme as toxic } from "./toxic";
import { theme as classicLight } from "./classic-light";

const themesList = [miasma, toxic, classicLight];

export const themes = Object.fromEntries(
  themesList.map((theme) => [theme._meta.id, theme])
);

export type { Theme } from "./util";
