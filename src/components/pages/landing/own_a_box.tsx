import womanImage from "../../../assets/images/black-woman.svg";
import arrowRightWhite from "../../../assets/icons/arrow-up-white.svg";
import arrowRightBlack from "../../../assets/icons/arrowBlackIcon.svg";
const OwnABox = () => {
  const data = [
    {
      label: "Turn Spare Time Into Smart Income",
      desc: "Whether you're a student, artisan, or part-time worker, owning a box lets you earn passively without changing your routine.",
      color: "#053F44",
    },
    { label: "Support Deliveries in Your Area", color: "#121314" },
    { label: "Add a Box to Your Own Business", color: "#FFDD5F" },
    {
      label: "No Shop? You Have No Problem.",
      desc: "Even if you don’t run a business, you can own a box. It’s a smart, simple way to join the logistics network around you.",
      color: "#06545B",
    },
  ];

  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <div className="flex items-center justify-center gap-2.5 flex-col">
          <p className="text-sm md:text-lg text-accent">
            OWN A BOX. MAKE AN IMPACT
          </p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            Become a Box Owner — It’s for Everyone
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            You don’t need a storefront or fancy setup to become a box owner.
            With Box2Box, individuals from all walks of life can manage a box,
            support deliveries in their area, and make logistics easier for
            their community.
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-10 justify-center">
          <div className="flex-1 max-w-[647px]">
            <img src={womanImage} alt="" className="rounded-[50px]" />
          </div>
          <div className="grid md:hidden grid-cols-2 grid-row-3">
            {data.map((item, index) => (
              <div
                style={{
                  backgroundColor: item.color,
                  color: item.color !== "#FFDD5F" ? "#EFF2F3" : "#121314",
                }}
                key={index}
                className={`${index+1 % 2 ? 'row-span-1' : 'row-span-2' } rounded-[21.33px] px-[21.3px] pt-[21.3px] pb-[32px] flex-1 flex-col items-start justify-center gap-5 bg-[${item.color}] m-2 min-w-[230px]`}
              >
                <p className="md:text-[34.67px] font-semibold text-left text-[20px]">
                  {item.label}
                </p>

                <p className="text-sm text-[#EFF2F3]">{item.desc}</p>
                {index + (1 % 2) && (
                  <div className="flex items-center justify-between">
                    <p>Become an Owner</p>

                    <img
                      src={
                        item.color !== "#FFDD5F"
                          ? arrowRightWhite
                          : arrowRightBlack
                      }
                      alt=""
                      className=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:flex hidden flex-1 items-center justify-center flex-wrap">
            {data.map((item, index) => (
              <div
                style={{
                  backgroundColor: item.color,
                  color: item.color !== "#FFDD5F" ? "#EFF2F3" : "#121314",
                }}
                key={index}
                className={`rounded-[21.33px] px-[21.3px] pt-[21.3px] pb-[32px] flex-1 flex-col items-start justify-center gap-5 bg-[${item.color}] m-2 min-w-[230px]`}
              >
                <p className="md:text-[34.67px] font-semibold text-left text-[20px]">
                  {item.label}
                </p>

                <div className="flex items-center justify-between">
                  <p>Become an Owner</p>

                  <img
                    src={
                      item.color !== "#FFDD5F"
                        ? arrowRightWhite
                        : arrowRightBlack
                    }
                    alt=""
                    className=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnABox;
