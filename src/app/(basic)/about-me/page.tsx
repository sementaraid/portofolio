import { Linkedin } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-6 font-mono">About Me</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-1/3">
          {/* Replace with actual profile image */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
            <Image
              src="/profile.PNG"
              fill
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover scale-[3] translate-y-[-10%]"
            />
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center">
              <div className="w-6 flex justify-center">📍</div>
              <span className="text-sm">Yogyakarta, Indonesia</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 flex justify-center">📧</div>
              <a href="mailto:hs1998281@gmail.com" className="text-sm text-primary hover:underline">hs1998281@gmail.com</a>
            </div>
            <div className="flex items-center">
              <div className="w-6 flex justify-center">📱</div>
              <a href="tel:+6281367200856" className="text-sm hover:underline">+62 813 6720 0856</a>
            </div>
            <div className="flex items-center">
              <div className="w-6 flex justify-center"><Linkedin size={14} className="text-[#0A66C2]" /></div>
              <a href="https://www.linkedin.com/in/herlina-sunaryanto-8aa3a6162/" className="text-sm hover:underline">Herlina Sunaryanto</a>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Herlina Sunaryanto</h2>
          <p className="mb-6 font-mono text-sm">
            Results-driven Senior Frontend Engineer with over 5 years of experience in building high-performance web applications.
            Demonstrated expertise in Next.js, React.js, and TypeScript, with a proven track record of improving application
            performance through server-side rendering and optimized build processes.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">Professional Journey</h3>
            <p className="mb-4 font-mono text-sm">
              My career began at Business Placement Center Amikom Yogyakarta, where I developed an alumni tracking portal.
              I later joined ICUBE BY SIRCLO as an Associate Frontend Engineer, working extensively with Magento 2 and
              implementing custom features for e-commerce websites. Currently, I'm a Senior Frontend Engineer at HYSN PTE.LTD
              in Singapore, where I lead migrations to Next.js and implement comprehensive UI design systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Notable Projects</h3>
            <div className="mb-4">
              <h4 className="font-medium">Teramina - AI-Powered Aquaculture Analytics Platform</h4>
              <p className="font-mono text-sm">
                As a Frontend Developer for Teramina, I worked on a state-of-the-art computational ecological
                modeling platform for shrimp farming operations. I architected responsive dashboard interfaces
                and developed interactive data visualization components using React E-chart.js and React-Query.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-10">
        <div className="pb-6 border-b">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <p className="font-medium">Bachelor of Informatics</p>
          <p className="font-mono text-sm">Universitas Amikom Yogyakarta (2015 - 2022)</p>
          <p className="font-mono text-sm">GPA: 3.72</p>
        </div>

        <div className="pb-6 border-b">
          <h3 className="text-xl font-semibold mb-3">Certifications</h3>
          <p className="font-medium">CASP (Certified API Security Professional)</p>
          <p className="font-mono text-sm">August 2024 - Present</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-col gap-4">
          <div className="pb-4 border-b">
            <h4 className="font-medium mb-2">Programming Languages</h4>
            <p className="font-mono text-sm">JavaScript, TypeScript, HTML5, CSS3, PHP</p>
          </div>

          <div className="pb-4 border-b">
            <h4 className="font-medium mb-2">Frontend Frameworks & Libraries</h4>
            <p className="font-mono text-sm">React.js, Next.js, jQuery, Bootstrap, Tailwindcss</p>
          </div>

          <div className="pb-4 border-b">
            <h4 className="font-medium mb-2">Testing & Quality Assurance</h4>
            <p className="font-mono text-sm">Jest, Playwright</p>
          </div>

          <div className="pb-4 border-b">
            <h4 className="font-medium mb-2">E-commerce & CMS</h4>
            <p className="font-mono text-sm">Magento 2, Custom Theme Development, GraphQL</p>
          </div>

          <div className="pb-4 border-b">
            <h4 className="font-medium mb-2">UI/UX</h4>
            <p className="font-mono text-sm">Ant Design, Material UI, Shadcn</p>
          </div>

          <div className="pb-4">
            <h4 className="font-medium mb-2">Data Visualization</h4>
            <p className="font-mono text-sm">React E-chart.js, React-Query</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;