export function qw(
  templates: TemplateStringsArray,
  ...values: any[]
): string[] {
  return String.raw({ raw: templates }, ...values)
    .trim()
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s);
}
