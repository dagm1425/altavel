import AboutUs from '@/components/shadcn-space/radix/blocks/about-us-01/about-us'
import { BadgeCheck, Eye, Target } from 'lucide-react'

const aboutusData = [
  {
    icon: Eye,
    title: 'Transparency',
    color: 'bg-ink text-white',
  },
  {
    icon: BadgeCheck,
    title: 'Quality',
    color: 'bg-lime text-ink',
  },
  {
    icon: Target,
    title: 'Ownership',
    color: 'bg-stone text-ink',
  },
]

// "Products shipped" is still a placeholder: replace with Altavel's real number.
const statisticsCounter = [
  {
    title: 'Products shipped for clients',
    count: 50,
    suffix: '+',
  },
  {
    // Matches the 8 industries in the "Industries we build for" section.
    title: 'Industries served',
    count: 8,
    suffix: '',
  },
  {
    title: 'Service practices, one team',
    count: 7,
    suffix: '',
  },
]

const AboutAndStats01 = () => {
  return <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
}

export default AboutAndStats01
