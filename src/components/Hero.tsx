
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"


const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Connect. Share. Grow.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Join WeConnect, the streamlined professional community platform. Share your thoughts, connect with
                  peers, and build meaningful professional relationships.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/register">
                 <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Free to join
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  No ads
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Simple & clean
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero