import logo from "../../assets/images/logo-black.svg";
import facebook from '../../assets/icons/faceIcon.svg';
import instagram from '../../assets/icons/instagramIcon.svg';
import twitter from '../../assets/icons/twitterIcon.svg';
import linkedIn from "../../assets/icons/linkedinIcon.svg";
import footerName from ".././../assets/images/footer name.svg"
import caretUp from "../../assets/icons/caret up.svg"
import Animate from "../animation/animate";
export function Footer() {
  return (
    <footer className=" py-12 center flex-col max_width">
      <Animate className="bg-[#CBCDCD]/20 py-[23px] md:py-17.5 max_width border rounded-[30px]">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Left section - Logo and description */}
          <div className="space-y-4 flex-2 md:px-6">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Box2Box Logo"
                className="h-[57.15px] w-auto"
              />
            </div>

            <p className="text-xs md:text-lg text-muted-foreground leading-relaxed max-w-sm">
              Box2Box connects people, products, and places through smart
              delivery and storage. From food to errands, we make pickup and
              drop-off simple, secure, and stress-free.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors"
              >
                <img src={facebook} alt="face book icon" />
              </a>
              <a
                href="#"
                className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors"
              >
                <img src={instagram} alt="intagram icon" />
              </a>
              <a
                href="#"
                className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors"
              >
                <img src={linkedIn} alt="linkedin icon" />
              </a>
              <a
                href="#"
                className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors"
              >
                <img src={twitter} alt="twitter icon" />
              </a>
            </div>
          </div>

          {/* Center section - Quick Links */}
          <div className="flex-1" >
            <div className="flex items-center justify-between">
              <h3 className="md:text-2xl text- font-semibold text-primary-foreground mb-4">
                Quick Links
              </h3>

              <img src={caretUp} alt="caret up" className="block md:hidden" />
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Owners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Riders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Box
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Box Runners
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Company */}
          <div className="flex-1" >
            <div className="flex items-center justify-between">
              <h3 className="md:text-2xl text- font-semibold text-primary-foreground mb-4">
                Company
              </h3>

              <img src={caretUp} alt="caret up" className="block md:hidden" />
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground md:text-lg hover:text-gray-800 transition-colors text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - Copyright and legal links */}
        <div className="border-t md:px-6 border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-xs md:text-lg">
            © 2025 Box2Box. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:muted-foreground/90 md:text-lg transition-colors text-xs underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:muted-foreground/90 md:text-lg transition-colors text-xs underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:muted-foreground/90 md:text-lg transition-colors text-xs underline"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </Animate>
      <Animate>
        <img src={footerName} alt="footer name" />
      </Animate>
    </footer>
  );
}
