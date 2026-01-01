
import Link from "next/link"
import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"


const CTA = () => {
  return (
     <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Connect?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join WeConnect today and start building meaningful professional relationships in a clean, focused
                  environment.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/register">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CTA