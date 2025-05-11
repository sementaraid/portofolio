import CenterGlow from "@/components/assets/svgs/center-glow"
import { Card, CardContent } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam";
import Brush from "@/components/assets/svgs/brush";

const Home = () => {
  return (
    <div className="relative px-4 md:px-0">
      <CenterGlow className="absolute z-[-3] w-full top-[-150px] scale-[0.4]" />
      <div className="text-center max-w-4xl m-auto px-4">
        <h1 className={"font-poppins text-[4rem] text-center font-[600]"}>Anantara</h1>
        <div className="relative my-16">
          <Brush className="absolute top-[-60px] right-0 md:right-56 m-auto mb-16" />
        </div>
        <p className="font-poppins text-center leading-relaxed text-muted-foreground font-[400]">
          Welcome to my little corner of the internet! 👋🏽<br />
          Here, I share my journey as a frontend engineer - the ups, downs, and everything in between.<br />
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
    </div>
  )
}

export default Home