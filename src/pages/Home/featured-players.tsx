import { Link } from "react-router";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { NigerianPlayers } from "@/data/players";
import PlayerCard from "@/components/card/player";

export default function FeaturedPlayers() {
  const [featuredPlayers, setFeaturedPlayers] = useState<_player[]>([]);

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

  useEffect(() => {
    setFeaturedPlayers(NigerianPlayers.slice(0, 3));
  }, []);

  return (
    <section className="py-12 md:py-24 bg-white dark:bg-background">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={containerVariants}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-600 to-primary dark:from-green-400 dark:to-blue-500 bg-clip-text text-transparent">
              Featured Players
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover some of the talented footballers on our platform.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
        >
          {featuredPlayers.map((player) => (
            <PlayerCard player={player} key={player.id} />
          ))}
        </motion.div>

        <div className="flex justify-center mt-8">
          <Link to="/scouting">
            <Button size="lg">
              View All Players <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
