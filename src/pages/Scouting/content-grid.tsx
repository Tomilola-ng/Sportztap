import PlayerCard from "@/components/card/player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContentGrid({
  filteredPlayers,
  resetFilters,
  NigerianPlayerCount,
}: {
  filteredPlayers: _player[];
  resetFilters: () => void;
  NigerianPlayerCount: number;
}) {
  return (
    <div className="flex-1">
      <div className="hidden md:flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Player Scouting</h1>
        <Badge variant="secondary" className="text-sm">
          Showing {filteredPlayers.length} of {NigerianPlayerCount} players
        </Badge>
      </div>

      {/* Player Grid */}
      {filteredPlayers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">No players found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search criteria
            </p>
            <Button onClick={resetFilters} variant="default">
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
