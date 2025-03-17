import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-600 to-primary dark:from-green-400 dark:to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about SportzTap.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does the scouting process work?",
                answer:
                  "Scouts and club representatives can browse player profiles, filter by specific criteria, and contact players directly through the platform. We verify all scout accounts to ensure legitimacy.",
              },
              {
                question: "What mental wellness resources are available?",
                answer:
                  "Our Wellness Hub offers articles, videos, podcasts, and webinars on various mental health topics. We also provide access to mental health professionals for consultations.",
              },
              {
                question: "How does SportzTap protect player data?",
                answer:
                  "We take data privacy seriously and comply with data protection regulations. Player data is securely stored and only shared with verified scouts and clubs with player consent.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
