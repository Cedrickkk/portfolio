import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { externalLinks, navigation } from "@/data/navigation";

export default function NavBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="bg-background/60 dark:bg-background/60 absolute inset-x-0 bottom-0 h-16 backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="relative mx-auto mb-1 flex w-full justify-center overflow-visible">
        <Dock
          direction="middle"
          className="bg-background pointer-events-auto relative z-10 flex h-14 items-center gap-1 rounded-2xl border px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]"
        >
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <DockIcon key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.url}
                      className="flex items-center justify-center"
                      aria-label={item.name}
                    >
                      <Icon className="size-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          <Separator orientation="vertical" className="h-full py-2" />
          {externalLinks.map((item) => {
            const Icon = item.icon;
            return (
              <DockIcon key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                      aria-label={item.name}
                    >
                      <Icon className="size-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <AnimatedThemeToggler className="size-4 shrink-0 -translate-x-px cursor-pointer stroke-2" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
