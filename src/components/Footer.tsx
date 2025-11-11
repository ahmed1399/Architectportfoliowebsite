import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#d9c7a4] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#d9c7a4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#d9c7a4] transition-colors"
              aria-label="Behance"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM3.495 11.68h3.08c.7 0 1.27-.17 1.7-.52.42-.35.63-.89.63-1.62 0-.55-.11-.98-.34-1.28-.23-.3-.5-.52-.81-.66-.3-.14-.61-.23-.94-.27-.32-.04-.6-.06-.85-.06h-2.47v4.42zm0 7.7h3.36c.3 0 .61-.03.94-.09.33-.06.63-.18.91-.35.28-.18.5-.44.67-.79.17-.35.25-.82.25-1.41 0-.86-.25-1.46-.74-1.79-.48-.34-1.09-.51-1.79-.51H3.495v4.94zm15.874-3.24c0 .32-.03.6-.1.82h-7.77c.07.92.39 1.57.96 1.96.57.39 1.22.59 1.95.59.67 0 1.24-.14 1.7-.43.46-.29.77-.65.92-1.07h2.63c-.39 1.29-1.05 2.24-1.99 2.84-.94.6-2.09.9-3.44.9-1.03 0-1.93-.16-2.7-.48-.77-.32-1.4-.76-1.89-1.33-.49-.57-.85-1.23-1.09-1.99-.24-.76-.36-1.58-.36-2.45 0-.88.13-1.7.38-2.47.25-.77.62-1.44 1.12-2 .5-.56 1.14-1 1.91-1.32.77-.32 1.67-.48 2.69-.48 1.03 0 1.92.18 2.67.54.75.36 1.38.84 1.87 1.45.49.61.85 1.32 1.08 2.13.23.81.34 1.67.34 2.58zm-2.85-1.02c0-.8-.24-1.45-.72-1.94-.48-.49-1.13-.74-1.95-.74-.53 0-.98.09-1.35.27-.37.18-.68.4-.93.68-.25.28-.43.59-.55.93-.12.34-.19.68-.21 1.02h5.71v-.22zm-6.27-6.69h8.46v1.71h-8.46v-1.71z"/>
              </svg>
            </a>
            <a
              href="mailto:hello@tareefarch.com"
              className="text-white/60 hover:text-[#d9c7a4] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Tareef Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
