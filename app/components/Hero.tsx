/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

// Grayscale hero + placeholders
import heroImage from '../../public/hero.jpg'
import step1Image from '../../public/step1.jpg'
import step2Image from '../../public/step2.jpg'
import step3Image from '../../public/step3.jpg'
import zone1Image from '../../public/zone1.jpg'
import zone2Image from '../../public/zone2.jpg'
import zone3Image from '../../public/zone3.jpg'
import zone4Image from '../../public/zone4.jpg'
import team1Image from '../../public/team1.jpg'
import team2Image from '../../public/team2.jpg'
import team3Image from '../../public/team3.jpg'

/** 
 * Main Landing Page
 */
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection />

      {/* BRAND DESCRIPTION CARD */}
      <section
        id="about"
        className="relative mx-auto -mt-8 max-w-2xl rounded-md bg-white p-6 text-center shadow transition-all sm:-mt-12 sm:p-8 md:-mt-16 lg:-mt-20"
      >
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">huntshake</h2>
        <h3 className="mb-4 text-lg font-semibold text-gray-700 sm:text-xl">
          Making Social Media Truly Social Again
        </h3>
        <p className="mx-auto max-w-xl text-gray-600">
          huntshake connects you to people around you in real time, transforming
          social venues into hubs for personal, professional, and academic
          networking.
        </p>
        <div className="mt-6">
          <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 sm:text-base">
            Notify Me!
          </button>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section id="howto" className="bg-gray-50 px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            How to Use?
          </h2>
          <EnhancedHowTo />
        </div>
      </section>

      <PopularCatchZones />
      <Features />
      <Team />
      <FaqAccordion />
      <Footer />
    </div>
  )
}

/* ----------------------------------------------------------------------------
  NAVBAR COMPONENT - Larger logo (96×96)
----------------------------------------------------------------------------- */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-6">
      <div>
        <a href="#hero" className="flex items-center hover:opacity-80">
          {/* Using huntlogo.png at 96×96 */}
          <Image
            src="/huntlogo.png"
            alt="Huntshake Logo"
            width={96}
            height={96}
            className="object-contain w-24 h-24"
          />
        </a>
      </div>
      <ul className="flex items-center space-x-4 text-sm font-medium text-gray-800 sm:space-x-6">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#howto" className="hover:underline">
            How to Use
          </a>
        </li>
        <li>
          <a href="#features" className="hover:underline">
            Features
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

/* ----------------------------------------------------------------------------
  SIMPLE HERO SECTION
----------------------------------------------------------------------------- */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden text-white"
    >
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center filter grayscale"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
          Transforming Venues <br /> Into Social Hubs
        </h1>
        <p className="mx-auto max-w-md text-sm text-gray-100 sm:text-base md:text-lg">
          Making Real Connections in Real Time
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#about"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 sm:text-base"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 sm:text-base"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      {/* Single wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg
          className="h-8 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 500 150"
        >
          <path
            d="M-0.40,49.98 C149.99,150.00 280.62,-49.99 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-current"
          />
        </svg>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------------
  HOW TO USE SECTION
----------------------------------------------------------------------------- */

/** StepItem (desktop) props */
interface StepItemProps {
  stepNumber: number;
  image: StaticImageData | string;
  title: string;
  subtitle?: string;
}

function EnhancedHowTo() {
  return (
    <>
      {/* Horizontal timeline on md+ screens */}
      <div className="relative hidden items-center justify-between md:flex">
        <div className="absolute top-1/2 left-0 right-0 z-0 h-1 border-t border-dashed border-gray-300" />
        <StepItem
          stepNumber={1}
          image={step1Image}
          title="Be physically present in a CatchZone"
          subtitle="Check in at your location"
        />
        <StepArrow />
        <StepItem
          stepNumber={2}
          image={step2Image}
          title="See who's around you"
          subtitle="Discover local opportunities"
        />
        <StepArrow />
        <StepItem
          stepNumber={3}
          image={step3Image}
          title="Send an Invitation"
          subtitle="Start a real conversation"
        />
      </div>

      {/* Vertical stack on smaller screens */}
      <div className="flex flex-col space-y-12 md:hidden">
        <MobileStep
          stepNumber={1}
          image={step1Image}
          title="Be physically present in a CatchZone"
          subtitle="Check in at your location"
        />
        <MobileStep
          stepNumber={2}
          image={step2Image}
          title="See who's around you"
          subtitle="Discover local opportunities"
        />
        <MobileStep
          stepNumber={3}
          image={step3Image}
          title="Send an Invitation"
          subtitle="Start a real conversation"
        />
      </div>
    </>
  )
}

