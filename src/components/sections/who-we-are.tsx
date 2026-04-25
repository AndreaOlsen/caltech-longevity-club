"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Building2, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { URLS } from "@/config/urls";
import { CONTACT_EMAIL } from "@/lib/constants";

const stats = [
  { value: "60+", label: "Active Members" },
  { value: "15+", label: "Events Held" },
  { value: "10+", label: "Industry Speakers" },
];

export function WhoWeAreSection() {
  return (
    <section className="w-full">
      {/* ── Split hero-style block ──────────────────────────────── */}
      <div className="container px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: accent label + bold heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(var(--orange-bright))] mb-4">
              About the Club
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Shaping Careers
              <br />
              in the Science
              <br />
              of Longevity
            </h2>
          </motion.div>

          {/* Right: description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-6 md:pt-4"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We convene researchers, clinicians, and industry leaders to give
              Caltech students a 360-degree view of the longevity space — from
              aging biology and AI-driven therapeutics to functional medicine and
              biotech entrepreneurship.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-button rounded-full px-8"
              >
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Open to all Caltech affiliates</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ─────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/10 p-5 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Cards: Students / Companies ────────────────────────── */}
      <div className="container px-4 md:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <GraduationCap className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold">Caltech Students</h3>
                <p className="text-muted-foreground">
                  Whether you are exploring aging biology, building health-tech,
                  or charting a clinical career — this is where your trajectory
                  in the longevity space begins
                </p>
                <Button className="mt-4" asChild>
                  <Link
                    href={URLS.NOTION_SIGNUP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join as a Student
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <Building2 className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold">Companies & Sponsors</h3>
                <p className="text-muted-foreground">
                  Partner with Caltech&apos;s next generation of longevity
                  scientists and engineers — recruit talent, sponsor research,
                  and shape the field
                </p>
                <Button asChild className="w-full">
                  <Link
                    href={URLS.SPONSOR_FORM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Become a Sponsor
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
