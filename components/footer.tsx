import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Abdul Ghaffar & Sons</h3>
            <p className="text-sm md:text-base">Professional civil contracting services since 1980</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-sm md:text-base">Plot No. 335, Doodha Village <br />Usmania Colony Liaquatabad Town,<br />Karachi.</p>
            <p className="text-sm md:text-base">Phone: +923003925919</p>
            <p className="text-sm md:text-base">Email: abdulghaffarandsons@hotmail.com</p>
            <Link href="/contact" className="text-primary hover:underline mt-2 inline-block text-sm md:text-base">
              Get in touch
            </Link>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm md:text-base">
            &copy; 2025 Abdul Ghaffar & Sons Civil Contractor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

