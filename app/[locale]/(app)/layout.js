import Header from '@/components/Header';

export const metadata = {
  title: 'APP',
  description: 'App Pages',
}

export default function AppLayout({
  children,
}) {
  return (
    <div>
      <header>
        <Header />
      </header>

      {children}
    </div>

  )
}
