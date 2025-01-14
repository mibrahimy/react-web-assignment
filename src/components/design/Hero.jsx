import Button from '../Button'
import { heroBackground, curve, hero } from '../../assets'
import {Section} from './Section'

const Hero = () => {
  return (
    <Section className="pt-[12rem] -mt-[5.25]" 
    crosses
    crossesOffset="leg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >

<div className='container relative'>
    <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]'>
    <h1 className='h1 mb-6'>
        explore the possibilites
        <span className='inline-block relative'>
            Brainwave <img src={curve} className='absolute top-full left-0nw-full xl:-mt-2'
            width={624}
            height={28}
            alt='curve'
            />

        </span>
        
    </h1>
<p className='body-1 mxa-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>unleash the power of ai within the braivwave </p>

<Button href="/pricing" white>
Get Started
</Button>
    </div>
    <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
    <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
    <div className='relative bg-n-8 rounded-[1rem]'>
    <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'><img
        src={heroBackground}
        className='w-full'
        width={1440}
        height={1800}
        alt='hero'
    /></div>
    </div>
    </div>
    <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2'>
        <img src={heroBackground} className='w-full'/>
    </div>
</div>
</div>
    <Section></Section>  
  )
}

export default Hero
