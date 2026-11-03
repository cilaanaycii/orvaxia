'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Menu,
  Orbit,
  Sparkles,
  X,
} from 'lucide-react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Collection', href: '#collection' },
  { label: 'How to Order', href: '#how-to-order' },
];

const products = [
  {
    number: '01',
    name: 'Tas Tumbler Rajut',
    detail: 'Featured product placeholder',
    color: 'from-[#f5b5c2] via-[#d4a9c5] to-[#a68bcb]',
    orb: 'bg-[#fff1f6]',
  },
  {
    number: '02',
    name: 'Product slot 02',
    detail: 'Official details pending',
    color: 'from-[#f6b6a5] via-[#d4a9c5] to-[#343a78]',
    orb: 'bg-[#fdf1ea]',
  },
  {
    number: '03',
    name: 'Product slot 03',
    detail: 'Official details pending',
    color: 'from-[#a68bcb] via-[#343a78] to-[#101b43]',
    orb: 'bg-[#eeeafb]',
  },
];

const orderSteps = [
  ['01', 'Choose your piece', 'Explore the current collection and pick your favorite design.'],
  ['02', 'Complete the PO form', 'Share your contact details and preferred product options.'],
  ['03', 'Review your order', 'Check the summary before sending it to the ORVAXIA team.'],
  ['04', 'Continue on WhatsApp', 'Your order details will be prepared automatically for confirmation.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffcfe] text-[#101b43]">
      <section id="home" className="relative isolate min-h-[760px] overflow-hidden bg-[#101b43]">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="stars stars-one" />
        <div className="stars stars-two" />
        <div className="orbit-ring orbit-ring-large" />
        <div className="orbit-ring orbit-ring-small" />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="brand-mark"><Orbit size={21} strokeWidth={1.5} /></span>
            <span className="text-sm font-semibold tracking-[0.28em] text-[#fffcfe]">ORVAXIA</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/[0.07] p-1.5 backdrop-blur-md md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden rounded-full border border-[#f5b5c2]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#fff1f6] transition hover:border-[#f5b5c2] hover:bg-[#f5b5c2] hover:text-[#101b43] md:block">
            Contact us
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-full border border-white/20 p-2 text-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="relative z-30 mx-6 rounded-3xl border border-white/15 bg-[#182655]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 block rounded-2xl bg-[#f5b5c2] px-4 py-3 text-center text-sm font-semibold text-[#101b43]" onClick={closeMenu}>
              Contact us
            </a>
          </nav>
        )}

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-36 lg:pt-28">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#a68bcb]/35 bg-[#a68bcb]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d9c8eb]">
              <Sparkles size={14} /> A world connected by truth
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-[#fffcfe] sm:text-6xl lg:text-8xl">
              Create with <span className="text-gradient">intention.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#dce2f4] sm:text-lg">
              Welcome to ORVAXIA COMPANY — a space where creative expression, meaningful connection, and honest ideas move in the same orbit.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#collection" className="button-primary">
                Explore collection <ArrowRight size={17} />
              </a>
              <a href="#about" className="button-quiet">
                Discover our story
              </a>
            </div>
            <div className="mt-14 flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-[#9da9ca]">
              <span className="h-px w-12 bg-[#f5b5c2]" />
              Creative goods · Thoughtful details
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[370px] w-full max-w-[500px] items-center justify-center lg:min-h-[480px]">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="absolute h-64 w-64 rounded-full bg-[#343a78]/70 blur-3xl" />
            <div className="relative flex h-56 w-56 rotate-[-9deg] items-center justify-center rounded-[42%] border border-white/30 bg-gradient-to-br from-[#f5b5c2] via-[#d4a9c5] to-[#a68bcb] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:h-72 sm:w-72">
              <div className="absolute inset-5 rounded-[40%] border border-white/40" />
              <div className="absolute -right-7 top-10 h-16 w-16 rounded-full border border-[#f6b6a5]/80 bg-[#101b43] shadow-xl sm:-right-12 sm:h-24 sm:w-24" />
              <div className="absolute -bottom-8 left-10 h-20 w-20 rounded-full border border-white/60 bg-[#f6b6a5] sm:-bottom-12 sm:left-16 sm:h-28 sm:w-28" />
              <div className="relative flex h-20 w-20 rotate-[9deg] items-center justify-center rounded-full border border-[#101b43]/35 bg-[#fffcfe]/75 text-[#101b43] backdrop-blur sm:h-24 sm:w-24">
                <Orbit size={42} strokeWidth={1.2} />
              </div>
            </div>
            <div className="absolute bottom-5 right-2 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-md sm:right-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#9da9ca]">The ORVAXIA note</p>
              <p className="mt-1 text-sm text-white">Stay curious. Stay true.</p>
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 transition hover:text-white" aria-label="Scroll to introduction">
          <ChevronDown className="animate-bounce" size={22} />
        </a>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="eyebrow">01 / Introduction</p>
            <h2 className="section-title mt-5">A small universe of thoughtful ideas.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-[#343a78] sm:text-2xl">
              ORVAXIA is a creative company in the making. We are building a world where every detail has room to feel personal, expressive, and true to its purpose.
            </p>
            <div className="mt-10 grid gap-6 border-t border-[#101b43]/10 pt-8 sm:grid-cols-2">
              <div>
                <span className="number-label">ORBIS</span>
                <p className="mt-3 text-sm leading-7 text-[#5e6685]">Connecting perspectives, exploring possibilities.</p>
              </div>
              <div>
                <span className="number-label">AXIOM</span>
                <p className="mt-3 text-sm leading-7 text-[#5e6685]">Built on honesty, guided by integrity.</p>
              </div>
            </div>
            <a href="#philosophy" className="link-arrow mt-10">Meet our philosophy <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="philosophy" className="bg-[#f7f3fa] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">02 / Our philosophy</p>
              <h2 className="section-title mt-5 max-w-xl">Two ideas. One connected point of view.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#5e6685]">The name ORVAXIA brings together the movement of a world in orbit and the clarity of a principle worth standing behind.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="philosophy-card bg-[#101b43] text-white">
              <div className="flex items-start justify-between">
                <span className="philosophy-symbol">O</span>
                <Compass className="text-[#f5b5c2]" size={30} strokeWidth={1.25} />
              </div>
              <div className="mt-24 max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b5c2]">The world in motion</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">ORBIS</h3>
                <p className="mt-5 text-sm leading-7 text-[#dce2f4]">Connection, exploration, growth, and the courage to see from more than one perspective.</p>
              </div>
            </article>
            <article className="philosophy-card bg-[#d4a9c5] text-[#101b43]">
              <div className="flex items-start justify-between">
                <span className="philosophy-symbol">A</span>
                <Sparkles className="text-[#343a78]" size={30} strokeWidth={1.25} />
              </div>
              <div className="mt-24 max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#343a78]">The principle within</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">AXIOM</h3>
                <p className="mt-5 text-sm leading-7 text-[#343a78]">Honesty, integrity, transparency, and trust as the quiet foundation beneath every idea.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">03 / The collection</p>
            <h2 className="section-title mt-5 max-w-xl">Objects with a little orbit of their own.</h2>
          </div>
          <a href="#contact" className="link-arrow">View all pieces <ArrowRight size={16} /></a>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.number} className="product-card group">
              <div className={`product-art bg-gradient-to-br ${product.color}`}>
                <div className={`product-orb ${product.orb}`} />
                <div className="product-shape" />
                <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.2em] text-[#101b43]/60">{product.number}</span>
                <span className="absolute bottom-5 right-5 rounded-full bg-white/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#101b43]/70 backdrop-blur">Preview</span>
              </div>
              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{product.name}</h3>
                  <p className="mt-1 text-sm text-[#71788f]">{product.detail}</p>
                </div>
                <ArrowRight className="mt-1 text-[#a68bcb] transition group-hover:translate-x-1" size={19} />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-[#101b43]/10 bg-[#fff5f8] p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a04f75]">Pre-order opening soon</p>
            <p className="mt-2 text-sm leading-6 text-[#5e6685]">The collection and options will be updated here when the official PO period opens.</p>
          </div>
          <a href="#how-to-order" className="button-dark mt-5 sm:mt-0">How to order <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="how-to-order" className="bg-[#101b43] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow eyebrow-dark">04 / Pre-order journey</p>
              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Simple to begin. Thoughtful at every step.</h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#b5bfdc]">Your order will be recorded on the website first. Once it is saved successfully, the prepared summary can continue to the ORVAXIA WhatsApp admin.</p>
              <a href="#contact" className="button-primary mt-9">Start an enquiry <ArrowRight size={17} /></a>
            </div>
            <div className="grid gap-3">
              {orderSteps.map(([number, title, description]) => (
                <div key={number} className="group flex gap-5 border-b border-white/10 py-6 first:pt-0 last:border-b-0">
                  <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#f5b5c2]">{number}</span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[#aeb8d5]">{description}</p>
                  </div>
                  <ArrowRight className="ml-auto mt-1 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#f5b5c2]" size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#f7f3fa] px-6 py-24 lg:px-10 lg:py-28">
        <div className="contact-orbit" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="eyebrow justify-center">05 / Stay connected</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101b43] sm:text-6xl">There is more to explore.</h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#5e6685]">Official collection details, PO dates, and contact information will appear here as ORVAXIA grows.</p>
          <div className="mt-9 flex justify-center">
            <a href="#collection" className="button-dark">Explore collection <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1434] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="brand-mark"><Orbit size={19} strokeWidth={1.5} /></span>
            <span className="text-sm font-semibold tracking-[0.28em]">ORVAXIA COMPANY</span>
          </a>
          <p className="text-xs tracking-[0.08em] text-[#96a1c0]">A world connected by truth.</p>
          <p className="text-xs text-[#96a1c0]">© 2026 ORVAXIA COMPANY</p>
        </div>
      </footer>
    </main>
  );
}
