import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@nsbekato.org
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                KATO Chapter Location
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-primary">About Us</a></li>
              <li><a href="/board" className="hover:text-primary">Board Members</a></li>
              <li><a href="/photos" className="hover:text-primary">Photos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} NSBE KATO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer