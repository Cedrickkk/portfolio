import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { BsChevronRight } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { books } from "@/data/books";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { technologyStack } from "@/data/tech-stack";
import { GrGithub } from "react-icons/gr";

const BLUR_FADE_DELAY = 0.04;

export default function App() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col space-y-10 px-6 py-12 sm:py-24">
      <section id="hero" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm Cedrick
                </h1>
              </BlurFade>
              <BlurFade
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
              >
                <Highlighter
                  action="underline"
                  color="#1477e6"
                  animationDuration={3500}
                >
                  Aspiring Software Developer.
                </Highlighter>
                <br />
                <span className="text-sm">
                  Growing, learning, and evolving - one step at a time.
                </span>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="hidden sm:block">
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
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-base font-bold tracking-tight md:text-lg">
            About
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="text-muted-foreground max-w-full space-y-2 font-sans text-sm text-pretty">
            <p className="text-muted-foreground leading-relaxed">
              An IT student from the Philippines focused on web development,
              working on both frontend and backend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently in my senior year at Pamantasan ng Lungsod ng Pasig,
              working towards my bachelor's degree in Information Technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently learning and specializing in Java and Spring Boot
              development.
            </p>
          </div>
        </BlurFade>
      </section>
      <section id="education" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-base font-bold tracking-tight md:text-lg">
            Education
          </h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          {education.map((item, idx) => {
            return (
              <BlurFade delay={BLUR_FADE_DELAY * 6 + idx * 0.05}>
                <Card className="flex flex-row gap-0 border-none p-0 shadow-none dark:bg-transparent">
                  <div className="flex-none">
                    <Avatar className="bg-muted-background m-auto size-12 border">
                      <AvatarImage
                        src={item.imageSource}
                        alt={item.name}
                        className="object-contain"
                      />
                      <AvatarFallback>{item.name}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="group ml-4 grow items-center">
                    <CardHeader className="px-0">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                          {item.name}
                        </h3>
                        <div className="text-muted-foreground text-right text-xs tabular-nums sm:text-sm">
                          {item.years}
                        </div>
                      </div>
                      <div className="font-sans text-xs">{item.course}</div>
                    </CardHeader>
                  </div>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section id="skills" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-base font-bold tracking-tight md:text-lg">
            Tech Stack
          </h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <div className="flex flex-col gap-1 space-y-3">
            {technologyStack.map((stack) => {
              return (
                <div className="space-y-3">
                  <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <h3 className="inline-flex items-center justify-center text-xs leading-none font-semibold sm:text-sm">
                      {stack.type}
                    </h3>
                  </BlurFade>
                  <div className="flex flex-wrap gap-1">
                    {stack.technologies.map((tech, idx) => {
                      return (
                        <BlurFade delay={BLUR_FADE_DELAY * 9 + idx * 0.05}>
                          <Badge>{tech}</Badge>
                        </BlurFade>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h2 className="text-base font-bold tracking-tight md:text-lg">
            Projects
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Here are some of the self-learning and academic projects I built.
            Each project helped me apply what I learned and explore different
            technologies hands-on.
          </p>
        </BlurFade>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
          {projects.map((project, idx) => {
            return (
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 + idx * 0.05}
                key={project.id}
              >
                <Card className="group flex h-full flex-col gap-2 overflow-hidden rounded-sm border transition-all duration-300 ease-out hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <AspectRatio>
                      <img src={project.imageSource} alt={project.name} />
                    </AspectRatio>
                  </div>
                  <CardHeader className="mt-4">
                    <div className="space-y-1">
                      <h3 className="text-base leading-none font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.technologies.map((technology) => {
                        return (
                          <Badge variant="secondary" className="text-xs">
                            {technology}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex justify-center pt-4">
            <a
              href="https://github.com/Cedrickkk?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground group inline-flex items-center justify-center gap-1 text-sm transition-colors"
            >
              <span>View more projects</span>
              <BsChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </BlurFade>
      </section>
      <section id="currently" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <h2 className="text-base font-bold tracking-tight md:text-lg">
            Currently
          </h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I like reading technical books and exploring new technologies. The
              following books are what I am currently reading, and it helps me
              have a deeper understanding of backend development with Java and
              Spring.
            </p>
          </BlurFade>

          <div className="mt-3 space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {books.map((book, idx) => {
                  return (
                    <BlurFade
                      delay={BLUR_FADE_DELAY * 16 + idx * 0.05}
                      key={book.id}
                    >
                      <li className="relative ml-10 py-4">
                        <div className="absolute top-2 -left-16 flex items-center justify-center rounded-full bg-white">
                          <Avatar className="m-auto size-12 border">
                            <AvatarImage
                              src={book.imageSource}
                              alt={book.name}
                              className="object-contain"
                            />
                            <AvatarFallback></AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-1 flex-col justify-start gap-1">
                          <h2 className="leading-none font-semibold">
                            {book.name}
                          </h2>
                          <p className="text-muted-foreground text-sm">
                            {book.author}
                          </p>
                          <span className="text-muted-foreground text-sm">
                            {book.description}
                          </span>
                          <Badge asChild className="mt-2">
                            <a
                              href={book.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GrGithub />
                              View Book Projects
                            </a>
                          </Badge>
                        </div>
                      </li>
                    </BlurFade>
                  );
                })}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="contact" className="pb-12">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <h2 className="text-base font-bold tracking-tight md:text-lg">
              Get in Touch
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <p className="text-muted-foreground mx-auto max-w-[600px] text-sm">
              I'm currently on the lookout for a chance to learn and grow
              through an internship or job. I’d love to hear from you!
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
