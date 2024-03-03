import { ReactNode } from 'react';
import Header from '../header/Header';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '../theme/ThemeProvider';
import styled from 'styled-components';
import { Toaster } from '../ui/toaster';

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
        <Header />
        <LayoutContainer>{children}</LayoutContainer>
        <Toaster />
      </ThemeProvider>
      {/* <footer>Footer</footer> */}
    </>
  );
}

const LayoutContainer = styled.div`
  min-height: var(--min-height);
  padding: 1rem;
  font-family: var(--font-sans);
  transition: color 0.2s;
`;
