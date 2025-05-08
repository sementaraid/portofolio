import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="basis-full text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link
          href={"/"}
          className={buttonVariants({
            variant: 'default',
            size: 'sm'
          })}>
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default NotFound