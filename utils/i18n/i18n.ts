'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './translations/en.json';
import zhTranslation from './translations/zh.json';

// 检查i18n是否已经初始化，避免客户端重复初始化
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector) // 添加语言检测
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslation,
        },
        zh: {
          translation: zhTranslation,
        },
      },
      lng: "en", // 默认语言
      fallbackLng: "zn",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n; 