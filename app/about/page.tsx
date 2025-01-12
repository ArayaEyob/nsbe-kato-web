import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About NSBE KATO</h1>
            <p className="text-lg text-muted-foreground mb-6">
              The National Society of Black Engineers (NSBE) KATO Chapter is dedicated to increasing the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to support and promote the success of Black students and professionals in engineering and technology fields through mentorship, professional development, and community engagement.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Goals</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Increase Black representation in engineering</li>
                <li>Provide academic and professional support</li>
                <li>Foster leadership development</li>
                <li>Build strong community partnerships</li>
                <li>Create networking opportunities</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="NSBE KATO Team"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}