import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">
        <ThemeProvider>{children}</ThemeProvider>
      </main>
    </div>
  );
};

export default MarketingLayout;
