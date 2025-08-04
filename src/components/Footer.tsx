import Link from "next/link"
import { Users} from "lucide-react"


const Footer = () => {
  return (
         <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center">
          <Users className="h-5 w-5 text-blue-600 mr-2" />
          <span className="text-sm font-medium">WeConnect</span>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <p className="text-xs text-gray-500 sm:ml-auto">© 2025 WeConnect. All rights reserved.</p>
      </footer>
  )
}

export default Footer