import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Clements United</h3>
            <p className="text-slate-300 text-sm">
              Executive career management and transition consulting for senior leaders.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/services" className="hover:text-white transition-colors">Career Transition</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Career Redefinition</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Career Direction</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/#insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>lou@clementsunited.com</li>
              <li>416 388 6808</li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Schedule a Call</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Clements United. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
