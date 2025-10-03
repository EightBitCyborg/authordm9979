import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Feather,
  LibraryBig,
  Rss,
  Mail,
  Globe,
  Link as LinkIcon,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

// 🟢 Single-file React site for author Dan Mitchell
// TailwindCSS required. All content is placeholder-ready and easy to edit.
// Tip: Search for "TODO" to customize.

export default function DanMitchellAuthorSite() {
  // TODO: Replace with real content
  const bio = {
    tagline: "Cyberpunk & eco-thrillers at the edge of tomorrow",
    location: "Boston, MA",
    headshotAlt: "Dan Mitchell headshot",
    // If you don't have a headshot yet, you can leave src empty and the placeholder will show
    headshotSrc: "",
    blurb:
      "Dan Mitchell writes near‑future science fiction where deep‑ocean frontiers collide with corporate espionage, climate politics, and human resilience.",
  };

  const projects = [
    {
      title: "ABYSSAL WIRED",
      stage: "Drafting",
      desc:
        "A cyberpunk eco‑thriller set across flooded megacities and abyssal research rigs. An oceanographer‑hacker uncovers a biotech plot to weaponize deep‑sea microbes.",
      highlights: ["Espionage", "Oceanography", "Hard sci‑fi"],
    },
    {
      title: "GREEN GLASS PROTOCOL",
      stage: "Outlining",
      desc:
        "A political conspiracy unfolds after a data‑leak reveals illicit geo‑engineering in the South Atlantic Gyre.",
      highlights: ["Politics", "Conspiracy", "Near‑future"],
    },
    {
      title: "CURRENT CITY",
      stage: "Revising",
      desc:
        "A salvage diver navigates black‑ice markets and rising seas to rescue a scientist targeted by a water‑rights cartel.",
      highlights: ["Noir", "Climate", "Thriller"],
    },
  ];

  const works = [
    {
      title: "Salt Lines",
      type: "Novel",
      year: "2023",
      blurb:
        "A biotech heist spirals into an ocean‑scale manhunt after a coral gene‑drive goes missing.",
      link: "#",
    },
    {
      title: "Pressure Gradient",
      type: "Novella",
      year: "2022",
      blurb:
        "On a deep‑sea cable crew, loyalty frays when the line starts whispering back.",
      link: "#",
    },
    {
      title: "Trawl",
      type: "Short Story",
      year: "2021",
      blurb:
        "A rogue AI trawler learns to dream of reefs that no longer exist.",
      link: "#",
    },
  ];

  const bibliographies = [
    { label: "Full Bibliography (PDF)", href: "#" },
    { label: "Story Publications Index", href: "#" },
    { label: "Interviews & Features", href: "#" },
  ];

  const social = [
    { label: "Website", href: "#", Icon: Globe },
    { label: "Newsletter", href: "#", Icon: Rss },
    { label: "Email", href: "mailto:you@example.com", Icon: Mail },
    { label: "Twitter/X", href: "#", Icon: Twitter },
    { label: "Instagram", href: "#", Icon: Instagram },
    { label: "LinkedIn", href: "#", Icon: Linkedin },
  ];

  const posts = [
    {
      title: "Designing believable ocean biotech",
      date: "Sep 15, 2025",
      excerpt:
        "From extremophiles to gene circuits: grounding speculative tech in real marine biology.",
      href: "#",
    },
    {
      title: "On cyberpunk and climate realism",
      date: "Aug 2, 2025",
      excerpt:
        "How neon and noir can illuminate the politics of water, borders, and power.",
      href: "#",
    },
    {
      title: "Field notes from the pier",
      date: "Jun 11, 2025",
      excerpt:
        "Why ocean edges make the best writing desks.",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased scroll-smooth">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-emerald-100 focus:text-emerald-900 focus:px-3 focus:py-1 focus:rounded"
      >
        Skip to content
      </a>

      {/* Header / Hero */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-emerald-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="font-extrabold tracking-tight text-xl">
              <span className="text-emerald-700">Dan</span> Mitchell
            </a>
            <nav aria-label="Primary" className="hidden sm:flex gap-6 text-sm">
              <a className="hover:text-emerald-700" href="#bio">Bio</a>
              <a className="hover:text-emerald-700" href="#projects">Current Projects</a>
              <a className="hover:text-emerald-700" href="#works">Published Works</a>
              <a className="hover:text-emerald-700" href="#bibliography">Bibliographies</a>
              <a className="hover:text-emerald-700" href="#blog">Blog</a>
              <a className="hover:text-emerald-700" href="#connect">Connect</a>
            </nav>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero Banner */}
        <section id="home" className="bg-gradient-to-b from-emerald-50 to-white">
          <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              >
                Dan Mitchell
              </motion.h1>
              <p className="mt-3 text-lg text-gray-700">{bio.tagline}</p>
              <p className="mt-4 text-gray-600 max-w-prose">
                {bio.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {social.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm hover:bg-emerald-50"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex md:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                {bio.headshotSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={bio.headshotSrc}
                    alt={bio.headshotAlt}
                    className="w-full h-full object-cover rounded-2xl shadow-xl ring-1 ring-emerald-200"
                  />
                ) : (
                  <div className="w-full h-full rounded-2xl bg-emerald-100 grid place-items-center shadow-xl ring-1 ring-emerald-200">
                    <span className="text-emerald-700/70">Author Headshot</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section id="bio" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex items-center gap-3">
              <Feather className="h-6 w-6 text-emerald-700" />
              <h2 className="text-2xl font-bold">Bio</h2>
            </header>
            <div className="mt-6 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {/* TODO: Replace with Dan's full bio */}
                  Dan Mitchell is an author of near‑future science fiction focused on
                  cyberpunk, ecology, and the deep ocean. His work blends hard science
                  with character‑driven intrigue.
                </p>
                <p>
                  When not writing, Dan studies ocean science, interviews field
                  researchers, and walks waterfronts for inspiration.
                </p>
                <p className="text-sm text-gray-500">Based in {bio.location}.</p>
              </div>
              <aside className="bg-emerald-50 rounded-2xl p-6 ring-1 ring-emerald-100">
                <h3 className="font-semibold">Fast Facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>Genres: Cyberpunk, Eco‑thriller, Hard Sci‑Fi</li>
                  <li>Interests: Oceanography, Biology, Politics</li>
                  <li>Rep: <span className="italic">(Add agent info)</span></li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section id="projects" className="py-16 bg-emerald-50/50">
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex items-center gap-3">
              <LibraryBig className="h-6 w-6 text-emerald-700" />
              <h2 className="text-2xl font-bold">Current Projects</h2>
            </header>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl bg-white ring-1 ring-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-xs mt-1 inline-block rounded-full border border-emerald-200 px-2 py-0.5">{p.stage}</p>
                  <p className="mt-3 text-sm text-gray-700">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs bg-emerald-100 text-emerald-900 px-2 py-1 rounded-full"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Published Works */}
        <section id="works" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-emerald-700" />
              <h2 className="text-2xl font-bold">Published Works</h2>
            </header>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {works.map((w) => (
                <article
                  key={w.title}
                  className="rounded-2xl ring-1 ring-emerald-100 p-6 bg-white shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-28 rounded-lg bg-emerald-100 grid place-items-center shrink-0">
                      <span className="text-xs text-emerald-700/70">Cover</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{w.title}</h3>
                      <p className="text-sm text-gray-500">{w.type} • {w.year}</p>
                      <p className="mt-2 text-sm text-gray-700">{w.blurb}</p>
                      <a
                        href={w.link}
                        className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-700 hover:underline"
                      >
                        Read more <LinkIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bibliographies / External Links */}
        <section id="bibliography" className="py-16 bg-emerald-50/50">
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex items-center gap-3">
              <LinkIcon className="h-6 w-6 text-emerald-700" />
              <h2 className="text-2xl font-bold">Bibliographies & Links</h2>
            </header>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bibliographies.map((b) => (
                <li key={b.label}>
                  <a
                    href={b.href}
                    className="flex items-center justify-between rounded-xl bg-white ring-1 ring-emerald-100 px-4 py-3 hover:bg-emerald-50"
                  >
                    <span className="text-sm font-medium">{b.label}</span>
                    <LinkIcon className="h-4 w-4 text-emerald-700" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              Tip: Link to your full bibliography PDF, a public Google Doc, a Goodreads/StoryGraph list, or a publications index.
            </p>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex items-center gap-3">
              <Rss className="h-6 w-6 text-emerald-700" />
              <h2 className="text-2xl font-bold">Blog</h2>
            </header>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="rounded-2xl bg-white ring-1 ring-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg leading-snug">
                    <a href={post.href} className="hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  <p className="mt-3 text-sm text-gray-700">{post.excerpt}</p>
                  <a
                    href={post.href}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-700 hover:underline"
                  >
                    Read post <LinkIcon className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="connect" className="py-16 bg-emerald-50/50">
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-emerald-700" />
              <h2 className="text-2xl font-bold">Connect</h2>
            </header>
            <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
              <form
                className="rounded-2xl bg-white ring-1 ring-emerald-100 p-6 shadow-sm space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Say hello or request an ARC…"
                    className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700"
                >
                  Send
                </button>
                <p className="text-xs text-gray-500">
                  This demo form doesn’t send email. Hook it to a service (Formspree, Netlify
                  Forms, etc.) to enable submissions.
                </p>
              </form>

              <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-6 shadow-sm">
                <h3 className="font-semibold">Follow</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {social.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="inline-flex items-center gap-3 hover:underline"
                      >
                        <Icon className="h-4 w-4 text-emerald-700" /> {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold">Press & Inquiries</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    For rights, interviews, or speaking engagements, please contact
                    <a className="text-emerald-700 hover:underline ml-1" href="mailto:agent@example.com">agent@example.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-emerald-100">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Dan Mitchell. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="hover:text-emerald-700">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
