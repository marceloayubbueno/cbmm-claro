"use client";

import Link from "next/link";

const footerLinks = {
  essentials: [
    { label: "Payments", href: "#0" },
    { label: "Budgeting and analytics", href: "#0" },
    { label: "Open banking", href: "#0" },
    { label: "Pockets", href: "#0" },
    { label: "Subscriptions", href: "#0" },
  ],
  company: [
    { label: "About us", href: "#0" },
    { label: "Diversity / Inclusion", href: "#0" },
    { label: "Sustainability", href: "#0" },
    { label: "Code of conduct", href: "#0" },
    { label: "Financial statements", href: "#0" },
  ],
  lifestyle: [
    { label: "International products", href: "#0" },
    { label: "Currency exchange", href: "#0" },
    { label: "Lounge & Smart delay", href: "#0" },
  ],
  social: [
    { label: "Send us an email", href: "#0" },
    { label: "Facebook", href: "#0" },
    { label: "Twitter", href: "#0" },
    { label: "Instagram", href: "#0" },
    { label: "TikTok", href: "#0" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-800 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-testimonial opacity-50" aria-hidden="true" />

      {/* Footer Illustration Placeholder */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-slate-700/50" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-12">
        {/* Footer Blocks */}
        <div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          {/* Logo Block */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Cruip" className="inline-block mb-6">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero" fill="none">
                  <g className="fill-slate-400" transform="translate(3 3)">
                    <circle cx="5" cy="5" r="5" />
                    <circle cx="19" cy="5" r="5" />
                    <circle cx="5" cy="19" r="5" />
                    <circle cx="19" cy="19" r="5" />
                  </g>
                  <g className="fill-blue-500">
                    <circle cx="15" cy="5" r="5" />
                    <circle cx="25" cy="15" r="5" />
                    <circle cx="15" cy="25" r="5" />
                    <circle cx="5" cy="15" r="5" />
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          {/* Essentials */}
          <div>
            <h6 className="text-sm font-bold text-white mb-4">Essentials</h6>
            <ul className="space-y-3">
              {footerLinks.essentials.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-sm font-bold text-white mb-4">Company</h6>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lifestyle */}
          <div>
            <h6 className="text-sm font-bold text-white mb-4">Lifestyle</h6>
            <ul className="space-y-3">
              {footerLinks.lifestyle.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h6 className="text-sm font-bold text-white mb-4">Company</h6>
            <ul className="space-y-3">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div 
          className="border-t border-slate-700 pt-8"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <p className="text-slate-400 text-sm text-center">
            If you would like to find out more about which entity you receive services from please
            click <Link href="#0" className="text-blue-400 hover:underline">here</Link>. If you
            have any other questions, please reach out to us via the in-app chat. Custom Bank is a
            bank established in the Republic of Ireland. Custom Bank is licensed by the European
            Central Bank and regulated by the Bank of Ireland. Custom Bank provides credit, payment,
            current account and demand deposit account services.
          </p>
        </div>
      </div>
    </footer>
  );
}

