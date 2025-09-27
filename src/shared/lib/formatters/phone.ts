/** Оставляет только цифры */
export const onlyDigits = (v: string) => v.replace(/\D+/g, "");

/** Приводит к виду 7XXXXXXXXXX (без плюса) */
export const normalizeRuPhone = (raw: string) => {
    const digits = onlyDigits(raw);

    // Приводим 8XXXXXXXXXX → 7XXXXXXXXXX
    let norm = digits.startsWith("8") ? "7" + digits.slice(1) : digits;

    // Если пользователь ввёл 10 цифр без кода — добавим 7
    if (!norm.startsWith("7") && norm.length === 10) {
        norm = "7" + norm;
    }

    // Только 11 цифр максимум
    return norm.slice(0, 11);
};

/** Маска для отображения: "+7 999 999-99-99" */
export const formatRuPhoneForView = (digitsWithCountry: string) => {
    if (!digitsWithCountry) return "+7 ";
    let d = digitsWithCountry;
    if (!d.startsWith("7")) d = normalizeRuPhone(d);
    const arr = d.split(""); // 7XXXXXXXXXX
    const a = arr.slice(1, 4).join("");
    const b = arr.slice(4, 7).join("");
    const c = arr.slice(7, 9).join("");
    const e = arr.slice(9, 11).join("");
    let out = "+7";
    out += a ? ` ${a}` : " ";
    out += b ? ` ${b}` : "";
    out += c ? `-${c}` : "";
    out += e ? `-${e}` : "";
    return out.trimEnd();
};

/** Из маски/инпута → E.164 (+7XXXXXXXXXX) */
export const denormalizeViewToE164 = (view: string) => {
    const digits = normalizeRuPhone(view);
    return digits ? `+${digits}` : "";
};
