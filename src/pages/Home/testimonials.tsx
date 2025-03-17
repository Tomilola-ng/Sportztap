import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-12 md:py-24 bg-muted/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              What People Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from players, coaches, and scouts who have used our platform.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
        >
          {[
            {
              name: "Chidera Eze",
              role: "Player",
              quote:
                "SportzTap gave me the visibility I needed. I was scouted by a professional club after just two months on the platform.",
            },
            {
              name: "Coach Adebayo",
              role: "Youth Coach",
              quote:
                "The mental wellness resources have been invaluable for my team. I've seen significant improvements in their performance and resilience.",
            },
            {
              name: "Sarah Johnson",
              role: "Scout",
              quote:
                "As a scout, SportzTap has made it easier to discover and evaluate talent across Nigeria, even in remote areas.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6 space-y-4">
                  <motion.div
                    className="flex justify-center"
                    variants={avatarVariants}
                  >
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=64&width=64&text=${testimonial.name.charAt(
                          0
                        )}`}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="flex justify-center">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <motion.div key={star} custom={i} variants={starVariants}>
                        <StarIcon className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    className="text-muted-foreground"
                    variants={quoteVariants}
                  >
                    "{testimonial.quote}"
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
