"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Brain,
  Globe,
  Trophy,
  Users,
  Dumbbell,
  Music,
  Coffee,
  Microscope,
  Clock,
  ArrowRight,
  Sparkles,
  Building2,
  FlaskConical,
  Network,
  Presentation,
  HeartPulse,
  ExternalLink,
  HelpCircle,
  Calendar,
  MapPin,
  Mic,
} from "lucide-react";
import { HackathonSponsorDialog } from "@/components/forms/hackathon-sponsor-dialog";

// ── Placeholder speakers ───────────────────────────────────────────
const speakers = [
  { label: "Intro Speaker", topic: "TBD", time: "TBD", location: "TBD" },
  { label: "Topic TBD", topic: "TBD", time: "TBD", location: "TBD" },
  { label: "Topic TBD", topic: "TBD", time: "TBD", location: "TBD" },
];

// ── Floating particles for high-tech background ────────────────────
function TechParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? "rgba(255,107,0,0.6)"
                : i % 3 === 1
                ? "rgba(59,130,246,0.5)"
                : "rgba(168,85,247,0.5)"
            }, transparent)`,
            boxShadow: `0 0 ${6 + Math.random() * 10}px ${
              i % 3 === 0
                ? "rgba(255,107,0,0.3)"
                : i % 3 === 1
                ? "rgba(59,130,246,0.3)"
                : "rgba(168,85,247,0.3)"
            }`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 60, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Slow drifting grid lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// ── Schedule highlights (curated for enticement) ────────────────────
const scheduleHighlights = [
  {
    day: "Friday",
    date: "May 22",
    label: "Pre-Event",
    items: [
      { time: "TBA", text: "Team matchmaking & virtual meet-up", icon: Users },
    ],
  },
  {
    day: "Saturday",
    date: "May 23",
    label: "Hacking Day 1",
    items: [
      { time: "8:30 AM", text: "Networking breakfast & registration", icon: Coffee },
      { time: "9:00 AM", text: "Opening ceremony — tracks, prizes, mentors", icon: Rocket },
      { time: "10:00 AM", text: "Sponsor booths open & mentorship begins", icon: Building2 },
      { time: "12:00 PM", text: "Longevity biomarker blood draw with lab partners", icon: FlaskConical },
      { time: "6:00 PM", text: "Career dinner — company recruiting showcase", icon: Sparkles },
      { time: "8:30 PM", text: "Longevity Rave — DJ set by William", icon: Music },
      { time: "9:00 PM+", text: "All-night hacking marathon", icon: Clock },
    ],
  },
  {
    day: "Sunday",
    date: "May 24",
    label: "Demo Day",
    items: [
      { time: "8:00 AM", text: "Morning meditation with Wen Chen", icon: HeartPulse },
      { time: "9:00 AM", text: "Longevity breakfast", icon: Coffee },
      { time: "10:30 AM", text: "Functional strength training with Richie Diaz", icon: Dumbbell },
      { time: "2:30 PM", text: "PROJECT SUBMISSION DEADLINE", icon: Clock },
      { time: "2:30 PM", text: "Insilico Medicine featured talk", icon: Brain },
      { time: "3:00 PM", text: "Team pitches to judges & investors", icon: Presentation },
      { time: "5:00 PM", text: "PRIZE CEREMONY & closing", icon: Trophy },
    ],
  },
];

// ── Tracks ──────────────────────────────────────────────────────────
const tracks = [
  {
    name: "LongevityLLM Benchmarking",
    sponsor: "Insilico Medicine",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/5 border-purple-500/20",
    iconColor: "text-purple-400",
    description:
      "Build new benchmark tasks for large language models in longevity biology. Extend the LongevityBench framework, create agentic automation pipelines, and evaluate Insilico Medicine's fine-tuned LongevityLLM.",
    prize: "Co-authorship on a peer-reviewed publication with the Insilico Medicine team",
  },
  {
    name: "ARDD Network Intelligence Tool",
    sponsor: "Insilico Medicine",
    icon: Network,
    color: "from-blue-500/20 to-blue-600/5 border-blue-500/20",
    iconColor: "text-blue-400",
    description:
      "Build an interactive web app mapping the ARDD conference community — the leading aging research and drug discovery event. Rich profiles, in-app messaging, and a working demo for ARDD 2026.",
    prize: "Sponsored trip to ARDD 2026 in Boston to present the tool to the conference community",
  },
  {
    name: "Longevity Startup Launchpad",
    sponsor: "VC Track — Build to Fund",
    icon: Rocket,
    color: "from-orange-500/20 to-orange-600/5 border-orange-500/20",
    iconColor: "text-orange-400",
    description:
      "Form a longevity startup concept in any vertical — diagnostics, therapeutics, wellness, data infrastructure, consumer health, or clinical tools. Build a prototype, craft a pitch deck, and demo live to investors.",
    prize: "Introduction to CLC's VC partner network with facilitated follow-on meetings for top teams",
  },
];

// ── Activity cards ──────────────────────────────────────────────────
const activities = [
  {
    icon: FlaskConical,
    title: "Biological Age Testing",
    description: "Get your blood drawn and analyzed by our lab partners GlycanAge and Aetas",
  },
  {
    icon: Dumbbell,
    title: "Functional Strength Training",
    description: "Train with Richie Diaz — the coach who prepares Olympians and pro athletes",
  },
  {
    icon: HeartPulse,
    title: "Morning Meditation",
    description: "Start Demo Day with a guided meditation and mindfulness session with Wen Chen",
  },
  {
    icon: Music,
    title: "Longevity Rave",
    description: "Saturday night DJ set and after-party — because longevity starts with living well",
  },
  {
    icon: Sparkles,
    title: "Career Dinner",
    description: "Company recruiting showcase — meet hiring teams from longevity biotech companies",
  },
  {
    icon: Microscope,
    title: "Sponsor Booths",
    description: "Hands-on demos and direct access to leading longevity companies and their tech",
  },
];

// ── 2025 stats ──────────────────────────────────────────────────────
const stats = [
  { value: "60+", label: "Participants" },
  { value: "20+", label: "Countries" },
  { value: "30h", label: "Build Sprint" },
  { value: "5", label: "Hacker Teams" },
  { value: "6", label: "Industry Mentors" },
  { value: "2", label: "Startups Launched" },
];

export default function HackathonPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <TechParticles />
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/events/hackathon-2026.png"
            alt="Caltech Longevity Hackathon 2026"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center max-w-4xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-sm mb-6">
              May 22 &ndash; 24, 2026 &middot; Caltech Campus
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="header-text-glow">LONGEVITY</span>
              <br />
              <span className="text-white">HACKATHON</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Three tracks. 30 hours of building. Mentors from top longevity
              companies. Prizes that launch startups and publish papers. Join the
              most ambitious longevity hackathon on the planet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-button rounded-full px-10 py-7 text-lg"
              >
                <Link
                  href="https://luma.com/uqeiu09a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Compete
                </Link>
              </Button>
              <HackathonSponsorDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass hover:bg-white/10 rounded-full px-10 py-7 text-lg border-white/20 flex items-center gap-2"
                >
                  <Building2 className="w-5 h-5" />
                  Sponsor
                </Button>
              </HackathonSponsorDialog>
            </div>
            <div className="mt-4">
              <Link
                href="/Caltech_Longevity_Hackathon_2026_Sponsorship_Packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-4"
              >
                <ExternalLink className="w-4 h-4" />
                View Sponsorship Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2025 Stats (social proof) ────────────────────────── */}
      <section className="w-full py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.p
            className="text-sm font-semibold tracking-widest uppercase text-orange-400 text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Last year by the numbers
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────── */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Competition Tracks
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Teams of 2&ndash;5 participants. Mixed-discipline teams strongly
              encouraged. All tracks share the same submission deadline: Sunday
              May 24 at 2:30 PM.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl bg-gradient-to-br ${track.color} border backdrop-blur-sm p-8 flex flex-col`}
                >
                  <Icon className={`w-10 h-10 ${track.iconColor} mb-4`} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-1">{track.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{track.sponsor}</p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 flex-1">
                    {track.description}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">Prize</p>
                    <p className="text-sm text-zinc-300">{track.prize}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Lab partners GlycanAge and Aetas will provide biological age data
            and testing support where relevant to your project.
          </p>
        </div>
      </section>

      {/* ── Beyond the Build (activities) ────────────────────── */}
      <section className="w-full py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Beyond the Build
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              This isn&rsquo;t just a hackathon. It&rsquo;s a weekend-long
              immersion in longevity science, career networking, and living well.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, i) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl bg-white/5 border border-white/5 p-6 hover:border-orange-500/20 transition-colors"
                >
                  <Icon className="w-8 h-8 text-orange-400 mb-3" strokeWidth={1.5} />
                  <h3 className="font-semibold mb-1">{act.title}</h3>
                  <p className="text-sm text-muted-foreground">{act.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────────── */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Schedule Highlights
            </h2>
            <p className="text-muted-foreground">
              Three days, one mission. Here&rsquo;s what your weekend looks like.
            </p>
          </motion.div>

          <div className="space-y-12">
            {scheduleHighlights.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-baseline gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                  <span className="text-muted-foreground">{day.date}</span>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                    {day.label}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {day.items.map((item, ii) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={ii}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.text}</p>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Speakers ────────────────────────────────────────── */}
      <section className="w-full py-20 relative overflow-hidden">
        <TechParticles />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-orange-400 mb-3">
              A Round of Applause for Our
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Hackathon <span className="text-orange-400">Speakers</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              The hackathon would not be the same without the contributions of
              our speakers, whose insights, expertise, and passion drive the
              innovation and creativity that define us.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 overflow-hidden"
              >
                {/* Silhouette placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-zinc-700/30 to-zinc-900/50 flex items-center justify-center">
                  <HelpCircle className="w-20 h-20 text-white/20" strokeWidth={1} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs mb-3">
                    {speaker.label}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      Time TBD
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      Location TBD
                    </span>
                  </div>
                  <p className="font-semibold text-white/80">TBD</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="w-full py-24 bg-gradient-to-b from-transparent to-orange-950/20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build the Future of Longevity?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Whether you&rsquo;re a hacker, a scientist, a designer, or a
              founder — there&rsquo;s a track for you. Applications close when
              spots fill up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-button rounded-full px-10 py-7 text-lg"
              >
                <Link
                  href="https://luma.com/uqeiu09a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Apply to Compete
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <HackathonSponsorDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass hover:bg-white/10 rounded-full px-10 py-7 text-lg border-white/20 flex items-center gap-2"
                >
                  Become a Sponsor
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </HackathonSponsorDialog>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
