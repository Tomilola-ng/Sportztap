import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function PlayerCard({ player }: { player: _player }) {
  const navigate = useNavigate();
  const handlePlayerClick = (playerId: string) => {
    navigate(`/player/${playerId}`);
  };
  // Calculate average rating
  const getAverageRating = (player: _player) => {
    const ratings = [
      player.visionRating,
      player.ballControl,
      player.aggression,
      player.passingAccuracy,
      player.finishing,
      player.tacticalAwareness,
    ];
    return Math.round(ratings.reduce((a, b) => a + b, 0) / ratings.length);
  };

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      key={player.id}
      onClick={() => handlePlayerClick(player.id)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      variants={itemVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative h-48 bg-gray-200">
        {player.profilePicture ? (
          <img
            src={player.profilePicture || "/placeholder.svg"}
            alt={`${player.firstName} ${player.lastName}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800 text-2xl font-bold">
            {player.firstName.charAt(0)}
            {player.lastName.charAt(0)}
          </div>
        )}
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-sm font-semibold">
          {player.primaryPosition}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold">
            {player.firstName} {player.lastName}
          </h2>
          <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
            <StarIcon />
            <span className="ml-1">{getAverageRating(player)}</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          {player.age} years • {player.height}cm • {player.weight}
          kg
        </div>
        <div className="text-sm text-gray-600 mb-3">
          {player.address?.city}, {player.address?.state}
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-gray-100 p-2 rounded text-center">
            <div className="font-semibold">{player.matchesPlayed}</div>
            <div className="text-gray-500">Matches</div>
          </div>
          <div className="bg-gray-100 p-2 rounded text-center">
            <div className="font-semibold">{player.goalsScored}</div>
            <div className="text-gray-500">Goals</div>
          </div>
          <div className="bg-gray-100 p-2 rounded text-center">
            <div className="font-semibold">{player.assists}</div>
            <div className="text-gray-500">Assists</div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <div className="text-xs font-medium text-gray-500">
          {player.dominantFoot} foot
        </div>
        <div className="text-xs font-medium text-blue-600">View Details</div>
      </div>
    </motion.div>
  );
}
