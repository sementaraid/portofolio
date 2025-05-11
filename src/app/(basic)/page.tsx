import CenterGlow from "@/components/assets/svgs/center-glow"
import { Card, CardContent } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam";
import Brush from "@/components/assets/svgs/brush";
import Image from "next/image";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "sonarqube",
  "figma",
];


const Home = () => {
  return (
    <div className="relative px-4 md:px-0">
      <CenterGlow className="absolute z-[-3] w-full top-[350px] md:top-[-150px] md:scale-[0.8] left-0" />
      <div className="text-center max-w-4xl m-auto px-4">
        <h1 className={"font-poppins text-[4rem] text-center font-[600]"}>Anantara</h1>
        <div className="relative my-16">
          <Brush className="w-auto absolute top-[-60px] right-0 sm:right-32 lg:right-56 mb-16" />
        </div>
        <p className="font-poppins text-center leading-relaxed text-muted-foreground font-[500] text-lg mb-6">
          Welcome to my little corner of the internet! 👋🏽
          Here, I share my journey as a frontend engineer - the ups, downs, and everything in between.
        </p>
        <p className="font-poppins text-center leading-relaxed text-muted-foreground font-[500] text-lg">
          You'll find tutorials, reading materials, and stories about my adventures in code.
          Join me as I navigate through the exciting (and sometimes silly) world of frontend development.
        </p>
      </div>
      <div className="max-w-md m-auto relative z-10 mt-16">
        <Card className="border-0 p-0 backdrop-blur supports-[backdrop-filter]:bg-white-500/1 rounded-[32px]">
          <BorderBeam size={200} />
          <CardContent className="p-8">
            <h2 className="font-poppins text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Latest Posts</h2>
            <div className="space-y-4">

              <h3 className="font-poppins text-xl font-medium group-hover:text-primary transition-colors">
                Building Accessible React Components
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed text-base">
                Learn how to create React components that are accessible to all users, following WCAG guidelines and best practices.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">React</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">Accessibility</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center my-16">
        <div className="flex items-center justify-center gap-4">
          {slugs.slice(9).map((slug) => (
            <Image
              key={slug}
              width={32}
              height={32}
              src={`https://cdn.simpleicons.org/${slug}/${slug}.svg`}
              alt={slug.toUpperCase()}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          {slugs.slice(3, 9).map((slug) => (
            <Image
              key={slug}
              width={32}
              height={32}
              src={`https://cdn.simpleicons.org/${slug}/${slug}.svg`}
              alt={slug.toUpperCase()}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {slugs.slice(0, 3).map((slug) => (
            <Image
              key={slug}
              width={32}
              height={32}
              src={`https://cdn.simpleicons.org/${slug}/${slug}.svg`}
              alt={slug.toUpperCase()}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home