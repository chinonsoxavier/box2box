import womanImage from "../../../assets/images/black-woman.svg";
import arrowRightWhite from "../../../assets/icons/arrow-up-white.svg";
import arrowRightBlack from "../../../assets/icons/arrowBlackIcon.svg";
import arrowUpBlack from "../../../assets/icons/arrow up black.svg";
import Animate from "@/components/animation/animate";
import { useTheme } from "@/hooks/useTheme";
const OwnABox = () => {
    const {theme}= useTheme();
  const data = [
    {
      label: "Turn Spare Time Into Smart Income",
      desc: "Whether you're a student, artisan, or part-time worker, owning a box lets you earn passively without changing your routine.",
      color: "#053F44",
      dark: "#121314",
      darkText: "#EFF2F3",
    },
    { label: "Support Deliveries in Your Area", color: "#121314" },
    {
      label: "No Shop? You Have No Problem.",
      desc: "Even if you don’t run a business, you can own a box. It’s a smart, simple way to join the logistics network around you.",
      color: "#06545B",
    },
    { label: "Add a Box to Your Own Business", color: "#FFDD5F" },
  ];

  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <Animate className="flex items-center justify-center gap-2.5 flex-col">
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
        </Animate>

        <div className="flex items-center flex-col smedium:flex-row gap-10 justify-center">
          <Animate className="flex-1 sm:min-w-[430px] max-w-[647px]">
            <img src={womanImage} alt="" className="rounded-[50px]" />
          </Animate>
          <div className="grid smedium:hidden grid-cols-1 xxs:grid-cols-2 auto-row-[170px] gap-">
            {data.map((item, index) => (
              <Animate
                style={{
                  backgroundColor: 'red',
                  color:
                    theme === "dark"
                      ? item.darkText
                      : item.color !== "#FFDD5F"
                      ? "#EFF2F3"
                      : "#121314",
                }}
                key={index}
                className={`
        ${index === 0 || index === 2 ? "row-span-2" : "row-span-1"}
        rounded-[21.33px]  bg-[${item.color}] px-[21.3px] pt-[21.3px] pb-[32px] 
        flex flex-col items-start justify-between gap-3
        m-2 sm:min-w-[230px]
      `}
              >
                <div className="flex items-center justify-between">
                  <p className="md:text-[34.67px] font-semibold text-left text-[20px]">
                    {item.label}
                  </p>
                  {!(index + 1 === 1 || index === 2) && (
                    <img
                      src={
                        item.color !== "#FFDD5F"
                          ? arrowRightWhite
                          : arrowUpBlack
                      }
                      alt=""
                      className="max-w-[20.83px] w-full max-h-[20px]"
                    />
                  )}
                </div>

                {item.desc && (
                  <p className="text-sm text-[#EFF2F3] text-left">
                    {item.desc}
                  </p>
                )}
                {(index + 1 === 1 || index === 2) && (
                  <div className="flex items-center sm:gap-2 max-w-[160px] justify-between">
                    <p className="whitespace-nowrap text-sm">Become an Owner</p>

                    <img
                      src={
                        item.color !== "#FFDD5F"
                          ? arrowRightWhite
                          : arrowRightBlack
                      }
                      alt=""
                      className="max-w-[20.83px] max-h-[20px]"
                    />
                  </div>
                )}
              </Animate>
            ))}
          </div>

          <div className="smedium:grid hidden grid-cols-1 xlarge:grid-cols-2 flex-1">
            {data.map((item, index) => (
              <Animate
                style={{
                  backgroundColor: theme === "dark" ? item.dark : item.color,
                  color:
                    theme === "dark"
                      ? item.darkText
                      : item.color !== "#FFDD5F"
                      ? "#EFF2F3"
                      : "#121314",
                }}
                key={index}
                className={`
        ${index === 0 || index === 2 ? "row-span-2" : "row-span-1"}
        rounded-[21.33px] px-[21.3px] pt-[21.3px] pb-[32px] 
        flex flex-col items-start justify-between gap-3
        m-2 sm:min-w-[230px]
      `}
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
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default OwnABox;
