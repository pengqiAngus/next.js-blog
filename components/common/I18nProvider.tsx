'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18n/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // 使用状态跟踪组件是否已挂载，避免服务器端和客户端渲染不一致
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 标记组件已挂载
    setMounted(true);
    
    // 从localStorage加载保存的语言设置
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage).then(() => {
        // 确保HTML元素的lang属性与当前语言一致
        document.documentElement.lang = savedLanguage;
      });
    } else {
      // 确保HTML元素的lang属性与当前语言一致
      document.documentElement.lang = i18n.language;
    }

    // 添加语言变化监听器
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;
    };

    i18n.on('languageChanged', handleLanguageChanged);

    // 清理函数
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  // 提供I18n上下文
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 