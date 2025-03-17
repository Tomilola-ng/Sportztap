import { CheckCircle2Icon } from "lucide-react";
import { motion } from "motion/react";

export default function ProblemsBenefits() {
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
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-gray-900">
      {/* Aurora background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -inset-[10%] opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full bg-green-300 dark:bg-green-600 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 rounded-full bg-blue-300 dark:bg-blue-600 blur-[100px]" />
        </motion.div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              The Challenge
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Young Nigerian Athletes face numerous challenges that hinder their
              progression in becoming amateur or professional footballers.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="mx-auto overflow-hidden rounded-xl w-full"
            variants={itemVariants}
          >
            <motion.img
              src="/football-boys.jpeg"
              width={400}
              height={400}
              alt="Football challenges"
              className="object-cover object-center sm:w-full rounded-xl border border-muted/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={containerVariants}
          >
            <motion.div
              className="p-4 rounded-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-muted/20 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold text-primary">
                Lack of Visibility
              </h3>
              <p className="text-muted-foreground text-wrap max-w-96">
                Limited exposure to scouts and professional clubs, especially
                for talents in rural areas.
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-muted/20 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold text-primary">
                Mental Health Challenges
              </h3>
              <p className="text-muted-foreground">
                Insufficient awareness and support for mental wellness in sports
                development.
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-muted/20 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold text-primary">
                Data Limitations
              </h3>
              <p className="text-muted-foreground">
                Lack of accurate performance metrics and player progression
                tracking.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mt-16">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-600 to-primary dark:from-green-400 dark:to-blue-500 bg-clip-text text-transparent">
                Our Solution
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SportzTap bridges these gaps with a comprehensive platform that
                addresses both talent visibility and mental wellness.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-6 mt-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="p-6 space-y-3 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-100/50 dark:border-blue-900/30 shadow-md"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <CheckCircle2Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Talent Showcase</h3>
              </div>
              <p className="text-muted-foreground">
                A platform for players to display their skills and connect with
                scouts and clubs.
              </p>
            </motion.div>

            <motion.div
              className="p-6 space-y-3 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-green-100/50 dark:border-green-900/30 shadow-md"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/50">
                  <CheckCircle2Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Mental Wellness</h3>
              </div>
              <p className="text-muted-foreground">
                Resources and support for mental health awareness and
                psychological resilience.
              </p>
            </motion.div>

            <motion.div
              className="p-6 space-y-3 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-purple-100/50 dark:border-purple-900/30 shadow-md"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/50">
                  <CheckCircle2Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Data Analytics</h3>
              </div>
              <p className="text-muted-foreground">
                Comprehensive metrics and performance tracking for informed
                decision-making.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
