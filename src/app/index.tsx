import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardHeader } from "@/components/ui/card";

export default function App() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col space-y-10 px-6 py-12 sm:py-24">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFade>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm Cedrick 👋
                </h1>
              </BlurFade>
              <BlurFade className="max-w-[600px] md:text-xl">
                Aspiring Software Developer. <br />
                <span className="text-sm">
                  Growing, learning, and evolving - one step at a time.
                </span>
              </BlurFade>
            </div>
            <BlurFade>
              <Avatar className="size-32 border">
                <AvatarImage
                  alt="John Cedric Panti"
                  src="/me-standing.jpg"
                  className="object-cover"
                />
                <AvatarFallback>JCP</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="space-y-6">
        <BlurFade>
          <h2 className="text-xl font-bold tracking-tight">About</h2>
        </BlurFade>
        <BlurFade>
          <div className="text-muted-foreground max-w-full space-y-2 font-sans text-sm text-pretty">
            <p className="text-muted-foreground leading-relaxed">
              An IT student from the Philippines focused on web development,
              working on both frontend and backend skills to become a Full-Stack
              Developer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently in my senior year at Pamantasan ng Lungsod ng Pasig,
              working towards my bachelor's degree in Information Technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently working with Java & Spring Boot and looking forward
              to expanding my skill set by diving into .NET, which will enhance
              my existing knowledge.
            </p>
          </div>
        </BlurFade>
      </section>
      <section id="education" className="space-y-6">
        <BlurFade>
          <h2 className="text-xl font-bold tracking-tight">Education</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade>
            <Card className="flex flex-row gap-0 border-none p-0 shadow-none dark:bg-transparent">
              <div className="flex-none">
                <Avatar className="bg-muted-background m-auto size-12 border">
                  <AvatarImage
                    src="plp.png"
                    alt="Pamantasan ng Lungsod ng Pasig"
                    className="object-contain"
                  />
                  <AvatarFallback>
                    Pamantasan ng Lungsod ng Pasig
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="group ml-4 grow items-center">
                <CardHeader className="px-0">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                      Pamantasan ng Lungsod ng Pasig
                    </h3>
                    <div className="text-muted-foreground text-right text-xs tabular-nums sm:text-sm">
                      2023 - 2026
                    </div>
                  </div>
                  <div className="font-sans text-xs">
                    Bachelor of Science in Information Technology
                  </div>
                </CardHeader>
              </div>
            </Card>
          </BlurFade>
          <BlurFade>
            <Card className="flex flex-row gap-0 border-none p-0 shadow-none dark:bg-transparent">
              <div className="flex-none">
                <Avatar className="bg-muted-background m-auto size-12 border">
                  <AvatarImage
                    src="jru.png"
                    alt="Jose Rizal University"
                    className="object-contain"
                  />
                  <AvatarFallback>Jose Rizal University</AvatarFallback>
                </Avatar>
              </div>
              <div className="group ml-4 grow items-center">
                <CardHeader className="px-0">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                      Jose Rizal University
                    </h3>
                    <div className="text-muted-foreground text-right text-xs tabular-nums sm:text-sm">
                      2022 - 2023
                    </div>
                  </div>
                  <div className="font-sans text-xs">
                    Bachelor of Science in Information Technology
                  </div>
                </CardHeader>
              </div>
            </Card>
          </BlurFade>
        </div>
      </section>
      <section id="skiils" className="space-y-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade>
            <h2 className="text-xl font-bold tracking-tight">
              Technology Stack
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-1 space-y-3">
            <div className="space-y-3">
              <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-1">
                <BlurFade>
                  <Badge>HTML</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>CSS</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Javascript</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Typescript</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>React</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>PHP</Badge>
                </BlurFade>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                Backend
              </h3>
              <div className="flex flex-wrap gap-1">
                <BlurFade>
                  <Badge>Java</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Spring Boot</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>MySQL</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Express.js</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Node.js</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Laravel</Badge>
                </BlurFade>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                Tools
              </h3>
              <div className="flex flex-wrap gap-1">
                <BlurFade>
                  <Badge>Git</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Github</Badge>
                </BlurFade>
                <BlurFade>
                  <Badge>Figma</Badge>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
