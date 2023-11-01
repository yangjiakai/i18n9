
import './globals.css'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Link from "next-intl/link";
import { useTranslations } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
const locales = ['en', 'jp'];
const inter = Inter({ subsets: ['latin'] })


function Header() {
  const t = useTranslations('Menu');
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">{t("home")}</a></li>
          <li><a href="/about">{t("about")}</a></li>
          <li>
            <details>
              <summary>
                多语言
              </summary>
              <ul className="p-2 bg-base-100">
                <li> <Link href="/" locale="en" >英文</Link></li>
                <li> <Link href="/" locale="jp" >日语</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>

  );
}



export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
