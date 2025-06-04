"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const sendEmail = async (data: any) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "service_in9bnij", // Replace with your EmailJS service ID
        "template_jz43zhp", // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: "mgoher@seas.upenn.edu", // Your email
        },
        "IV32-4mHd-O6X8EHU", // Replace with your EmailJS public key
      )

      console.log("Email sent successfully:", result.text)
      setSubmitStatus("success")
      reset() // Clear the form
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "john.doe@example.com", color: "from-blue-500 to-blue-600" },
                { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", color: "from-green-500 to-green-600" },
                { icon: MapPin, title: "Location", info: "San Francisco, CA", color: "from-purple-500 to-purple-600" },
              ].map(({ icon: Icon, title, info, color }, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 group transition-all duration-300 delay-${index * 100} ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <div
                    className={`p-3 bg-gradient-to-r ${color} rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h4>
                    <p className="text-gray-600">{info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                { id: "subject", label: "Subject", type: "text", placeholder: "Project inquiry" },
              ].map((field, index) => (
                <div
                  key={field.id}
                  className={`transition-all duration-500 delay-${(index + 1) * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    {...register(field.id, {
                      required: `${field.label} is required`,
                      ...(field.type === "email" && {
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email address",
                        },
                      }),
                    })}
                    className={`w-full px-4 py-3 border ${errors[field.id] ? "border-red-300" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300`}
                    placeholder={field.placeholder}
                  />
                  {errors[field.id] && <p className="mt-1 text-sm text-red-600">{errors[field.id]?.message}</p>}
                </div>
              ))}

              <div
                className={`transition-all duration-500 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.message ? "border-red-300" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message?.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "600ms" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">✅ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
