import { createElement } from "@/runtime/jsx-runtime";
import { useTranslation } from "@/runtime/hooks/translation";
import { useState } from "@/runtime/hooks/state";
import { useEffect } from "@/runtime/hooks/effect";

export function ChangeLanguageCombobox() {
    const [open, setOpen] = useState(false);
    const { t, language, setLanguage } = useTranslation();

    // Close dropdown on click outside (using data attributes)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement;
            if (!target.closest("[data-lang-combobox]")) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <div className="flex relative" data-lang-combobox>
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Change language"
                className="flex items-center justify-center w-12 h-12 transition-transform rounded-full scale-95 cursor-pointer hover:bg-darkgray/5 hover:dark:bg-gray-50/5 outline-cyan-600"
                data-lang-combobox
                onClick={toggleOpen}
                onKeyDown={(e: KeyboardEvent) => {
                    if (
                        e.key === "ArrowDown" ||
                        e.key === "Enter" ||
                        e.key === " "
                    ) {
                        setOpen(true);
                        e.preventDefault();
                    }
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                    ></path>
                </svg>
            </button>
            <ul
                tabIndex={-1}
                role="listbox"
                aria-label="Language selection"
                class={
                    "absolute top-14 -left-8 z-10 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md focus:outline-none" +
                    (open ? "" : " hidden")
                }
                data-lang-combobox
            >
                <li
                    key="en"
                    role="option"
                    aria-selected={language === "en"}
                    className={`px-4 py-2 cursor-pointer hover:bg-cyan-100 dark:hover:bg-cyan-900 ${
                        language === "en"
                            ? "font-bold text-cyan-700 dark:text-cyan-300"
                            : ""
                    }`}
                    data-lang-combobox
                    onClick={() => {
                        setLanguage("en");
                        setOpen(false);
                    }}
                    tabIndex={0}
                    onKeyDown={(e: KeyboardEvent) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setLanguage("en");
                            setOpen(false);
                        }
                    }}
                >
                    {t("changeLanguageButton.language.en")}
                </li>
                <li
                    key="ru"
                    role="option"
                    aria-selected={language === "ru"}
                    className={`px-4 py-2 cursor-pointer hover:bg-cyan-100 dark:hover:bg-cyan-900 ${
                        language === "ru"
                            ? "font-bold text-cyan-700 dark:text-cyan-300"
                            : ""
                    }`}
                    data-lang-combobox
                    onClick={() => {
                        setLanguage("ru");
                        setOpen(false);
                    }}
                    tabIndex={0}
                    onKeyDown={(e: KeyboardEvent) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setLanguage("ru");
                            setOpen(false);
                        }
                    }}
                >
                    {t("changeLanguageButton.language.ru")}
                </li>
            </ul>
        </div>
    );
}
