import Header from "../../../components/layout/Header"
import { Button } from "../../../components/ui/button";
import searchIcon from "../../../assets/icons/search-01.svg";
import mapLocation from "../../../assets/icons/map-location.svg";
import  person1 from "../../../assets/images/person1.svg";
import  person2 from "../../../assets/images/person2.svg";
import  person3 from "../../../assets/images/person3.svg";
import imageBg from "../../../assets/images/Basemap image.svg";
import { cn } from "@/lib/utils";


const mapLocationPin = (className: string) => (
  <div className={cn(className,"absolute md:h-17.5 md:w-17.5 w-[49.12px] h-[49.12px] bg-white rounded-full flex items-center justify-center shadow-lg")}>
    <img src={mapLocation} alt="map location" className="" />
  </div>
);
const reviews = [
  {
    image:person1,
  },
  {
    image:person2,
  },
  {
    image:person3,
  }
]

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-[#F8F7F7]">
      <Header />

      <div className="max_width  h-full flex-wrp items-stretch flex overflo-hidden flex-col md:flex-row">
        <div className="space-y-7 h-full flex my-auto items-start flex-col justify-center max-w-[721px]">
          {/* Header */}
          <div className="text-left">
            <p className="text-accent text-center md:text-left text-sm md:text-xl mb-5">
              #1 FAST DELIVERY APP
            </p>

            {/* Main Headline */}
            <h1 className="md:text-[64px] text-center md:text-left text-[40px] md:text-6xl font-bold text-black mb-4 leading-[85px]">
              Smarter & Effortless
              <span className="text-accent">Delivery </span>
              Starts Here
            </h1>

            {/* Description */}
            <p className="text-primary-foreground text-center md:text-left text-base md:text-xl leading-[26px]">
              Find the Box2Box lockers nearest to you and get your items
              delivered fast, track your delivery in real time, and pick up your
              package whenever it's convenient.
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-[#CBCDCD]/20 rounded-[12px] p-[12px] w-full">
            <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-between">
              <div className="relative flex-1 w-full flex items-start gap-3.5 justify-start">
                <img
                  src={searchIcon}
                  alt="search icon"
                  className="sm:w-8 sm:h-8 h-[13.5px] w-[13.5px]"
                />
                <div className="flex items-start flex-col w-full">
                  <p className="md:text-lg text-base font-medium text-[#35393B]">
                    Enter your location
                  </p>
                  <input
                    type="text"
                    placeholder=" eg: St. John Junction, Awka"
                    className="w-full text-lg outline-none border-none"
                  />
                </div>
              </div>
              <Button className="font-semibold text-lg rounded-[12px] h-[65px] md-[80px] max-w-[179px]">
                Find a box
              </Button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="flex items-center justify-center gap-4">
            {/* Profile Images */}
            <div className="flex -space-x-10">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="md:w-[75px] md:h-[75px] w-[30px] h-[30px] rounded-full border-5 border-white flex items-center justify-center"
                >
                  <img src={review.image} alt="review image" />
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center justify-start w-full gap-2">
              {/* <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> */}
              <span className="font-medium text-sm md:text-lg text-primary-foreground">
                4.5
              </span>
              <span className="font-semibold text-sm md:text-lg">|</span>
              <span className="text-secondary-foreground text-sm md:text-lg">
                50+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="relative left-[100px] overflow-x-hidden -ml-[100px] botom-[100px] z-0">
          {mapLocationPin("left-[22%]")}
          {mapLocationPin("right-[25%] top-[12%]")}
          {mapLocationPin("right-[33%] top-[49%]")}
          {mapLocationPin("left-[12%] top-[62%]")}
          {mapLocationPin("right-[37%] top-[83%]")}
          <img
            src={imageBg}
            className="h-[882px] w-[1490px] object-"
            alt="image bg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero