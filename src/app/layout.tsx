import type { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import { NextIntlClientProvider } from 'next-intl';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Movie Finder',
  description: 'Discover your next favorite movie with Movie Finder. Search, explore, and find movies tailored to your taste.',
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
