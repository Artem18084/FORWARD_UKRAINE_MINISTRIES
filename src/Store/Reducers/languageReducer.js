import languageJson from "../../translation.json";

const initialState = {
  language: "Eng",
  textJson: languageJson["Eng"],
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
