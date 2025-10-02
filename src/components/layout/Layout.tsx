import Header from './Header';
import { Outlet } from 'react-router-dom';
import { themeAtom } from '@atoms/themeAtom';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

const Layout = () => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // 사용자 브라우저 테마에 따른 모드 적용
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';

    document.documentElement.classList.add(initialTheme);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />

      <main className="mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
