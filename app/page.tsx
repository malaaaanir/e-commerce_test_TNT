"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Monitor, Code, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CreativeAgencyWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-edLtZqO18NSXUEe650DTu0atRUCc38.png",
      title: "Enjoy the space",
      subtitle: "Artwork preview",
    },
    {
      image: "https://thumbs.dreamstime.com/b/cartoon-superhero-robot-horns-muscular-body-isolated-white-background-cartoon-superhero-robot-horns-305994091.jpg",
      title: "Creative Design",
      subtitle: "Design preview",
    },
    {
      image: "https://thumbs.dreamstime.com/b/super-robot-fly-red-cloak-d-illustration-85593996.jpg",
      title: "Digital Innovation",
      subtitle: "Innovation preview",
    },
  ]

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3) // Explicitly cycle through 3 slides
    }, 3000) // Change every 3 seconds for better visibility

    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-pink-500" />,
      title: "Web Design Project",
      description: "Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Digital Artwork",
      description: "Sed ut perspiciatis unde omnis iste natus error sit volunte.",
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: "Website Development",
      description:
        "Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque. Ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center px-8 py-6 bg-white">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-black">TNT</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Team
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-88px)]">
        {/* Left Side - Content */}
        <div className="flex-1 px-8 py-12">
          <div className="max-w-xl mb-16">
            {/* Greeting */}
            <p className="text-gray-500 text-sm mb-4 tracking-wider">HELLO WORLD!</p>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              We are creative agency.
              <br />
              We build digital work that
              <br />
              you will love!
            </h1>

            {/* CTA Button - Mala portfolio */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-none group">
              <a href="http://malaaaanir.vercel.app">Explore our portfolio</a>
              
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Services Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white p-6">
                <CardContent className="p-0">
                  <div className="text-center">
                    {/* Colored line above icon */}
                    <div
                      className={`w-16 h-1 mx-auto mb-4 ${
                        index === 0 ? "bg-pink-500" : index === 1 ? "bg-green-500" : "bg-blue-500"
                      }`}
                    />

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gray-50 rounded-lg">{service.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-black mb-3">{service.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-left">{service.description}</p>

                    {/* Navigation arrows */}
                    <div className="flex justify-center space-x-2">
                      {/* <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                        <ChevronRight className="w-4 h-4 rotate-180" />
                      </button> */}
                      <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Side - Image Slider */}
        <div className="flex-1 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
          {/* Stars Background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Image Slider */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={`slide-${index}`}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  {/* Main astronaut image */}
                  <div className="relative mb-8">
                    <img
                      src={
                        index === 0
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-edLtZqO18NSXUEe650DTu0atRUCc38.png"
                          : slide.image
                      }
                      alt={`Slide ${index + 1}`}
                      className="w-80 h-80 object-contain"
                    />
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-16 left-8 text-white">
                    <p className="text-xs opacity-75 mb-1 tracking-wider">{slide.subtitle.toUpperCase()}</p>
                    <h2 className="text-xl font-semibold">{slide.title}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-orange-500" : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
