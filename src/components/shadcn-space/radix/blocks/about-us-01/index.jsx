import AboutUs from '@/components/shadcn-space/radix/blocks/about-us-01/about-us'
import { Eye, HeartHandshake, Target } from 'lucide-react'

const aboutusData = [
  {
    icon: Eye,
    title: 'Transparency',
    color: 'bg-ink text-white',
  },
  {
    icon: HeartHandshake,
    title: 'Retention',
    color: 'bg-lime text-ink',
  },
  {
    icon: Target,
    title: 'Ownership',
    color: 'bg-stone text-ink',
  },
]

// Placeholder figures: replace with Altavel's real numbers before launch.
const statisticsCounter = [
  {
    title: 'Vetted engineers in our network',
    count: 30,
    suffix: '+',
  },
  {
    title: 'Average engineer retention',
    count: 95,
    suffix: '%',
  },
  {
    title: 'Products shipped for clients',
    count: 50,
    suffix: '+',
  },
]

const AboutAndStats01 = () => {
  return <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
}

export default AboutAndStats01
