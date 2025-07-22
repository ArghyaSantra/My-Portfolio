import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 pt-20 pb-10">
      {/* Top Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          HAVE ANY PROJECTS IN MIND?
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-green-400 mt-2">
          GET IN TOUCH
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-white/80 mb-10">
        {/* Logo or Name */}
        <div>
          <h3 className="text-white font-bold text-lg">ARGHYA SANTRA.</h3>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-semibold mb-2 text-white">OUR LOCATION</h4>
          <ul className="space-y-1">
            <li>London</li>
            <li>America</li>
            <li>Remote (Global)</li>
            <li>India</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2 text-white">CONTACT INFO</h4>
          <ul className="space-y-1">
            <li>Bangalore, India</li>
            <li>+91 96609 68135</li>
            <li>arghyasantra103@gmail.com</li>
            <li>Office Hours: 9AM – 11PM</li>
            <li>Sunday: Available</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-2 text-white">NEWSLETTER</h4>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Enter email"
              className="text-sm bg-transparent border-white/20"
            />
            <Button size="sm" className="bg-green-400 text-black">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} by{" "}
          <span className="text-green-400">Arghya Santra</span>. All rights
          reserved.
        </p>

        <div className="flex gap-4 text-white/60">
          <a href="https://facebook.com" target="_blank">
            <Facebook className="w-4 h-4 hover:text-green-400" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <Twitter className="w-4 h-4 hover:text-green-400" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <Instagram className="w-4 h-4 hover:text-green-400" />
          </a>
          <a href="https://linkedin.com/in/arghya-santra" target="_blank">
            <Linkedin className="w-4 h-4 hover:text-green-400" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <Youtube className="w-4 h-4 hover:text-green-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
