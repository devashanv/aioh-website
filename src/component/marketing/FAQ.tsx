import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const customAccordion = {
  root: {
    base: "",
    flush: {
      off: "",
      on: "",
    },
  },
  content: {
    base: "",
  },
  title: {
    arrow: {
      base: "",
      open: {
        off: "",
        on: "",
      },
    },
    base: "",
    flush: {
      off: "focus:ring-0",
      on: "",
    },
    heading: "",
    open: {
      off: "",
      on: "bg-gray-100",
    },
  },
};

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
        <Accordion
          theme={customAccordion}
          className="flex flex-col gap-4 border-0"
        >
          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Why should I hire you?
              </AccordionTitle>
              <AccordionContent>
                <p className="mt-2 space-y-1 text-base md:text-lg font-light">
                  If any of these sound familiar, we can help:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1 text-base md:text-lg font-light">
                  {[
                    "Website visitors aren't becoming customers",
                    "Can't reach new audiences beyond word-of-mouth",
                    "Spending on ads but seeing little return",
                    "Website looks outdated compared to competitors",
                    "Great business, but invisible on Google",
                    "Competitors dominating social media while you're forgotten",
                    "Content getting zero engagement",
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="mt-2 space-y-1 text-base md:text-lg font-light">
                  We're really good at solving these problems. Check out our
                  case studies to see how we've helped businesses like yours.
                </p>
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                How do you get started?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                We dive deep first. We research your brand, market, customers,
                and competitors—plus analyze all your current business data.
                This takes 2-4 weeks. Then we show you exactly what's missing
                and what to do next. Nothing starts without your approval.,
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                I'm unsure what I need. How do I get started?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Totally normal! Many clients feel this way. Schedule a free
                consultation call with our team. We'll chat about your business
                and figure out the best path forward together—no pressure, just
                honest advice.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                What service should I use at my stage?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                We get it—digital marketing can be overwhelming. Let us explore
                your business and create a custom plan with short-term wins and
                long-term success. Book a free call and we'll guide you step by
                step.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Do I need all these services, or can I start small?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Start small! Most clients begin with one or two services based
                on their biggest pain point. As you see results, we can add
                more. No need to do everything at once.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                What are the payment commitments?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                We offer short-term project engagements and monthly retainers
                for ongoing work. Retainers require monthly commitments. Exact
                pricing depends on your project scope—let's discuss on a
                discovery call.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                How much should I spend on advertising?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                It depends on your goals and industry. Before any campaign, we
                sit down with you (in-person or video) to understand your needs
                and recommend a realistic budget that makes sense for your
                business.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Why hire an agency instead of building an in-house team?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                You get an entire expert team for less than hiring one full-time
                employee. We bring years of experience solving problems across
                industries and countries. Plus, no hiring headaches, training
                costs, or worrying about staff turnover.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                What if I've tried marketing before and it didn't work?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                That's exactly why we do deep research first. Many businesses
                fail because they use generic strategies. We create tailored
                solutions based on YOUR specific business, customers, and goals
                —not cookie-cutter templates.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                How long until I see results?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Some things work fast (like paid ads), others take time (like
                SEO). We always aim for quick wins in the first 30-60 days while
                building your long-term growth foundation. We'll set realistic
                expectations from day one.
              </AccordionContent>
            </div>
          </AccordionPanel>

          <AccordionPanel>
            <div className="border border-gray-200 rounded-xl">
              <AccordionTitle className="accordion-title text-lg md:text-xl font-semibold rounded-t-xl">
                Do you work with businesses in my industry?
              </AccordionTitle>
              <AccordionContent className="mt-2 space-y-1 text-base md:text-lg font-light">
                Yes! We work with e-commerce, healthcare, real estate,
                professional services, manufacturing, and more. Every industry
                is different, and we customize our approach to fit yours.
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
