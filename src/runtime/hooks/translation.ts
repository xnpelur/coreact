import { currentComponentId, rerender } from "@/runtime/dom";

const translations: Record<string, Record<string, string>> = {};

let currentLang = "en";
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

export function registerTranslation(
    lang: string,
    translation: Record<string, string>
) {
    translations[lang] = translation;
}

function setLanguage(lang: string) {
    if (currentLang !== lang && translations[lang]) {
        currentLang = lang;
        listeners.forEach((id) => rerender(id));
    }
}

function t(key: string): string {
    return translations[currentLang][key] || key;
}
