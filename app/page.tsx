"use client";
import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import { HeroParallaxDemo } from "./component/hero2";
import { AnimatedTestimonialsDemo } from "./component/Testimonials";

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Section 1 - Hero Section with blobs */}
      <div className="relative bg-gradient-to-br from-[#f6f7fb] to-[#e3e7f0] min-h-screen">
        {/* Improved blob positioning and colors */}
        <div className="pointer-events-none absolute -top-40 -right-80 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-blue-400/20 to-blue-500/30 blur-3xl animate-pulse" />

        <div className="pointer-events-none absolute -right-60 -bottom-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-orange-300/30 to-orange-400/40 blur-[120px] animate-pulse" />

        <div className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-400/40 to-pink-400/30 blur-[80px]" />

        <Navbar />
        <Hero />
      </div>

      {/* Section 2 - Products with Parallax */}
      <div className="relative bg-gradient-to-b from-amber-50 to-orange-50 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Explore Our Featured Products
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Built with cutting-edge technology, crafted for you.
          </p>
        </div>

        {/* Parallax Component */}
        <div className="mt-10 md:mt-20">
          <HeroParallaxDemo />
        </div>
      </div>

      {/* Section 3 - Testimonials + Description */}
      <section
        className="relative py-16 md:py-32 px-4 md:px-6 min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(79.6 89.1% 89.2%) 0%, hsl(80.9 88.5% 79.6%) 50%, hsl(82.1 87.8% 85.4%) 100%)",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-32 md:w-48 h-32 md:h-48 bg-white/10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
          {/* Left - Testimonials */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0">
            <div className="mb-6 md:mb-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto lg:mx-0"></div>
            </div>
            <AnimatedTestimonialsDemo />
          </div>

          {/* Right - Description / CTA */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Join thousands of creators and developers using our platform to
              build amazing applications faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Building
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white/80 backdrop-blur-sm text-gray-800 font-semibold hover:bg-white transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>

            {/* Stats or additional info */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-xs md:text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs md:text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Pricing Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-[#02203c] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col xl:flex-row items-start w-full">

            {/* Left Content - 30% width */}
            <div className="xl:w-3/10 text-left mx-4 xl:mx-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
                Pricing plans for <span className="text-yellow-300">every need</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Scale as you go with plans designed to match your growth.
              </p>
            </div>

            {/* 10% Gap */}
            <div className="xl:w-1/10"></div>

            {/* Right Pricing Cards - 60% width */}
            <div className="xl:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 xl:mt-0">

              {/* Free Plan */}
              <div className="group flex flex-col justify-between p-8 lg:p-12 rounded-3xl bg-white shadow-xl w-full min-h-[520px] transition-all duration-500 ease-out hover:-translate-y-6 hover:shadow-2xl">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Start for free.
                  </h3>

                  <div className="mb-8">
                    <p className="text-base md:text-lg text-gray-600 mb-4">
                      Get access to:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <span className="text-orange-500 mr-3 text-lg">✓</span>
                        All core features
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-orange-500 mr-3 text-lg">✓</span>
                        Built-in integrations
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-orange-500 mr-3 text-lg">✓</span>
                        Authentication system
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-orange-500 mr-3 text-lg">✓</span>
                        Database functionality
                      </li>
                    </ul>
                  </div>
                </div>

                <button 
                className="w-full py-4 px-6 rounded-full bg-black text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black">
                  Start building
                </button>
              </div>

              {/* Paid Plan */}
              <div className="group flex flex-col justify-between p-8 lg:p-12 rounded-3xl bg-white shadow-xl w-full min-h-[520px] transition-all duration-500 ease-out hover:-translate-y-6 hover:shadow-2xl">

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Paid plans from
                  </h3>
                  <div className="mt-4 flex items-baseline mb-6">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">
                      $20
                    </span>
                    <span className="text-xl md:text-2xl font-normal text-gray-600">
                      /mo
                    </span>
                  </div>

                  <div className="mb-8">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Upgrade as you go for more credits, more features, and more support.
                    </p>
                  </div>
                </div>

                <button
                  className="w-full py-4 px-6 rounded-full bg-black text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black">
                  See all plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Code Pup and how it works.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    How does Code Pup work?
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Code Pup uses advanced AI to transform your natural language descriptions into fully functional applications. Simply describe what you want to build, and our AI generates the complete app with database, authentication, and all necessary features - no coding required.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    Do I need any coding experience?
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Not at all! Code Pup is designed for everyone, regardless of technical background. If you can describe what you want in plain English, you can build an app with Code Pup.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    What types of applications can I build?
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    You can build a wide variety of applications including personal productivity tools, business management systems, customer portals, e-commerce platforms, social apps, and complete enterprise solutions. The possibilities are endless.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    Can I customize my app after it's created?
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! You can continue refining your app by describing additional features or changes you want. Code Pup will update your application accordingly, making it easy to iterate and improve.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    Is my data secure?
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Yes, security is our top priority. All applications built with Code Pup include enterprise-grade security features, encrypted data storage, and secure authentication systems. Your data is protected with industry-standard security measures.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 6 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    How long does it take to build an app?
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Most applications are generated within minutes! Complex enterprise applications might take a bit longer, but you'll typically have a working prototype much faster than traditional development methods.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* CTA at bottom of FAQ */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-800 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Left - Brand Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                  <img src="main.png" alt="Code Pup" className="w-6 h-6 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Code Pup</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                Code Pup is the AI-powered platform that lets users build fully functioning apps in minutes. Using nothing but natural language, Code Pup enables anyone to turn their words into personal productivity apps, back-office tools, customer portals, or complete enterprise products that are ready to use, no integrations required.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.210 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.210 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">PRODUCT</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Roadmap</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Changelog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Feature Request</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">RESOURCES</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Docs & FAQs</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Higher Ed</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Community</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Security</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Report Misuse</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">LEGAL</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Border and Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-sm text-gray-500">
              2025 Code Pup Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;