import circleCheckIcon from "../../../assets/icons/circleCheckIcon.svg";
import locationIcon from "../../../assets/icons/locationIcon.svg";
import guardCheckIcon from "../../../assets/icons/guardCheckIcon.svg";
import communityIcon from "../../../assets/icons/community_icon.svg";
import platformIcon from "../../../assets/icons/platform_icon.svg";
import notificationicon from "../../../assets/icons/notification-bing.svg";
const WhyUs = () => {
  const whychooseus = [
    {
      image: circleCheckIcon,
      label: "Easy to Use",
      desc: "Our platform is designed to be straightforward for everyone — no complicated steps. Just book a box, drop or pick up, and you’re done.",
    },
    {
      image: locationIcon,
      label: "Always Nearby",
      desc: "With boxes located in everyday places — malls, salons, shops, and estates, there's always one within reach.",
    },
    {
      image: notificationicon,
      label: "No Missed Deliveries",
      desc: "You don’t have to wait for a rider. Items stay secure in the box until you're ready to pick them up.",
    },
    {
      image: guardCheckIcon,
      label: "Safe And Private",
      desc: "Your parcels are locked away securely. Only you (or the receiver) can open the box using the unique access code.",
    },
    {
      image: communityIcon,
      label: "Support For Commuties",
      desc: "Anybody can be a box owner. Box2Box has boxes ranging from one to forty cabinets.",
    },
    {
      image: platformIcon,
      label: "One Platform",
      desc: "From food to errands, laundry, medication, and packages — Box2Box connects you to trusted vendors and a reliable pickup system in one place.",
    },
  ];

  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <div className="flex items-center justify-center gap-2.5 flex-col">
          <p className="text-sm md:text-lg text-accent">WHY BOX2BOX?</p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            One Platform. Endless Possibilities.
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            Box2Box is more than just storage or delivery — it's a smarter, more
            flexible way to move your life. We connect you to secure smart
            boxes, reliable riders, and trusted vendors across Nigeria — all in
            one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] items-center basis-1/3 flex-wrap justify-center w-full gap-5">
          {whychooseus.map((reason, index) => (
            <div
              key={index}
              className="flex border rounded-[12px] md:py-[33.7px] py-[30.23px] md:px-[28.1px] px-[25.19px] flex-1 flex-col items-start justify-center md:gap-5 gap-[16.8px] bg-[#CBCDCD]/20"
            >
              <img
                src={reason.image}
                alt={reason.label + "image"}
                className="w-7 h-7 md:h-8 md:w-8"
              />
              <p className="md:text-[30px] whitespace-nowrap text-primary-foreground text-[22px]">
                {reason.label}
              </p>
              <p className="md:text-[20px] text-left text-[#7B858A] text-[14px]">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
