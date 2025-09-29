import Animate from "@/components/animation/animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faqs = () => {    
  const faqs = [
    {
      title: "What is Box2Box and how does it work?",
      description:
        "Box2Box is a smart delivery platform that lets you store or deliver items using secure pickup points across Nigeria. Choose a service, select a box, pay, and you're good to go!",
    },
    {
      title: "Can I use Box2Box to send items to someone else?",
      description:
        "Yes! Just choose the Box2Box delivery option, select the recipient’s nearest box, and they’ll get a code to pick it up — no face-to-face required.",
    },
    {
      title: "How do I know which box size to choose?",
      description:
        "We offer various cabinet sizes to fit different items. When booking, you can see the dimensions of each box to help you pick the right one for your item.",
    },
    {
      title: "Can I pick up my item anytime?",
      description: "",
    },
    {
      title: "How much does it cost to use a box?",
      description:
        "Prices vary based on box size, duration, and location. You’ll see the total cost before confirming your order.",
    },
    {
      title: "I want to become a Box2Box rider. How do I start?",
      description: "",
    },
    {
      title: "How do I earn as a Box owner?",
      description:
        "You earn each time a box in your location is used. Box2Box handles installation, support, and maintenance — you just provide the space.",
    },
    {
      title: "What happens if someone doesn’t pick up their item?",
      description: "",
    },
    {
      title: "Can I track my delivery?",
      description:
        "Yes! You can track your item in real time from sender to box (or doorstep), using the Box2Box app.",
    },
  ];

  return (
    <section className="py-10 sm:py-15 overflow-x-clip">
      <div className="max_width text-center flex items-center justify-center gap-10 flex-col">
        <Animate className="flex items-center justify-center gap-2.5 flex-col">
          <p className="text-sm md:text-lg text-accent">FAQ</p>

          <h3 className="text-[28px] font-semibold md:text-[40px] text-primary-foreground">
            Frequently Asked Questions
          </h3>

          <p className="text-sm md:text-[20px] max-w-[907px] text-secondary-foreground">
            Got questions? We’ve got answers. Whether you’re storing, sending,
            riding, or owning a box, here’s everything you need to know about
            how Box2Box works.
          </p>
        </Animate>
        <div className="flex items-stretch w-full mt-5 gap-7.5 flex-wrap justify-evenly">
          {faqs.map((faq, index) => (
            <Animate className="w-full" >
              <Accordion key={index} type="multiple" className="w-full">
                <AccordionItem
                  value={`item-${index}`}
                  className="w-full border-[#909090]"
                >
                  <AccordionTrigger className="py-4 md:text-[28px] text-sm text-primary-foreground font-bold text-left w-full flex justify-between items-center">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="md:text-[22px] text-left text-sm text-[#7B858A]">
                    {faq.description || "Answer coming soon..."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
