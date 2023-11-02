

export const metadata = {
  title: 'APP',
  description: 'App Pages',
}

export default function AdminLayout({
  children,
}) {
  return (
    <div>
      <header>
        AdminLayout
      </header>

      {children}
    </div>

  )
}
