import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

export default function ResourceCard({ resource }: { resource: _resource }) {
  // Define styling based on resource type
  const getTypeStyles = () => {
    switch (resource.type) {
      case "Video": // YouTube
        return {
          bgColor: "bg-red-50 dark:bg-red-950/20",
          borderColor: "border-red-500/50",
          badgeBg: "bg-red-600 hover:bg-red-700",
          textColor: "text-red-700 dark:text-red-400",
          hoverBg: "hover:bg-red-100 dark:hover:bg-red-900/20",
          starColor: "text-red-500 fill-red-500",
        };
      case "Podcast": // Spotify
        return {
          bgColor: "bg-green-50 dark:bg-green-950/20",
          borderColor: "border-green-500/50",
          badgeBg: "bg-green-600 hover:bg-green-700",
          textColor: "text-green-700 dark:text-green-400",
          hoverBg: "hover:bg-green-100 dark:hover:bg-green-900/20",
          starColor: "text-green-500 fill-green-500",
        };
      case "Article": // Medium
        return {
          bgColor: "bg-teal-50 dark:bg-teal-950/20",
          borderColor: "border-teal-500/50",
          badgeBg: "bg-teal-600 hover:bg-teal-700",
          textColor: "text-teal-700 dark:text-teal-400",
          hoverBg: "hover:bg-teal-100 dark:hover:bg-teal-900/20",
          starColor: "text-teal-500 fill-teal-500",
        };
      default:
        return {
          bgColor: "bg-slate-50 dark:bg-slate-950/20",
          borderColor: "border-slate-500/50",
          badgeBg: "bg-slate-600 hover:bg-slate-700",
          textColor: "text-slate-700 dark:text-slate-400",
          hoverBg: "hover:bg-slate-100 dark:hover:bg-slate-900/20",
          starColor: "text-slate-500 fill-slate-500",
        };
    }
  };

  const styles = getTypeStyles();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.a
      key={resource.id}
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg shadow-md overflow-hidden border ${styles.borderColor} ${styles.bgColor} ${styles.hoverBg} hover:shadow-lg transition-all duration-300`}
      variants={itemVariants}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative h-48 bg-gray-200">
        <img
          src={resource.thumbnail || "/placeholder.svg"}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${styles.badgeBg}`} variant="default">
            {resource.type}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h2 className={`text-lg font-bold mb-2 ${styles.textColor}`}>
          {resource.title}
        </h2>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            {resource.source}
          </span>
          <div className="flex items-center gap-1">
            <StarIcon className={`h-4 w-4 ${styles.starColor}`} />
            <span className="text-sm font-medium">{resource.rating}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
