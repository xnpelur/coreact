import { currentComponentId, rerender } from "@/runtime/dom";

let registeredTranslations: Record<string, Record<string, string>> = {};
let currentLang: string | undefined;

const listeners = new Set<string>();

export function useTranslation() {
    if (!currentComponentId) {
        throw new Error("useTranslation must be called within a component");
    }

    listeners.add(currentComponentId);

    return {
        t,
        language: currentLang,
        setLanguage,
    };
}

export function registerTranslations(
    translations: Record<string, Record<string, string>>,
    defaultLanguage?: string
) {
    registeredTranslations = translations;
    currentLang = defaultLanguage ?? Object.keys(registeredTranslations)[0];
}

function setLanguage(lang: string) {
    if (currentLang !== lang && registeredTranslations[lang]) {
        currentLang = lang;
        listeners.forEach((id) => rerender(id));
    }
}

function t(key: string): string {
    if (!currentLang) {
        throw new Error("Translations should be registered before using t");
    }
    return registeredTranslations[currentLang][key] || key;
}
