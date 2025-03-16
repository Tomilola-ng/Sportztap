import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Badge } from "lucide-react";
import { Badge as UIBadge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
      {/* Aurora background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -inset-[10%] opacity-30 dark:opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-purple-300 dark:bg-purple-600 blur-[80px]" />
          <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-blue-300 dark:bg-blue-600 blur-[60px]" />
          <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 rounded-full bg-green-300 dark:bg-green-500 blur-[70px]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-6 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <UIBadge className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 mb-2">
                    <Badge className="h-3.5 w-3.5 mr-1" />
                    Talent Development
                  </UIBadge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <UIBadge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800 mb-2">
                    <Badge className="h-3.5 w-3.5 mr-1" />
                    Mental Wellness
                  </UIBadge>
                </motion.div>
              </div>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Healthy Minds, Peak Performance
              </motion.h1>
              <motion.p
                className="text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Empowering grassroots football talents with scouting
                opportunities and mental wellness support.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/scouting">
                <Button size="lg" className="gap-1 w-full min-[400px]:w-auto">
                  Explore Talents <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/wellness-hub">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto"
                >
                  Wellness Resources
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative mx-auto lg:ml-auto max-w-md lg:max-w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-xl relative">
              <motion.img
                src="/hero-ball.png"
                width={550}
                height={550}
                alt="Football"
                className="mx-auto aspect-square object-cover"
                initial={{
                  scale: 0.5,
                  rotate: -15,
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  opacity: 1,
                }}
                whileInView={{
                  y: [0, -20, 0],
                }}
                viewport={{ once: false }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
