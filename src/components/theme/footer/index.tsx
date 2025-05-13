const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-sm font-light">
          <p className="text-center">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
          <p>
            © {new Date().getFullYear()} Anantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


export default Footer