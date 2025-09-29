import { Button } from "@/components/ui/button";
import ellipse1 from "../../../assets/images/Ellipse 117.svg";
import ellipse2 from "../../../assets/images/Ellipse 118.svg";
import ellipse3 from "../../../assets/images/Ellipse 115.svg";
import retangle1 from "../../../assets/images/Rectangle 4399.svg";
import retangle2 from "../../../assets/images/Rectangle 4400.svg";
import retangle3 from "../../../assets/images/Rectangle 4401.svg";
import Animate from "@/components/animation/animate";
const GetStarted = () => {
  return (
    <section className="max_width">
      <Animate className="max_width relative flex rounded-[30px] item-start justify-start w-full bg-[#06545B]">
        <div className="sm:my-[58px] sm:mx-[40px] my-[36px] mx-[12px] flex-1 flex items-start justify-center flex-col space-y-5">
          <p className="text-2xl xs:text-[34px] font-semibold text-left text-[#F7F9F9]">
            Ready to Store, Send, or Earn?
          </p>

          <p className="xs:text-2xl text-sm text-[#C0CBD1] text-left">
            Whether you're shopping, delivering, or looking to earn, Box2Box
            puts the power of convenience in your hands. Join the movement and
            experience smart delivery — the Nigerian way.
          </p>

          <Button className="mt-10 xs:max-w-[310px] max-w-[181px] xs:text-[22px] text-sm">
            Get Started Now
          </Button>
        </div>

        <div className="absolute bottom-0 right-0 medium:relative flex-1 items-end justify-end">
          <div className="flex items-center w-full bg-[re] right-0 justify-end relative">
            <img
              src={ellipse1}
              alt="get started image"
              className="relative bottom-0 right-0"
            />
            <img
              src={retangle2}
              alt="get started image"
              className="relative bottom-0 right-0"
            />
          </div>

          <div className="flex items-center justify-end relative">
            <img
              src={ellipse2}
              alt="get started image"
              className="absolut bottom-0 right-0"
            />
            <img
              src={retangle3}
              alt="get started image"
              className="absolut bottom-0 right-0"
            />
            <img
              src={ellipse3}
              alt="get started image"
              className="absolut bottom-0 right-0"
            />
          </div>

          <div className="flex items-center justify-end relative">
            <img
              src={ellipse3}
              alt="get started image"
              className="absolut bottom-0 right-0"
            />
            <img
              src={retangle1}
              alt="get started image"
              className="absolut bottom-0 right-0"
            />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default GetStarted;
