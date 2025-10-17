import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto py-4 md:py-6 lg:py-12 text-secondary w-5/6 md:w-11/12">
      {/* sec heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center w-2/3 lg:w-full"
        >
          Frequently Asked Questions
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-3/4 lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center"
        >
          We follow a focused, collaborative process from strategic discovery to
          agile execution ensuring clarity, quality, and impact at every stage.
        </motion.p> */}
      </motion.div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="py-6 md:py-10"
      >
        <Accordion className="flex flex-col gap-4 border-0">
          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Why should I hire you for design?
              </AccordionTitle>
              <AccordionContent>
                <p className="mt-2 space-y-1 text-base md:text-lg font-light">
                  If any of this sounds familiar, we can help:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1 text-base md:text-lg font-light">
                  {[
                    "Your website or marketing materials look unprofessional compared to competitors",
                    "Brand identity is confusing or forgettable",
                    "Packaging or promotional materials aren't driving sales",
                    "Social media graphics look amateur and get no engagement",
                    "You have great products but they're not visually representing your quality",
                    "Content looks outdated or poorly designed",
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-2 space-y-1 text-base md:text-lg font-light">
                  We're really good at solving these problems. Check out our
                  design portfolio to see how we've helped businesses like yours
                  stand out.
                </p>
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                How do you get started with design? We dive deep first
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                We understand your brand, market, customers, and what your
                competitors are doing visually. We analyze your current design
                assets and goals. Then we present design concepts and get your
                feedback. Nothing gets finalized without your approval.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                I'm unsure what design I actually need. Where do I start?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Totally normal! Many clients aren't sure if they need a rebrand,
                new packaging, or just better social media graphics. Schedule a
                free consultation call with our team. We'll review your business
                and recommend exactly which design solutions will make the
                biggest impact.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                What are the payment commitments?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                We offer project-based design work and ongoing design retainers.
                Project pricing depends on scope and complexity. Retainers are
                for ongoing needs like social media graphics or website updates.
                Exact pricing comes after we understand your project—let's
                discuss on a discovery call.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                How long does design work take?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                It depends on the project. A logo redesign might take 2-3 weeks.
                Full brand identity can take 4-6 weeks. Website design takes 6-8
                weeks. We always give you realistic timelines upfront so you
                know what to expect.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Why hire a design agency instead of doing it yourself or using
                templates?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Custom design is tailored to YOUR business and customers.
                Generic templates make you look generic. A professional agency
                brings years of design experience, industry knowledge, and
                creative expertise. Plus, we handle all the work while you focus
                on running your business.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                How do I know the design will actually work for my business?{" "}
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                We call it design iteration. We don't just show you concepts and
                hope they work—we test them. We put your design in front of real
                people from your target audience to confirm the messaging lands
                exactly as intended. We gather feedback, refine, and iterate
                until it's perfect. Then we measure real results—website
                conversions go up, social engagement increases, customer
                feedback improves. Good design isn't about looking pretty. It's
                about delivering measurable business results.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Do you have 24/7 support?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Our support hours are 8:30am-5:30pm weekdays and 8:30am-1:30pm
                Saturdays (GMT +5:30). Critical red alerts are monitored 24/7.
              </AccordionContent>
            </div>
          </AccordionPanel>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default FAQ;
