import React from 'react'


const HowItWorks = () => {
  return (
     <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                How WeConnect Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
                Get started in three simple steps and begin building your professional network.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
                <p className="text-gray-600">
                  Sign up with your email and password. Set up your professional profile with your bio and information.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Share & Engage</h3>
                <p className="text-gray-600">
                  Create posts to share your professional thoughts, insights, and updates with the community.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Build Connections</h3>
                <p className="text-gray-600">
                  Discover other professionals, view their profiles, and build meaningful connections in your field.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HowItWorks