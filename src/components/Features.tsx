
import { Users, MessageSquare, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"



const Features = () => {
  return (
       <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Everything you need to connect
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
                WeConnect focuses on the essentials of professional networking without the complexity.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional Profiles</h3>
                  <p className="text-gray-600">
                    Create your professional profile with name, email, and bio. Showcase who you are and what you do.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Share Your Thoughts</h3>
                  <p className="text-gray-600">
                    Create and share text posts with the community. Share insights, updates, and professional thoughts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Feed</h3>
                  <p className="text-gray-600">
                    Stay updated with a clean, chronological feed of posts from your professional community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Features