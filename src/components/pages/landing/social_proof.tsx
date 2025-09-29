import shopRite from "../../../assets/images/shoprite.svg";
import HealthPlus from "../../../assets/images/healthPlus.svg";
import Radopin from "../../../assets/images/radopin.svg";
import Gig from "../../../assets/images/gig.svg";
import chowDeck from "../../../assets/images/chowdeck.svg";
import chickenRepublic from "../../../assets/images/chickenRepublic.svg";
import Animate from "@/components/animation/animate";
const SocialProof = () => {
  const socialProofs = [
    shopRite,
    chowDeck,
    chickenRepublic,
    Gig,
    HealthPlus,
    Radopin,
  ];

  const socialProofs2 = [
      Gig,
      HealthPlus,
      Radopin,
      chickenRepublic,
    shopRite,
  ];
  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <Animate type="slideInDown" className="flex items-center justify-center gap-2.5 flex-col">
            
          <p className="text-sm md:text-lg text-accent">SOCIAL PROOF</p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            Trusted by 50+ Companies
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            We're proud to work with innovative partners across food, retail,
            health, and logistics — building smarter delivery systems together.
          </p>
        </Animate>

        {/* <div className="w-full"> */}
          <Animate className="flex items-center justify-between w-full">
            {socialProofs.map((proof, index) => (
              <img
                key={index}
                src={proof}
                className="h-full w-full min-w-[107px] max-w-[198px]"
                alt="social proof image"
              />
            ))}
          </Animate>
 
          <Animate className="flex items-center justify-center gap-4 w-full">
            {socialProofs2.map((proof, index) => (
              <img
                key={index}
                src={proof}
                className="h-full w-full min-w-[107px] max-w-[198px]"
                alt="social proof image"
              />
            ))}
          </Animate>
        {/* </div> */}
      </div>
    </section>
  );
};

export default SocialProof;
