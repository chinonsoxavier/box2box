import { Footer } from "@/components/layout/footer"
import SideMenu from "@/components/layout/sidemenu"
import EarnWithUs from "@/components/pages/landing/earn_with_us"
import Faqs from "@/components/pages/landing/faqs"
import GetStarted from "@/components/pages/landing/get_started"
import Hero from "@/components/pages/landing/hero"
import HowWeWork from "@/components/pages/landing/how_we_work"
import OwnABox from "@/components/pages/landing/own_a_box"
import SocialProof from "@/components/pages/landing/social_proof"
import Testimonials from "@/components/pages/landing/testimonials"
import WhyUs from "@/components/pages/landing/why_us"

const Landing = () => {
  return (
    <div>

        {/* sidemenu */}
        <SideMenu/>

        {/* hero */}
        <Hero/>

        {/* social proof */}
        <SocialProof/>

        {/* why choose */}
        <WhyUs/>

        {/* how we work */}
        <HowWeWork/>

        {/* earn with us */}
        <EarnWithUs/>

        {/* own a box */}
        <OwnABox/>

        {/* testimonials */}
        <Testimonials/>

        {/* faqs */}
        <Faqs/>

        {/* get started */}
        <GetStarted/>

        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Landing