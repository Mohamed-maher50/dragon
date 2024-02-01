import i18n from "../i18n";

const LangButton = () => {
  const ToggleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <button
      className="fixed   rounded-md animate-bounce hover:animate-none  text-white font-bold shadow-xl duration-300 btn-lg bg-coral-red float-left ms-3 top-36 p-4 cursor-pointer uppercase z-20"
      onClick={ToggleLanguage}
    >
      {i18n.language}
    </button>
  );
};

export default LangButton;
