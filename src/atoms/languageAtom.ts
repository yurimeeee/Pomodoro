import { atom } from "jotai";
import i18n from "@locales/i18n";

type Language = 'ko' | 'en';

// export const languageAtom = atom<Language>('ko');
export const languageAtom = atom<Language>(i18n.language as Language);

export const toggleLanguageAtom = atom(null, (get, set) => {
  const currentLang = get(languageAtom);
  const newLang = currentLang === 'ko' ? 'en' : 'ko'

  //Jotai 상태 업데이트
  set(languageAtom, newLang);

  //i18n 언어 변경 
  i18n.changeLanguage(newLang);

});