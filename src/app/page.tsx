'use client';

import { Button } from 'antd';
import useTranslation from '@/app/hooks/useTranslation';

export default function Home() {
  const translations = useTranslation();

  return (
    <div className="bg-white w-screen h-screen">
      <Button>{translations.WELCOME.TITLE}</Button>
    </div>
  );
}
