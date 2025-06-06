import { Card, CardContent } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import CenterGlow from "@/assets/svgs/center-glow";
import Brush from "@/assets/svgs/brush";
import { Typography } from "@/components/theme/typography";

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
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "sonarqube",
  "figma"
];

const Home = () => {
  return (
    <div className="relative px-4 md:px-0">
      <CenterGlow className="absolute z-[-3] w-full top-[500px] md:top-[300px] lg:top-[-300px] md:scale-[0.5] lg:scale-[0.4] left-0" />
      
      <div className="max-w-[800px] m-auto text-center my-16 space-y-8">
        <Typography variant="h1" className="font-poppins text-[4rem] md:text-[6rem] font-semibold tracking-wide">
          Anantara
        </Typography>
        
        <div className="relative">
          <Brush className="w-auto absolute top-[-35px] right-[180px]" />
        </div>
        
        <Typography variant="p" className="text-center font-open-sans text-foreground tracking-[0.175px]">
          Welcome to my little corner of the internet! 👋🏽 <br />
          Here, I share my journey as a frontend engineer - the ups, downs, and everything in between.
          You'll find tutorials, reading materials, and stories about my adventures in code.
          Join me as I navigate through the exciting (and sometimes silly) world of frontend development.
        </Typography>
      </div>

      <div className="max-w-md m-auto relative z-10 my-16">
        <Card className="border-0 p-6 group relative flex flex-col justify-between overflow-hidden rounded-4xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-3 lg:col-span-2">
          <BorderBeam size={150} duration={10} />
          <CardContent className="p-0">
            <div className="space-y-4">
              <Typography variant="h5" className="font-poppins text-xl font-semibold group-hover:text-primary transition-colors">
                Building Accessible React Components
              </Typography>
              
              <Typography variant="p" className="text-foreground mt-2 text-sm tracking-[0.175px] font-open-sans">
                Learn how to create React components that are accessible to all users, following WCAG guidelines and best practices.
              </Typography>
              
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