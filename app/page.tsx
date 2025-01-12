import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="NSBE KATO"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to NSBE KATO
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Empowering Black Engineers to positively impact our community through academic excellence, professional success, and cultural responsibility.
              </p>
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">Professional Development</h3>
              <p className="text-muted-foreground">
                Access to workshops, networking events, and career opportunities.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground">
                Study groups, tutoring, and academic resources for success.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">Community Impact</h3>
              <p className="text-muted-foreground">
                Outreach programs and initiatives to inspire the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest updates and events.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}