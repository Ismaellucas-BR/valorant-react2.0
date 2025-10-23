import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";
import ptHome from "./locales/pt/home.json";
import enHome from "./locales/en/home.json";
import ptAgents from "./locales/en/agents.json";
import enAgents from "./locales/en/agents.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      agents: enAgents,
    },
    pt: {
      common: ptCommon,
      home: ptHome,
      agents: ptAgents,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["common", "home", "agents"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
