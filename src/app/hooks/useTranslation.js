'use client';

import { useRouter } from 'next/navigation';
import en from '../../../public/locales/en/translation';
import ja from '../../../public/locales/ja/translation';

const useTranslation = () => {
  const { locale } = useRouter();

  return locale === 'en' ? en : ja;
};

export default useTranslation;
