import person1 from "../../../assets/images/person1.svg";
import person2 from "../../../assets/images/person2.svg";
import person3 from "../../../assets/images/person3.svg";
import quotes from "../../../assets/icons/quotation.svg";
import Animate from "@/components/animation/animate";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Tunde O.",
      desc: "Box Owner",
      image: person3,
      testimony:
        "I installed my first box outside my car wash. In less than 2 months, I already started seeing returns. Zero stress, and Box2Box handles everything.",
    },
    {
      name: "Emeka N.",
      desc: "Box Owner",
      image: person1,
      testimony:
        "With Box2Box, I choose when to work. The app gives me clear instructions and no stress of waiting at gates or arguing with security.",
    },
    {
      name: "Ngozi C.",
      desc: "Box Owner",
      image: person2,
      testimony:
        "I ordered food from Chowbox during lunch break. It was delivered to a box near my office. No stress, no need to meet any rider.",
    },
    {
      name: "Tunde O.",
      desc: "Box Owner",
      image: person3,
      testimony:
        "I installed my first box outside my car wash. In less than 2 months, I already started seeing returns. Zero stress, and Box2Box handles everything.",
    },
    {
      name: "Emeka N.",
      desc: "Box Owner",
      image: person1,
      testimony:
        "With Box2Box, I choose when to work. The app gives me clear instructions and no stress of waiting at gates or arguing with security.",
    },
    {
      name: "Ngozi C.",
      desc: "Box Owner",
      image: person2,
      testimony:
        "I ordered food from Chowbox during lunch break. It was delivered to a box near my office. No stress, no need to meet any rider.",
    },
  ];

  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <Animate className="flex items-center justify-center gap-2.5 flex-col">
          <p className="text-sm md:text-lg text-accent">TESTIMONIALS </p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            Real Stories. Real Impact.
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            From business owners to delivery riders and everyday users, Box2Box
            is changing how users store, send, and receive. Hear what our
            growing community has to say about earning, delivering, and living
            smarter with Box2Box.
          </p>
        </Animate>

        <div className="flex-col overflow-clip">
          <div className="space-y-5 overflow-hidden">
            <div className="flex gap-5 testimonials-animation justify-end items-center w-[calc(280px * 6)] md:w-[calc(460px*6)]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex bg-[#cbcdcd]/20 flex-col items-start py-6.5 px-5 box-border gap-2.5 rounded-[12px] border min-w-[260px] max-w-[260px] md:max-w-[440px] flex-1 md:min-w-[440px]"
                >
                  <img src={quotes} alt="quotes" />
                  <p className="text-base text-left md:text-[22px] text-secondary-foreground dark:text-[#DFE5E8]">
                    {testimonial.testimony}
                  </p>
                  <div className="flex gap-2.5">
                    <img
                      src={testimonial.image}
                      alt="peron image"
                      className="md:max-w-[63px] md:max-h-[63px] max-h-10 max--10"
                    />
                    <div className="flex flex-col">
                      <p className="text-[19px] md:text-[22px] font-medium text-primary-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[17px] md:text-lg">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex bg-[#cbcdcd]/20 flex-col items-start py-6.5 px-5 gap-2.5 rounded-[12px] p-5 border flex-1 min-w-[440px]"
                >
                  <img src={quotes} alt="quotes" />
                  <p className="text-base text-left md:text-[22px] text-secondary-foreground dark:text-[#DFE5E8]">
                    {testimonial.testimony}
                  </p>
                  <div className="flex gap-2.5">
                    <img
                      src={testimonial.image}
                      alt="peron image"
                      className="md:max-w-[63px] md:max-h-[63px] max-h-10 max--10"
                    />
                    <div className="flex flex-col">
                      <p className="text-[19px] md:text-[22px] font-medium text-primary-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[17px] md:text-lg">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-5 testimonials-animation-invert justify-start items-center w-[calc(280px * 6)] md:w-[calc(460px*6)]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex bg-[#cbcdcd]/20 flex-col items-start py-6.5 px-5 box-border gap-2.5 rounded-[12px] border min-w-[260px] max-w-[260px] md:max-w-[440px] flex-1 md:min-w-[440px]"
                >
                  <img src={quotes} alt="quotes" />
                  <p className="text-base text-left md:text-[22px] text-secondary-foreground dark:text-[#DFE5E8]">
                    {testimonial.testimony}
                  </p>
                  <div className="flex gap-2.5">
                    <img
                      src={testimonial.image}
                      alt="peron image"
                      className="md:max-w-[63px] md:max-h-[63px] max-h-10 max--10"
                    />
                    <div className="flex flex-col">
                      <p className="text-[19px] md:text-[22px] font-medium text-primary-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[17px] md:text-lg">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex bg-[#cbcdcd]/20 flex-col items-start py-6.5 px-5 gap-2.5 rounded-[12px] p-5 border flex-1 min-w-[440px]"
                >
                  <img src={quotes} alt="quotes" />
                  <p className="text-base text-left md:text-[22px] text-secondary-foreground dark:text-[#DFE5E8]">
                    {testimonial.testimony}
                  </p>
                  <div className="flex gap-2.5">
                    <img
                      src={testimonial.image}
                      alt="peron image"
                      className="md:max-w-[63px] md:max-h-[63px] max-h-10 max--10"
                    />
                    <div className="flex flex-col">
                      <p className="text-[19px] md:text-[22px] font-medium text-primary-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[17px] md:text-lg">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
