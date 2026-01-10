"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-indigo-200/40 to-pink-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        {/* Centered Contact Info */}
        <div className="max-w-lg mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Let's Connect</h3>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "mgoher@seas.upenn.edu",
                  color: "from-blue-500 to-blue-600",
                  action: () =>
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu", "_blank"),
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+1 (215) 578-1132",
                  color: "from-green-500 to-green-600",
                  action: () => window.open("tel:+12155781132", "_blank"),
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Philadelphia, PA",
                  color: "from-purple-500 to-purple-600",
                  action: () => window.open("https://maps.google.com/?q=Philadelphia,PA", "_blank"),
                },
              ].map(({ icon: Icon, title, info, color, action }, index) => (
                <div
                  key={index}
                  onClick={action}
                  className={`flex items-center space-x-4 group transition-all duration-300 delay-${index * 100} cursor-pointer hover:bg-white/50 p-4 rounded-lg ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div
                    className={`p-3 bg-gradient-to-r ${color} rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                      {title}
                    </h4>
                    <p className="text-gray-600">{info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() =>
                  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu", "_blank")
                }
                className="px-8 py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Quick Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