function StepItem({ stepNumber, image, title, subtitle }: StepItemProps) {
  return (
    <div className="relative z-10 flex w-1/3 flex-col items-center px-2 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-bold text-white hover:bg-gray-700 hover:shadow-lg transition-all">
        {stepNumber}
      </div>
      <div className="relative mb-3 h-40 w-40 overflow-hidden rounded-md shadow-md transition-transform duration-300 hover:scale-105">
        <Image
          src={image}
          alt={`Step ${stepNumber}`}
          fill
          className="object-cover object-center filter grayscale"
        />
      </div>
      <h3 className="max-w-xs text-sm font-semibold text-black sm:text-base">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 text-xs text-gray-600 sm:text-sm">{subtitle}</p>
      )}
    </div>
  )
}

function StepArrow() {
  return (
    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center text-gray-400">
      <svg
        className="h-6 w-6 rotate-90 md:rotate-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )
}

/** MobileStep props */
interface MobileStepProps extends StepItemProps {}

function MobileStep({ stepNumber, image, title, subtitle }: MobileStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white hover:bg-gray-700 hover:shadow-lg transition-all sm:h-14 sm:w-14 sm:text-xl">
        {stepNumber}
      </div>
      <div className="relative mb-4 h-44 w-full max-w-xs overflow-hidden rounded-md shadow transition-transform duration-300 hover:scale-105 sm:h-52">
        <Image
          src={image}
          alt={`Step ${stepNumber}`}
          fill
          className="object-cover object-center filter grayscale"
        />
      </div>
      <h3 className="mx-auto max-w-xs text-sm font-semibold leading-snug text-black sm:text-base">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 text-xs text-gray-600 sm:text-sm">{subtitle}</p>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------------------
  POPULAR CATCHZONES SECTION
----------------------------------------------------------------------------- */

/** CatchZone interface */
interface CatchZone {
  name: string;
  location: string;
  category: string;
  attendees: string;
  img: StaticImageData | string;
  description: string;
}

function PopularCatchZones() {
  const allZones: CatchZone[] = [
    {
      name: 'Tech Conference',
      location: 'San Francisco',
      category: 'Tech',
      attendees: '200+',
      img: zone1Image,
      description: 'Connect with innovators and founders in the tech world.',
    },
    {
      name: 'Campus Meetup',
      location: 'Oxford',
      category: 'Campus',
      attendees: '150+',
      img: zone2Image,
      description: 'Study groups and events for students & faculty.',
    },
    {
      name: 'Startup Hub',
      location: 'Berlin',
      category: 'Startup',
      attendees: '300+',
      img: zone3Image,
      description:
        'Entrepreneurs and investors come together to form new ventures.',
    },
    {
      name: 'Café Lounge',
      location: 'Tokyo',
      category: 'Café',
      attendees: '80+',
      img: zone4Image,
      description:
        'Cozy environment to meet new people and share experiences.',
    },
  ]

  const categories = ['All', 'Tech', 'Campus', 'Startup', 'Café']
  const locations = ['All', 'San Francisco', 'Oxford', 'Berlin', 'Tokyo']

  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeLocation, setActiveLocation] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredZones = allZones.filter((zone) => {
    const matchesCategory =
      activeCategory === 'All' || zone.category === activeCategory
    const matchesLocation =
      activeLocation === 'All' || zone.location === activeLocation
    const matchesSearch = zone.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesLocation && matchesSearch
  })

  function resetFilters() {
    setActiveCategory('All')
    setActiveLocation('All')
    setSearchQuery('')
  }

  return (
    <section
      id="catchzones"
      className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16"
    >
      <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
        Popular CatchZones
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-center text-gray-600 sm:text-base">
        Explore the top hotspots in your city and beyond. Join a CatchZone to
        experience real-time connections with people who share your interests.
      </p>

      {/* Search + Filter Bar */}
      <div className="mb-6 flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
        <div className="w-full max-w-sm">
          <input
            type="text"
            placeholder="Search CatchZone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm focus:border-black focus:outline-none"
          />
        </div>
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm focus:border-black focus:outline-none"
        >
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={activeLocation}
          onChange={(e) => setActiveLocation(e.target.value)}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm focus:border-black focus:outline-none"
        >
          {locations.map((loc) => (
            <option value={loc} key={loc}>
              {loc}
            </option>
          ))}
        </select>
        <button
          onClick={resetFilters}
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredZones.length > 0 ? (
          filteredZones.map((zone, idx) => (
            <CatchZoneCard key={idx} zone={zone} />
          ))
        ) : (
          <div className="col-span-4 text-center text-sm italic text-gray-600">
            No CatchZones match your criteria.
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          View All Zones
        </a>
      </div>
    </section>
  )
}

/** Props for CatchZoneCard */
interface CatchZoneCardProps {
  zone: CatchZone;
}

function CatchZoneCard({ zone }: CatchZoneCardProps) {
  return (
    <div className="relative overflow-hidden rounded shadow transition-transform duration-300 hover:scale-105">
      <Image
        src={zone.img}
        alt={zone.name}
        className="object-cover object-center filter grayscale"
        fill
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="p-3 text-white">
          <p className="mb-1 text-sm font-semibold sm:text-base">{zone.name}</p>
          <p className="mb-1 text-xs italic sm:text-sm">{zone.location}</p>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="font-bold">Category:</span> {zone.category} <br />
            <span className="font-bold">Attendees:</span> {zone.attendees}
          </div>
          <p className="text-xs sm:text-sm">{zone.description}</p>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------------------
  FEATURES SECTION
----------------------------------------------------------------------------- */
function Features() {
  const featureList = [
    {
      title: 'Local Networking',
      description:
        'Meet people around you instantly for business, study, or friendship.',
    },
    {
      title: 'Secure & Private',
      description:
        'Your data is safe. Only real connections, no spam or endless scrolling.',
    },
    {
      title: 'Real-Life Integration',
      description:
        'Bridge the gap between online profiles and real-world interactions.',
    },
    {
      title: 'Easy to Use',
      description:
        'Sign up, turn on location, and discover who is in the same venue.',
    },
  ]

  return (
    <section
      id="features"
      className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16"
    >
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
        Features
      </h2>
      <div className="grid gap-10 sm:grid-cols-2">
        {featureList.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 rounded-md bg-gray-50 p-4 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="mt-1">
              <IconCheck />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------------
  TEAM SECTION
----------------------------------------------------------------------------- */
function Team() {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Founder & CEO', img: team1Image },
    { name: 'Michael Brown', role: 'CTO & Lead Engineer', img: team2Image },
    { name: 'Sophie Lee', role: 'Community Manager', img: team3Image },
  ]

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Meet the Team
        </h2>
        <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex w-full max-w-xs flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full shadow">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-center filter grayscale"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">
                {member.name}
              </h3>
              <p className="text-sm text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------------
  FAQ ACCORDION
----------------------------------------------------------------------------- */
interface FaqItem {
  question: string;
  answer: string;
}

function FaqAccordion() {
  const faqs: FaqItem[] = [
    {
      question: 'When will you launch?',
      answer: 'The platform will be launched on June 2025.',
    },
    {
      question: 'Who is huntshake for?',
      answer:
        'If you use professional networking, dating, or social apps, huntshake enhances your experience by connecting you with people in real life, wherever you go.',
    },
    {
      question: 'Why should I use huntshake?',
      answer:
        'Current social media connects us with people far away, but what about the opportunities around us every day? Why search online for connections when interesting people are right beside us? We’re focused on the virtual and missing the real.',
    },
    {
      question: 'Who can view my profile?',
      answer:
        'Only huntshake users who confirmed their presence in a CatchZone and open to network can view your profile.',
    },
    {
      question: 'How long will my profile be visible in a CatchZone?',
      answer:
        'Your presence will be active for 2 to 8 hours, depending on the type of CatchZone. In professional and academic spaces, it can last up to 8 hours, while in social venues like cafés, it’s around 2 hours.',
    },
  ]

  return (
    <section className="bg-gray-100 px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface AccordionItemProps {
  item: FaqItem;
}

function AccordionItem({ item }: AccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded bg-white p-4 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left font-semibold text-black focus:outline-none"
      >
        <span>{item.question}</span>
        <span className="ml-2 text-xl">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="mt-2 text-gray-700">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------------------
  FOOTER COMPONENT
----------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} huntshake. All rights reserved.</p>
    </footer>
  )
}

/* ----------------------------------------------------------------------------
  ICON CHECK for Features
----------------------------------------------------------------------------- */
function IconCheck() {
  return (
    <svg
      className="h-6 w-6 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
