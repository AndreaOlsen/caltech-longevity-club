import type { Event } from "@/types/events";

export const events: Event[] = [
  // ── Featured / Upcoming ──────────────────────────────────────────────
  {
    id: "peter-diamandis",
    topic: "The Future of Longevity: An XPRIZE Perspective",
    date: "2026-04-15",
    time: "5:00 PM – 6:30 PM",
    location: "Caltech — visible after RSVP approval",
    featured: true,
    eventType: "speaker",
    description:
      "Peter Diamandis — physician, entrepreneur, and founder of the XPRIZE Foundation — joins us for a wide-ranging discussion on the convergence of exponential technologies and human healthspan extension. From AI-driven drug discovery to the economics of radical life extension, this talk offers a panoramic view of where the longevity field is headed and what it means for the next generation of scientists and founders.",
    speakers: [
      {
        name: "Peter Diamandis",
        title: "Founder & Executive Chairman, XPRIZE Foundation",
        photo: "/events/peter-diamandis.png",
        social: {
          linkedin: "https://www.linkedin.com/in/diamandis/",
        },
      },
    ],
    url: "https://luma.com/i1bprpfv",
  },

  {
    id: "hackathon-2026",
    topic: "Caltech Longevity Hackathon",
    date: "2026-05-22",
    time: "9:00 AM – 8:00 PM (May 22–24)",
    location: "Caltech Campus — visible after RSVP approval",
    featured: true,
    eventType: "hackathon",
    description:
      "A three-day intensive where multidisciplinary teams prototype solutions at the intersection of aging biology, AI, and clinical translation. Projects will be judged by a panel of biotech founders and longevity researchers, with top teams receiving mentorship and seed-stage introductions.",
    coverImage: "/events/hackathon-2026.png",
    speakers: [
      {
        name: "Caltech Longevity Club",
        title: "Organizers",
        social: {},
        photo: "/events/hackathon-2026.png",
      },
    ],
    url: "https://luma.com/uqeiu09a",
  },

  // ── Journal Club Series ──────────────────────────────────────────────
  {
    id: "journal-club-series",
    topic: "Longevity Journal Club — Monthly Paper Series",
    date: "2026-05-07",
    time: "6:00 PM – 7:30 PM (first Thursday of each month)",
    location: "Caltech — visible after RSVP approval",
    featured: true,
    eventType: "journal-club",
    coverImage: "/events/journal-club.svg",
    photo: "/events/journal-club.svg",
    description:
      "A six-month deep-dive into the most important papers in aging biology, longevity medicine, and AI-driven therapeutics. Each month we dissect one landmark paper — interrogating methodology, debating implications, and connecting findings to the broader field. In parallel, participants collaborate on an original review paper targeting publication in an aging-related journal. This is rigorous academic work: members must commit to attending at least 5 of the 6 sessions.",
    speakers: [],
    url: "",
    whatsappUrl: "https://chat.whatsapp.com/BSzBW5qpoDrCnk2ijkiPRz?mode=gi_t",
  },

  // ── Upcoming ──────────────────────────────────────────────────────────
  {
    id: "longevity-lunch-koch",
    topic: "Longevity Lunch with Christof Koch",
    date: "2026-05-09",
    time: "12:00 PM – 1:30 PM",
    location: "Caltech — visible after RSVP approval",
    eventType: "speaker",
    description:
      "An intimate lunch conversation with Christof Koch — neuroscientist, author, and former Chief Scientist of the Allen Institute for Brain Science — exploring the neurobiology of aging, consciousness, and what modern brain science tells us about extending cognitive healthspan.",
    speakers: [
      {
        name: "Christof Koch",
        title: "Neuroscientist & Author",
        photo: "/events/christof-koch.jpg",
        social: {},
      },
    ],
    url: "https://luma.com/rv9krnx3",
  },

  // ── Past events (auto-sorted by getEvents) ──────────────────────────
  {
    id: "chinese-medicine-meditation",
    topic: "Longevity Meditation & Chinese Medicine",
    date: "2026-03-05",
    time: "7:30 PM",
    location: "Caltech, Chen 100",
    eventType: "other",
    coverImage: "/gallery/IMG_1284.jpg",
    description:
      "An evening exploring traditional Chinese medicine practices and guided meditation techniques for longevity and stress reduction.",
    speakers: [
      {
        name: "Wen Chen",
        title: "Chinese Medicine & Meditation Practitioner",
        photo: "/gallery/IMG_1284.jpg",
        social: {},
      },
    ],
    recap: {
      summary:
        "Wen Chen led an immersive session on Chinese medicine principles and meditation practices relevant to longevity, attended by 46 guests at Chen 100.",
      photos: ["/gallery/IMG_1284.jpg", "/gallery/IMG_5782.jpg"],
      highlights: [
        "Traditional Chinese medicine approaches to healthy aging",
        "Guided meditation and sound bowl practice",
        "Breathing techniques for stress reduction and recovery",
      ],
    },
  },

  {
    id: "jordan-schlain",
    topic: "Remember the Future: Strategies for a Meaningful Life in Medicine",
    date: "2026-01-28",
    time: "5:00 PM – 6:30 PM",
    location: "Dabney Hall Lounge",
    eventType: "speaker",
    description:
      "Dr. Schlain draws on decades of clinical practice and health-tech entrepreneurship to explore how physicians and scientists can design careers that sustain both impact and personal meaning.",
    speakers: [
      {
        name: "Dr. Jordan Schlain",
        title: "Physician & Health Tech Entrepreneur",
        social: {
          linkedin: "https://www.linkedin.com/in/jordanschlain/",
          luma: "https://luma.com/mhzcyfkc",
        },
        photo: "/events/jordan-shlain.jpg",
      },
    ],
    url: "https://luma.com/mhzcyfkc",
    recap: {
      summary:
        "Dr. Schlain shared frameworks for building a career in medicine that prioritizes long-term fulfillment alongside scientific rigor, drawing from his experience founding HealthLoop and advising early-stage health startups.",
      highlights: [
        "Frameworks for evaluating career longevity in medicine",
        "Lessons from founding HealthLoop",
        "Q&A on health-tech entrepreneurship",
      ],
    },
  },

  {
    id: "hackathon-2025",
    topic: "Caltech Longevity Hackathon 2025",
    date: "2025-05-24",
    time: "9:00 AM – 8:00 PM (May 24–25)",
    location: "Dabney Hall, Pasadena, CA",
    eventType: "hackathon",
    description:
      "Our inaugural hackathon brought together multidisciplinary teams to prototype longevity solutions over an intensive weekend. Teams tackled challenges spanning supplement safety, joint health, and AI-driven aging interventions — culminating in pitch presentations judged by biotech founders and longevity researchers.",
    speakers: [],
    photo: "/gallery/IMG_9763.jpg",
    coverImage: "/gallery/IMG_9763.jpg",
    url: "https://luma.com/6ndeo6qb",
    recap: {
      summary:
        "Over 60 participants from 20+ countries came together for an intensive 30-hour build sprint. Five hacker teams each created a full MVP within the track of building a Personal Longevity Concierge. Our top three teams built complete AI systems with backend, frontend, and UX — and the overall winners will proceed to a startup incubator to launch their idea.",
      photos: [
        "/gallery/IMG_9763.jpg",
        "/gallery/IMG_1777.jpg",
        "/gallery/IMG_1745.jpg",
        "/gallery/IMG_4012.jpg",
        "/gallery/IMG_9427.jpg",
        "/gallery/IMG_9499.jpg",
        "/gallery/IMG_9452.jpg",
      ],
      highlights: [
        "60+ active participants representing 20+ countries",
        "5 teams built MVPs for a Personal Longevity Concierge in just 30 hours",
        "Top teams built full AI systems (backend, frontend, UX) — winners advancing to a startup incubator",
        "Judged by a Caltech CS professor, a Harvard/Oxford-trained physician, and a longevity biotech executive",
        "6 mentors from longevity biotech companies and founders guided teams throughout",
        "Functional athletics training with an Olympic-level sports coach",
        "Longevity yoga session with sound-bath experience for stress relief and recovery",
        "Sponsored by Insilico Medicine, Longevity Pledge, LongeVC, Retro, VitaDAO, TruDiagnostic, Long Game, and more",
      ],
    },
  },

  {
    id: "longevity-science-bet",
    topic: "Why Longevity Science Is a Good Bet",
    date: "2025-05-30",
    time: "4:30 PM",
    location: "Dabney Hall",
    eventType: "speaker",
    description:
      "A data-driven look at why the longevity sector represents one of the most compelling scientific and economic opportunities of the coming decade.",
    speakers: [
      {
        name: "Michael Ringel",
        title: "JD PhD",
        social: {},
        photo: "/events/Caltech Longevity Club Meeting.avif",
      },
    ],
    url: "https://lu.ma/b8puesdj",
    recap: {
      summary:
        "Michael Ringel presented a compelling case for longevity as both a scientific frontier and an investment thesis, covering regulatory pathways, market sizing, and the role of AI in accelerating drug discovery.",
      photos: ["/events/Caltech Longevity Club Meeting.avif"],
      highlights: [
        "Market analysis of the longevity biotech sector",
        "Regulatory landscape for aging-related therapeutics",
        "Discussion of AI-driven drug discovery pipelines",
      ],
    },
  },

  {
    id: "tai-chi-session",
    topic: "Tai Chi Session with Shang-Lin Chen",
    date: "2025-05-01",
    time: "4:30 PM",
    location: "Beckman Lawn",
    eventType: "other",
    coverImage: "/gallery/IMG_3473.jpg",
    description:
      "An outdoor Tai Chi session led by Shang-Lin Chen, exploring movement practices rooted in traditional Chinese martial arts and their connection to balance, mobility, and long-term physical resilience.",
    speakers: [
      {
        name: "Shang-Lin Chen",
        title: "Tai Chi Instructor",
        photo: "/gallery/IMG_3473.jpg",
        social: {},
      },
    ],
    recap: {
      summary:
        "23 members joined Shang-Lin Chen on Beckman Lawn for a Tai Chi session focused on balance, breathwork, and mindful movement as foundations for lifelong physical health.",
      photos: ["/gallery/IMG_3473.jpg"],
    },
  },

  {
    id: "event-2",
    topic: "The Frontiers of Genetic Medicine — From Biohacking to the Clinic",
    date: "2025-05-08",
    time: "5:00 PM",
    location: "Dabney Hall Lounge",
    eventType: "speaker",
    description:
      "Matt Scholz discusses the journey from gene therapy research to building Oisin Biotechnologies, a company developing senolytic gene therapies for age-related disease.",
    speakers: [
      {
        name: "Matt Scholz",
        title: "CEO of Oisin Biotechnologies",
        social: { linkedin: "https://www.linkedin.com/in/matthewscholz/" },
        photo: "/events/Matt Scholz.jpg",
      },
    ],
    url: "https://lu.ma/cicl1io3",
    recap: {
      summary:
        "Matt Scholz took us through the science and business of senolytic gene therapy, covering Oisin's platform technology and the translational path from bench to bedside.",
      photos: ["/events/Matt Scholz.jpg"],
      highlights: [
        "Overview of senolytic gene therapy approaches",
        "Oisin Biotechnologies' fusogenix platform",
        "Translational challenges in aging therapeutics",
      ],
    },
  },

  {
    id: "functional-training",
    topic: "Train for Life: Functional Athletics Taster with the Longevity Club",
    date: "2025-04-17",
    time: "4:00 PM",
    location: "Beckman Lawn",
    eventType: "other",
    description:
      "An outdoor hands-on session exploring evidence-based functional training methods used by elite athletes — and how the same principles apply to healthspan optimization.",
    speakers: [
      {
        name: "Richie Diaz",
        title: "Professional Athlete & Functional Strength Trainer",
        photo: "/events/richard diaz.jpg",
        social: {},
      },
    ],
    url: "https://lu.ma/1lubu8v0",
    recap: {
      summary:
        "Richie Diaz led an interactive outdoor training session, demonstrating functional movement patterns that optimize athletic performance and long-term musculoskeletal health.",
    },
  },

  {
    id: "club-fair",
    topic: "Caltech Club Fair",
    date: "2025-04-13",
    time: "TBA",
    location: "Moore's Walk",
    eventType: "other",
    speakers: [],
    photo: "/events/career fair.jpg",
    recap: {
      summary:
        "The Caltech Longevity Club introduced itself to the broader campus community at the Spring Club Fair, recruiting new members and sharing our upcoming speaker and hackathon schedule.",
      photos: ["/events/career fair.jpg"],
    },
  },


  {
    id: "event-1",
    topic: "Grand Opening Event: AI, Biotech & Longevity",
    date: "2025-02-27",
    time: "4:30 PM",
    location: "Dabney Hall Lounge",
    eventType: "speaker",
    description:
      "The inaugural Caltech Longevity Club event, featuring a keynote from Ryan Cabeen on how Blueprint applies AI and rigorous self-experimentation to push the boundaries of human healthspan.",
    speakers: [
      {
        name: "Ryan Cabeen",
        title: "CTO, Blueprint (Bryan Johnson)",
        social: { linkedin: "https://www.linkedin.com/in/cabeen/" },
        photo: "/events/Ryan Cabeen.png",
      },
    ],
    url: "https://lu.ma/ebvvob6v",
    isPast: true,
    recap: {
      summary:
        "Our founding event drew a packed room as Ryan Cabeen shared Blueprint's data-driven approach to aging reversal, followed by a lively Q&A on the intersection of AI, biomarkers, and personal health optimization.",
      photos: ["/events/Ryan Cabeen.png"],
      highlights: [
        "Blueprint's AI-driven protocol design methodology",
        "Biomarker tracking and quantified self approaches",
        "Career paths in longevity tech startups",
      ],
    },
  },
];

export function getEvents() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return {
    featured: events.filter((event) => event.featured),
    upcoming: events
      .filter(
        (event) =>
          event.date && !event.isPast && new Date(event.date) >= now
      )
      .sort(
        (a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
      ),
    past: events
      .filter(
        (event) =>
          event.date && (event.isPast || new Date(event.date) < now)
      )
      .sort(
        (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
      ),
  };
}
