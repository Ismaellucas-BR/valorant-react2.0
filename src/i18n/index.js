import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";
import ptHome from "./locales/pt/home.json";
import enHome from "./locales/en/home.json";
import ptAgents from "./locales/pt/agents.json";
import enAgents from "./locales/en/agents.json";
import ptInternalAgents from "./locales/pt/internalAgents.json";
import enInternalAgents from "./locales/en/internalAgents.json";
import ptMaps from "./locales/pt/Maps.json";
import enMaps from "./locales/en/Maps.json";
import ptArsenal from "./locales/pt/Arsenal.json";
import enArsenal from "./locales/en/Arsenal.json";
import ptMedia from "./locales/pt/Media.json";
import enMedia from "./locales/en/Media.json";
import ptNews from "./locales/pt/News.json";
import enNews from "./locales/en/News.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      agents: enAgents,
      internalAgents: enInternalAgents,
      Maps: enMaps,
      Arsenal: enArsenal,
      Media: enMedia,
      News: enNews,
    },
    pt: {
      common: ptCommon,
      home: ptHome,
      agents: ptAgents,
      internalAgents: ptInternalAgents,
      Maps: ptMaps,
      Arsenal: ptArsenal,
      Media: ptMedia,
      News: ptNews,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["common", "home", "agents", "Maps", "Arsenal", "Media", "News"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
