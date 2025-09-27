import wallet from "../../../assets/icons/walletIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import partnerImage from "../../../assets/images/partner.svg";
import passiveIncome from "../../../assets/images/passive income.svg";
import wealth from "../../../assets/images/wealth.svg";
import wealthgrowth from "../../../assets/icons/increase.svg";
import unlockIcon from "../../../assets/icons/unlock.svg";
import checkIcon from "../../../assets/icons/guardCheckIcon.svg";
import smartTechImage from "../../../assets/images/smart tech.svg";

const EarnWithUs = () => {
  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <div className="flex items-center justify-center gap-2.5 flex-col">
          <p className="text-sm md:text-lg text-accent">
            EARN WITH EVERY DELIVERY
          </p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            Earn From Owning a Box
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            Become a Box2Box owner and turn your space into a smart earning
            opportunity. Host a locker at your location, earn passive income
            from every delivery or storage session.
          </p>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 gap-5 w-full items-start">
          {/* First Item */}
          <div className="rounded-[30px] h-full bg-secondary flex flex-col justify-between pt-6 px-6">
            <div className="flex flex-col items-center gap-6 max-w-[512px] mx-auto my-3">
              <div className="relative flex flex-col items-center">
                <img
                  src={phoneIcon}
                  alt="phone icon"
                  className="absolute left-0 top-1/3 z-0"
                />
                <div className="w-[44.59px] h-[44.59px] md:w-[70px] md:h-[70px] rounded-full bg-[#EFFAF6] flex items-center justify-center z-30">
                  <img src={wallet} alt="wallet icon" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-[22px] md:text-2xl font-semibold text-primary-foreground leading-[150%]">
                  Earn Passive Income
                </p>
                <p className="text-sm md:text-lg text-secondary-foreground">
                  Get paid every time someone uses your box — whether it’s for
                  deliveries, pickups, or temporary storage.
                </p>
              </div>
            </div>
            <div className="h-full flex items-end justify-center">
              <img
                src={passiveIncome}
                alt="passive income image"
                className="w-full h-full object-contain max-w-[500px]"
              />
            </div>
          </div>

          {/* Second Item (Slightly Taller) */}
          <div className="rounded-[30px] h-full max-h-[762p] bg-[#CBCDCD]/20 flex flex-col p-5">
            <div className="max-w-[606px] my-7.5 mx-auto">
              <img
                src={wealth}
                alt="grow wealth"
                className="w-full rounded-[12px]"
              />
            </div>
            <div className="flex flex-col mt-10 items-center gap-4">
              <div className="bg-[#06545B] p-2 rounded-full w-[40.99px] h-[40.99px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                <img src={unlockIcon} alt="unlock icon" />
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <img
                  src={wealthgrowth}
                  alt="wealth growth"
                  className="h-6 w-6 md:h-10 md:w-10"
                />
                <p className="text-[22px] md:text-2xl font-semibold text-primary-foreground leading-[150%]">
                  Grow With the Network. Unlock Wealth
                </p>
                <p className="text-sm text-left md:text-lg text-[#7B858A] leading-[150%]">
                  As Box2Box expands, so does your earning potential. More users
                  = more usage = more earnings for you.
                </p>
              </div>
            </div>
          </div>

          {/* Third Item (Slightly Taller) */}
          <div className="rounded-[30px] h-full max-h-[762p] bg-[#CBCDCD]/20 flex flex-col p-5">
            <div className="w-full flex justify-center">
              <img
                src={partnerImage}
                alt="partner image"
                className="max-w-[580px] w-full"
              />
            </div>
            <div className="flex flex-col mt-10 gap-[10px]">
              <h3 className="text-[22px] text-left md:text-[24px] font-semibold text-primary-foreground">
                Partner, Not Just a Host
              </h3>
              <p className="text-sm text-left md:text-[20px] text-secondary-foreground max-w-[907px]">
                Get featured on our platform, access reports, and enjoy priority
                onboarding for future Box2Box services.
              </p>
            </div>
          </div>

          {/* Fourth Item */}
          <div className="rounded-[30px] bg-secondary h-full flex flex-col justify-between p-5">
            <div className="flex flex-col gap-[33px]">
              <div className="bg-[#EFFAF6] rounded-full h-[40.99px] w-[40.99px] md:h-[70px] md:w-[70px] flex items-center justify-center">
                <img src={checkIcon} alt="check icon" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[22px] md:text-[24px] font-semibold text-primary-foreground">
                  Smart Tech, Secure Access
                </h3>
                <p className="text-sm md:text-[20px] text-secondary-foreground max-w-[907px]">
                  Each box is equipped with digital locks, access codes, and
                  real-time tracking — ensuring peace of mind for you and users.
                </p>
              </div>
            </div>
            <div>
              <img
                src={smartTechImage}
                alt="smart tech image"
                className="w-full rounded-[8.76px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnWithUs;
