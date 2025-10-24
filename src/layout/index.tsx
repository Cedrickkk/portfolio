import NavBar from "@/components/nav-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { type ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-2xl">{children}</div>
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
        <TooltipProvider delayDuration={0}>
          <NavBar />
        </TooltipProvider>
      </div>
    </div>
  );
}
