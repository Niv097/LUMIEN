"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { TextReveal } from "@/components/ui/text-reveal"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const blogPosts = [
  {
    title: "The Future of Banking Technology in India",
    excerpt: "Explore how modern banking infrastructure is transforming India's financial landscape and enabling digital innovation.",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    category: "Technology",
    slug: "future-of-banking-technology-india"
  },
  {
    title: "Why Core Banking Modernization Matters",
    excerpt: "Discover the critical importance of upgrading legacy banking systems to meet modern customer expectations.",
    date: "Feb 28, 2024",
    readTime: "4 min read",
    category: "Industry",
    slug: "core-banking-modernization"
  },
  {
    title: "Building Secure Payment Infrastructure",
    excerpt: "Learn about the best practices for creating robust and secure payment systems that scale.",
    date: "Feb 15, 2024",
    readTime: "6 min read",
    category: "Security",
    slug: "secure-payment-infrastructure"
  },
  {
    title: "API-First Banking: A Strategic Guide",
    excerpt: "How to architect your banking platform with APIs at the center for maximum flexibility and integration.",
    date: "Jan 30, 2024",
    readTime: "7 min read",
    category: "Development",
    slug: "api-first-banking-guide"
  },
  {
    title: "Compliance in Modern Banking",
    excerpt: "Navigating regulatory requirements while building innovative banking products in today's landscape.",
    date: "Jan 22, 2024",
    readTime: "5 min read",
    category: "Compliance",
    slug: "compliance-modern-banking"
  },
  {
    title: "Scaling Your Fintech Platform",
    excerpt: "Key strategies for building banking infrastructure that can handle millions of transactions reliably.",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    category: "Engineering",
    slug: "scaling-fintech-platform"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-4 md:pt-32 pb-12 md:pb-20 min-h-screen flex flex-col justify-center">
        <div className="container px-4 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Lumien Insights</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <TextReveal>Blog & Resources</TextReveal>
            </h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Insights on banking technology, fintech innovation, and building the future of financial infrastructure.
            </motion.p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                variants={itemVariants}
                className="group relative border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Hover gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-4">
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Read More */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="inline-flex items-center gap-2 text-cyan font-medium group-hover:gap-3 transition-all duration-300">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 text-center p-8 border border-white/10 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get the latest insights on banking technology and fintech innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-primary"
              />
              <button className="h-12 px-6 border border-white/20 text-white font-bold rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
