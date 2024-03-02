import languageJson from "../../translation.json";
import axios from "axios";

// Функція для визначення мови користувача на основі його IP-адреси
async function getLanguageFromIP() {
  try {
    const response = await axios.get("https://ipinfo.io/json");
    console.log(response);
    const countryData = response.data; // Отримуємо дані про країну
    const countryCode = countryData.country; // Отримуємо код країни
    // Визначаємо мову на основі коду країни
    if (countryCode === "UA" || countryCode === "RU") {
      return "Ua"; // Українська мова для України та Росії
    } else {
      return "Eng"; // За замовчуванням - англійська мова
    }
  } catch (error) {
    console.error("Error fetching IP data:", error);
    return "Eng"; // За замовчуванням - англійська мова у випадку помилки
  }
}

const initialState = {
  language: await getLanguageFromIP(),
  textJson: languageJson[await getLanguageFromIP()],
};

const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        language: state.language === "Eng" ? "Ua" : "Eng",
        textJson: languageJson[state.language === "Eng" ? "Ua" : "Eng"],
      };
    default:
      return state;
  }
}

export const toggleLanguage = () => ({
  type: TOGGLE_LANGUAGE,
});
