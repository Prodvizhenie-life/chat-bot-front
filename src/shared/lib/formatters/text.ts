/** Трим, lowercase, первая буква каждого слова — большая */
export const capitalizeName = (s: string) =>
    s
        .trim()
        .toLowerCase()
        .replace(/(^|\s|-)\p{L}/gu, (m) => m.toUpperCase());
