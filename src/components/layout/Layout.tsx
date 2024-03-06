import { ReactNode } from 'react';
import Header from '../header/Header';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '../theme/ThemeProvider';
import { Toaster } from '../ui/toaster';
import { breakpoints } from '../../../utils/breakpoints';
// import GlobalStyle from '../theme/GlobalStyle';

type LayoutProps = {
  children: ReactNode;
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {/* <GlobalStyle /> */}
        <Header />
        <LayoutContainer>{children}</LayoutContainer>
        <Toaster />
      </ThemeProvider>
      {/* <footer>Footer</footer> */}
    </>
  );
}

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container min-h-[90vh] py-8">{children}</div>;
};
