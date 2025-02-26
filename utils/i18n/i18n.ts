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
    .init<typeof enTranslation>({
      resources: {
        en: {
          translation: enTranslation,
        },
        zh: {
          translation: zhTranslation,
        },
      },
      lng: "en", // 默认语言
      fallbackLng: "zh",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["querystring", "localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      // 确保在初始化时将默认语言保存到localStorage
      // 删除init属性，因为它不是i18next InitOptions的有效配置项
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;