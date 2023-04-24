import './globals.css'
import { alata } from "./fonts";
import ThemeProvider from '@/theme';
import LayoutContainer from "./container";
import Topbar from '@/components/Topbar';

export const metadata = {
  title: 'Veloz Budget',
  description: 'Fastest way to keep track of your money!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={alata.className}>
      <ThemeProvider>
        <LayoutContainer>
          <Topbar />
          {children}
        </LayoutContainer>
      </ThemeProvider>
    </html>
  )
}
