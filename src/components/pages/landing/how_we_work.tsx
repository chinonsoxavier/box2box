import { Button } from "@/components/ui/button";
import arrow from "../../../assets/icons/arrow-right.svg";
import radar from "../../../assets/images/radar.svg";
import guardIcon from "../../../assets/icons/guard-icon.svg";
import send from "../../../assets/icons/send.svg";
import scheduleIcon from "../../../assets/icons/schedule 1.svg";
import padlockIcon from "../../../assets/icons/padlock 1.svg";
import actionImage from "../../../assets/images/actions.svg";
import sizeAndLocationImage from "../../../assets/images/size and location.svg";
const HowWeWork = () => {
  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <div className="flex items-center justify-center gap-2.5 flex-col">
          <p className="text-sm md:text-lg text-accent">
            FAST. SIMPLE. EFFICIENT?
          </p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            How Box2Box Works
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            Whether you're storing an item, sending it out for delivery, or even
            just regular shopping, Box2Box makes it simple. Just choose your
            service type and you’re good to go.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] items-center basis-1/3 flex-wrap justify-center w-full gap-5">
          <div className="flex h-full border rounded-[12px] md:py-[33.7px] py-[30.23] md:px-[28.1px] px-[25.19] flex-1 flex-col items-start justify-center gap-5 bg-[#CBCDCD]/20 min-w-[230px]">
            <div className="center w-full bg-[#FFFFFF99]  md:py-[33.7px] py-[30.23] md:px-[28.1px] px-[25.19]">
              <img
                src={actionImage}
                alt={"action image"}
                className="max-w-[312.04px] max-h-[288.76px] w-full h-full md:max-w-[348.5px] md:max-h-[322.06]"
              />
            </div>
            <p className="md:text-[30px] whitespace-nowrap text-primary-foreground text-[22px]">
              Choose a Service
            </p>
            <p className="md:text-[20px] text-left text-[#7B858A] text-[14px]">
              Whether you want to store an item, send a package, or shop from a
              vendor, start by picking what you need.
            </p>

            <Button
              className="text-base w-min md:text-xl text-[#06545B]"
              variant="link"
            >
              Learn More <img src={arrow} alt="arrow button" className="" />
            </Button>
          </div>

          <div className="flex h-full border rounded-[12px] md:py-[33.7px] py-[30.23] md:px-[28.1px] px-[25.19] flex-1 flex-col items-start justify-center gap-5 bg-[#CBCDCD]/20 min-w-[230px]">
            <div className="center w-full md:py-[33.7px] py-[30.23] md:px-[28.1px] px-[25.19]">
              <img
                src={sizeAndLocationImage}
                alt={"size and location image"}
                className="max-w-[312.04px] max-h-[288.76px] w-full h-full md:max-w-[348.5px] md:max-h-[322.06]"
              />
            </div>
            <p className="md:text-[30px] whitespace-nowrap text-primary-foreground text-[22px]">
              Select a Box & Location
            </p>
            <p className="md:text-[20px] text-left text-[#7B858A] text-[14px]">
              Pick the cabinet size that fits your item, choose a nearby box
              location, and enter the destination (if you're sending).
            </p>

            <Button
              className="text-base md:text-xl w-min text-[#06545B]"
              variant="link"
            >
              Learn More <img src={arrow} className="" alt="arrow button" />
            </Button>
          </div>

          <div className="flex h-full border rounded-[12px] md:py-[33.7px] py-[30.23] md:px-[28.1px] px-[25.19] flex-1 flex-col items-start justify-center gap-5 bg-[#CBCDCD]/20 min-w-[230px]">
            <div className="center w-full bg-[#FFFFFF99]  md:py-[33.7px] py-[30.23] md:px-[28.1px] px-[25.19] relative">
              <div className="center left-15 top-15 absolute bg-[#FFFFFF] rounded-full border-[.94] border-ssecondary md:w-[42px] md:h-[42px] h-[37.66px] w-[37.66px]">
                <img src={guardIcon} alt="" />
              </div>

              <div className="center right-25 top-18 absolute bg-[#FFFFFF] rounded-full border-[.94] border-ssecondary md:w-[42px] md:h-[42px] h-[37.66px] w-[37.66px]">
                <img src={scheduleIcon} alt="" />
              </div>

              <div className="center right-25 top-18 absolute bg-[#FFFFFF] rounded-full border-[.94] border-ssecondary md:w-[42px] md:h-[42px] h-[37.66px] w-[37.66px]">
                <img src={padlockIcon} alt="" />
              </div>

              <div className="center right-5 bottom-35 absolute bg-[#FFFFFF] rounded-full border-[.94] border-ssecondary md:w-[42px] md:h-[42px] h-[37.66px] w-[37.66px]">
                <img src={send} alt="" />
              </div>

              <div className="center left-30 bottom-10 absolute bg-[#FFFFFF] rounded-full border-[.94] border-ssecondary md:w-[42px] md:h-[42px] h-[37.66px] w-[37.66px]">
                <img src={scheduleIcon} alt="" />
              </div>
              <img
                src={radar}
                alt={"radar"}
                className="max-w-[312.04px] max-h-[288.76px] w-full h-full md:max-w-[348.5px] md:max-h-[322.06]"
              />
            </div>
            <p className="md:text-[30px] whitespace-nowrap text-primary-foreground text-[22px]">
              Choose a Service
            </p>
            <p className="md:text-[20px] text-left text-[#7B858A] text-[14px]">
              Whether you want to store an item, send a package, or shop from a
              vendor, start by picking what you need.
            </p>

            <Button
              className="text-base md:text-xl w-min text-[#06545B]"
              variant="link"
            >
              Learn More <img src={arrow} alt="arrow button" />
            </Button>
          </div>
        </div>
        <Button className="max-w-[603px] h-[80px]">Download Box2Box App</Button>
      </div>
    </section>
  );
};

export default HowWeWork;
