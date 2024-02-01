import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ArTrans from "./locales/ar.json";
import EnTrans from "./locales/en.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources

    resources: {
      en: {
        translation: EnTrans,
      },

      ar: {
        translation: ArTrans,
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
i18n.on("languageChanged", (lang) => {
  console.log(lang);
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
});
export default i18n;
