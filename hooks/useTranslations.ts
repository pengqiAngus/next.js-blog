import { useTranslation } from 'react-i18next';

export function useTranslations() {
  const { t, i18n } = useTranslation();

  // 返回一个更直观的接口，方便在组件中使用
  return {
    t,                                  // 翻译函数
    currentLanguage: i18n.language,     // 当前语言
    changeLanguage: i18n.changeLanguage, // 切换语言函数
    isRightToLeft: i18n.dir() === 'rtl', // 是否右到左语言
    
    // 语言特定的实用函数
    formatDate: (date: Date) => {
      return new Intl.DateTimeFormat(i18n.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    }
  };
} 