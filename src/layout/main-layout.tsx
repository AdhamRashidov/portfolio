import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <main className="grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
