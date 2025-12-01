"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Check,
  ChevronRight,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#packages", label: "Packages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-soft-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/logo-primary.png"
                alt="AISupportPDX"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-gray hover:text-forest-green transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-copper hover:bg-copper-dark text-white px-5 py-2 rounded-lg font-medium transition-colors"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-warm-white border-t border-soft-sage/30">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-gray hover:text-forest-green transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-copper hover:bg-copper-dark text-white px-5 py-3 rounded-lg font-medium transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/hero-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green mb-6 animate-fade-in-up">
              AI Adoption Made Practical
            </h1>
            <p className="text-xl md:text-2xl text-slate-gray mb-8 animate-fade-in-up animation-delay-100">
              Your experienced local partner for bringing AI into your
              Portland-area business — confidently, securely, and without the
              hype.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors animate-fade-in-up animation-delay-200"
            >
              Book Your Free Consultation
              <ChevronRight size={20} />
            </a>
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-slate-gray animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2">
                <Check className="text-copper" size={20} />
                <span>30+ Years in Tech Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-copper" size={20} />
                <span>Serving Portland Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-copper" size={20} />
                <span>Privacy-First Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Why Now Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-6">
              2026 Is the Year of AI. Is Your Business Ready?
            </h2>
            <p className="text-lg text-slate-gray">
              AI has moved from bleeding edge to business essential. The tools
              exist today to transform how you work — but navigating the options
              can feel overwhelming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-soft-sage/20 hover:bg-soft-sage/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                <Image
                  src="/icons/icon-confused.png"
                  alt="Confused"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                Confused by the hype?
              </h3>
              <p className="text-slate-gray">
                Every week brings a new AI tool claiming to revolutionize
                everything. It&apos;s hard to know what&apos;s real.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-soft-sage/20 hover:bg-soft-sage/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                <Image
                  src="/icons/icon-privacy.png"
                  alt="Privacy"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                Worried about privacy?
              </h3>
              <p className="text-slate-gray">
                Your business data is sensitive. You need solutions that keep
                your information secure.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-soft-sage/20 hover:bg-soft-sage/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-green/10 flex items-center justify-center">
                <Image
                  src="/icons/icon-where-to-start.png"
                  alt="Where to start"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                Don&apos;t know where to start?
              </h3>
              <p className="text-slate-gray">
                With so many options, finding the right first step feels
                impossible.
              </p>
            </div>
          </div>

          <p className="text-center text-xl text-forest-green font-medium">
            We get it. That&apos;s exactly why we&apos;re here.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-6">
              Portland Tech Veterans, At Your Service
            </h2>
            <p className="text-lg text-slate-gray mb-8">
              AISupportPDX is powered by Vital Enterprises — a family of
              technology companies with over 30 years of experience leading
              industry consortiums globally through VTM and 17 years of
              cutting-edge product development through Novus Labs.
            </p>
            <p className="text-lg text-slate-gray">
              We&apos;ve been working with AI and AI-enabled products for years.
              We understand what works, what doesn&apos;t, and how to make it
              practical for real businesses like yours. We&apos;re already
              helping organizations across the region build their AI strategies,
              and we&apos;re ready to help you too.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-12 text-center">
            How We Help
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/icons/icon-ai-readiness.png",
                title: "AI Readiness Assessment",
                description:
                  "Half-day executive session to identify your highest-impact AI opportunities",
              },
              {
                icon: "/icons/icon-implementation.png",
                title: "AI Tool Implementation",
                description:
                  "Chatbots, content calendars, voice agents, cold outreach automation — set up and trained",
              },
              {
                icon: "/icons/icon-website-audit.png",
                title: "Website AI Audit",
                description:
                  "SEO, AEO, and GEO analysis with actionable improvements",
              },
              {
                icon: "/icons/icon-developer-training.png",
                title: "Developer Training",
                description:
                  "Multi-day intensives on agentic coding tools for your technical team",
              },
              {
                icon: "/icons/icon-custom-solutions.png",
                title: "Custom AI Solutions",
                description:
                  "Scheduling systems, workflow automation, purpose-built tools",
              },
              {
                icon: "/icons/icon-secure-onprem.png",
                title: "Secure On-Prem AI",
                description:
                  "Air-gapped local AI inference for maximum privacy and control",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-soft-sage/50 hover:border-copper/50 hover:shadow-lg transition-all bg-warm-white group"
              >
                <div className="w-14 h-14 mb-4 rounded-lg bg-soft-sage/30 group-hover:bg-copper/10 flex items-center justify-center transition-colors">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
                <h3 className="text-xl font-semibold text-forest-green mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-12 text-center">
            Flexible Engagement Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <div className="p-8 rounded-2xl border border-soft-sage/50 bg-white">
              <h3 className="text-2xl font-bold text-forest-green mb-2">
                Starter
              </h3>
              <p className="text-3xl font-bold text-copper mb-6">
                $500<span className="text-lg font-normal text-slate-gray">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Monthly strategy call",
                  "Email support",
                  "Quarterly AI briefing",
                  "10% project discount",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-copper mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-lg border-2 border-copper text-copper hover:bg-copper hover:text-white font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Growth Package */}
            <div className="p-8 rounded-2xl border-2 border-copper bg-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-copper text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-2">
                Growth
              </h3>
              <p className="text-3xl font-bold text-copper mb-6">
                $1,000<span className="text-lg font-normal text-slate-gray">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Bi-weekly strategy calls",
                  "Priority support",
                  "Quarterly on-site briefing",
                  "15% project discount",
                  "Annual website audit included",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-copper mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-lg bg-copper hover:bg-copper-dark text-white font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Annual Partnership */}
            <div className="p-8 rounded-2xl border border-soft-sage/50 bg-white">
              <h3 className="text-2xl font-bold text-forest-green mb-2">
                Annual Partnership
              </h3>
              <p className="text-3xl font-bold text-copper mb-6">
                $10,000<span className="text-lg font-normal text-slate-gray">/year</span>
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Quarterly on-site sessions",
                  "State of AI briefings",
                  "One implementation included",
                  "Priority access",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-copper mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center py-3 rounded-lg border-2 border-copper text-copper hover:bg-copper hover:text-white font-semibold transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA Section */}
      <section className="py-16 md:py-24 bg-soft-sage/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Dec 2025 – Jan 2026: Free AI Readiness Consultations
          </h2>
          <p className="text-xl text-slate-gray mb-8">
            Kick off 2026 with clarity. Book a free 30-minute consultation and
            get a custom AI opportunity assessment for your business — no
            obligation.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            {[
              "30-minute discovery call",
              "Technology stack review",
              "Top 3 AI opportunities identified",
              "Privacy options overview",
              "Written recommendation summary",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="text-copper flex-shrink-0" size={20} />
                <span className="text-slate-gray">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-copper hover:bg-copper-dark text-white px-10 py-4 rounded-lg font-semibold text-xl transition-colors"
          >
            Claim Your Free Consultation
            <ChevronRight size={24} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-gray mb-10 text-center">
            Ready to explore what AI can do for your business? Send us a message
            and we&apos;ll be in touch within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-forest-green mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-soft-sage focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-colors bg-warm-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-forest-green mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-soft-sage focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-colors bg-warm-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-forest-green mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-soft-sage focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-colors bg-warm-white"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-forest-green mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-soft-sage focus:border-copper focus:ring-2 focus:ring-copper/20 outline-none transition-colors bg-warm-white resize-none"
                placeholder="Tell us about your business and what you're hoping to achieve with AI..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full bg-copper hover:bg-copper-dark disabled:bg-copper/50 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {formStatus === "loading" ? "Sending..." : "Send Message"}
            </button>

            {formStatus === "success" && (
              <div className="p-4 rounded-lg bg-soft-sage/50 text-forest-green text-center">
                Thank you! We&apos;ll be in touch within 24 hours.
              </div>
            )}

            {formStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-50 text-red-700 text-center">
                Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-forest-green text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/logo-primary.png"
                alt="AISupportPDX"
                width={150}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-warm-white/80 mb-4">
                Your experienced local partner for AI adoption in the Pacific
                Northwest.
              </p>
              <p className="text-warm-white/60 text-sm">
                Powered by Vital Enterprises
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warm-white/80">
                <li>
                  <a href="#services" className="hover:text-copper transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-copper transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-copper transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-copper transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-warm-white/80">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:hello@aisupportpdx.com"
                    className="hover:text-copper transition-colors"
                  >
                    hello@aisupportpdx.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Portland, OR</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-warm-white/20 text-center text-warm-white/60 text-sm">
            © 2025 AISupportPDX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
