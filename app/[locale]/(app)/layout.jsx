import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "APP",
  description: "App Pages",
};

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <Header />
      </header>
      {/* Main Content */}
      <main className="flex-1 ">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
