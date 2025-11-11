import { useState } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:info@architecture-tareef.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast.success('Opening your email client...');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-header text-white">Contact</h1>
          <p className="text-body text-white/80">Let's discuss your next project.</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#d9c7a4] transition-colors"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#d9c7a4] transition-colors"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#d9c7a4] transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-[#0d0d0d] hover:bg-[#d9c7a4] hover:text-[#0d0d0d] transition-colors"
          >
            Send Message
          </Button>
        </form>

        {/* Contact Info */}
        <div className="text-center space-y-6 pt-8 border-t border-white/10">
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-[#d9c7a4] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-[#d9c7a4] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          <a
            href="mailto:info@architecture-tareef.com"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#d9c7a4] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>info@architecture-tareef.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
