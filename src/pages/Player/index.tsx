import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NigerianPlayers } from "@/data/players";
import Header from "@/components/reusable/Header";

export default function PlayerDetailPage() {
  const { playerId } = useParams<{ playerId: string }>();
  const navigate = useNavigate();
  const [player, setPlayer] = useState<_player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundPlayer = NigerianPlayers.find((p) => p.id === playerId);
      setPlayer(foundPlayer || null);
      setLoading(false);
    }, 500);
  }, [playerId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading player details...</p>
        </div>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Player Not Found</h2>
          <p className="text-gray-600 mb-6">
            The player you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/scouting")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Scouting
          </button>
        </div>
      </div>
    );
  }

  return (
    <main role="main">
      <Header />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate("/scouting")}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
          <span className="ml-2">Back to Scouting</span>
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 p-6 flex flex-col items-center">
              {player.profilePicture ? (
                <img
                  src={player.profilePicture || "/placeholder.svg"}
                  alt={`${player.firstName} ${player.lastName}`}
                  className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md"
                />
              ) : (
                <div className="w-48 h-48 rounded-full bg-blue-100 text-blue-800 text-4xl font-bold flex items-center justify-center border-4 border-white shadow-md">
                  {player.firstName.charAt(0)}
                  {player.lastName.charAt(0)}
                </div>
              )}
              <h1 className="text-2xl font-bold mt-4 text-center">
                {player.firstName} {player.lastName}
              </h1>
              <div className="text-gray-600 text-center mt-1">
                {player.primaryPosition}
              </div>
              <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {player.age} years old
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Height</div>
                  <div className="font-semibold">{player.height} cm</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Weight</div>
                  <div className="font-semibold">{player.weight} kg</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Foot</div>
                  <div className="font-semibold">{player.dominantFoot}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600 text-sm">Work Rate</div>
                  <div className="font-semibold">{player.workRate}</div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-6">
              <h2 className="text-xl font-bold mb-4">Player Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Personal Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nationality:</span>
                      <span>{player.nationality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gender:</span>
                      <span>{player.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span>
                        {player.address?.city}, {player.address?.state}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Performance Stats
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Matches:</span>
                      <span>{player.matchesPlayed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Goals:</span>
                      <span>{player.goalsScored}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Assists:</span>
                      <span>{player.assists}</span>
                    </div>
                    {player.cleanSheets !== undefined && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Clean Sheets:</span>
                        <span>{player.cleanSheets}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-gray-700 mt-6 mb-3">
                Scouting Attributes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Vision", value: player.visionRating },
                  { label: "Ball Control", value: player.ballControl },
                  { label: "Aggression", value: player.aggression },
                  { label: "Passing", value: player.passingAccuracy },
                  { label: "Finishing", value: player.finishing },
                  {
                    label: "Tactical Awareness",
                    value: player.tacticalAwareness,
                  },
                ].map((attr, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">{attr.label}</div>
                    <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${attr.value}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-right text-xs font-medium">
                      {attr.value}/100
                    </div>
                  </div>
                ))}
              </div>

              {player.participationInWellnessPrograms &&
                player.participationInWellnessPrograms.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Wellness Programs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {player.participationInWellnessPrograms.map(
                        (program, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {program}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
