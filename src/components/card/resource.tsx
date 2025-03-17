import { useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  StarIcon,
  PlayCircle,
  FileText,
  Headphones,
  Sparkles,
} from "lucide-react";

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
          gradientFrom: "from-red-500",
          gradientTo: "to-orange-500",
          icon: <PlayCircle className="h-10 w-10 text-white opacity-80" />,
          fontFamily: "font-poppins",
        };
      case "Podcast": // Spotify
        return {
          bgColor: "bg-green-50 dark:bg-green-950/20",
          borderColor: "border-green-500/50",
          badgeBg: "bg-green-600 hover:bg-green-700",
          textColor: "text-green-700 dark:text-green-400",
          hoverBg: "hover:bg-green-100 dark:hover:bg-green-900/20",
          starColor: "text-green-500 fill-green-500",
          gradientFrom: "from-green-400",
          gradientTo: "to-emerald-500",
          icon: <Headphones className="h-10 w-10 text-white opacity-80" />,
          fontFamily: "font-oleoScript",
        };
      case "Article": // Medium
        return {
          bgColor: "bg-teal-50 dark:bg-teal-950/20",
          borderColor: "border-teal-500/50",
          badgeBg: "bg-teal-600 hover:bg-teal-700",
          textColor: "text-teal-700 dark:text-teal-400",
          hoverBg: "hover:bg-teal-100 dark:hover:bg-teal-900/20",
          starColor: "text-teal-500 fill-teal-500",
          gradientFrom: "from-teal-500",
          gradientTo: "to-cyan-400",
          icon: <FileText className="h-10 w-10 text-white opacity-80" />,
          fontFamily: "font-playfairDisplay",
        };
      default:
        return {
          bgColor: "bg-slate-50 dark:bg-slate-950/20",
          borderColor: "border-slate-500/50",
          badgeBg: "bg-slate-600 hover:bg-slate-700",
          textColor: "text-slate-700 dark:text-slate-400",
          hoverBg: "hover:bg-slate-100 dark:hover:bg-slate-900/20",
          starColor: "text-slate-500 fill-slate-500",
          gradientFrom: "from-slate-500",
          gradientTo: "to-slate-400",
          icon: <Sparkles className="h-10 w-10 text-white opacity-80" />,
          fontFamily: "font-lilitaOne",
        };
    }
  };

  // Generate a unique pattern based on the resource ID
  const getPatternStyle = (id: number) => {
    const patterns = [
      "bg-gradient-to-br", // diagonal
      "bg-gradient-to-r", // horizontal
      "bg-gradient-to-t", // vertical
      "bg-gradient-to-tr", // diagonal alternate
    ];

    const overlays = [
      "after:bg-opacity-20 after:bg-[radial-gradient(circle,_transparent_20%,_#fff_20%,_#fff_40%,_transparent_40%,_transparent_60%,_#fff_60%,_#fff_80%,_transparent_80%)] after:bg-slate-100 after:bg-[size:20px_20px]",
      "after:bg-opacity-20 after:bg-[linear-gradient(to_right,_#fff_1px,_transparent_1px),_linear-gradient(to_bottom,_#fff_1px,_transparent_1px)] after:bg-slate-100 after:bg-[size:20px_20px]",
      "after:bg-opacity-10 after:bg-[radial-gradient(#fff_1px,_transparent_1px)] after:bg-slate-100 after:bg-[size:16px_16px]",
      "after:bg-opacity-10 after:bg-[conic-gradient(at_top_right,_#fff,_transparent_120deg)] after:bg-slate-100",
    ];

    return {
      patternStyle: patterns[id % patterns.length],
      overlay: overlays[id % overlays.length],
    };
  };

  // Generate different text styles based on the resource title
  const getTitleStyle = (title: string) => {
    const titleLength = title.length;

    if (titleLength < 15) {
      return "text-2xl font-bold tracking-tight";
    } else if (titleLength < 25) {
      return "text-xl font-semibold tracking-normal";
    } else {
      return "text-lg font-medium tracking-tight";
    }
  };

  const styles = getTypeStyles();
  const pattern = getPatternStyle(resource.id);
  const titleStyle = getTitleStyle(resource.title);

  // Generate a unique number for each resource
  const uniqueValue = useMemo(() => {
    return ((resource.id * 13) % 100) / 100;
  }, [resource.id]);

  // Adjust the opacity based on the unique value
  const overlayOpacity = 0.1 + uniqueValue * 0.2;

  // Generate a unique layout based on the resource ID
  const getLayout = (id: number) => {
    const layouts = [
      "flex flex-col items-center justify-center", // centered
      "flex flex-col items-start justify-end", // bottom left
      "flex flex-col items-end justify-center", // center right
      "flex flex-col items-center justify-end", // bottom center
    ];

    return layouts[id % layouts.length];
  };

  const layout = getLayout(resource.id);

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
      <div className="relative h-48 overflow-hidden">
        {/* Generated dynamic image */}
        <div
          className={`absolute inset-0 ${pattern.patternStyle} ${
            styles.gradientFrom
          } ${styles.gradientTo} 
          after:content-[''] after:absolute after:inset-0 after:opacity-${Math.floor(
            overlayOpacity * 100
          )} ${pattern.overlay}`}
        />

        {/* Content overlay */}
        <div className={`absolute inset-0 p-4 ${layout}`}>
          {styles.icon}
          <span
            className={`${styles.fontFamily} text-white text-opacity-90 mt-2 font-bold px-2 py-1 bg-black bg-opacity-30 rounded`}
          >
            {resource.source}
          </span>
        </div>

        <div className="absolute top-2 right-2">
          <Badge className={`${styles.badgeBg}`} variant="default">
            {resource.type}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h2
          className={`${titleStyle} mb-2 ${styles.textColor} ${styles.fontFamily}`}
        >
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
