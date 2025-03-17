import { useState, useEffect } from "react";
import { NigerianPlayers } from "@/data/players";
import SideFilter from "./side-filter";
import ContentGrid from "./content-grid";
import Header from "@/components/reusable/Header";

export default function ScoutingPage() {
  const [filteredPlayers, setFilteredPlayers] =
    useState<_player[]>(NigerianPlayers);
  const [filters, setFilters] = useState({
    position: "",
    ageMin: "",
    ageMax: "",
    gender: "",
    workRate: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Apply filters when they change
  useEffect(() => {
    let result = [...NigerianPlayers];

    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (player) =>
          player.firstName.toLowerCase().includes(term) ||
          player.lastName.toLowerCase().includes(term) ||
          (player.address?.city &&
            player.address.city.toLowerCase().includes(term))
      );
    }

    // Position filter
    if (filters.position) {
      result = result.filter(
        (player) => player.primaryPosition === filters.position
      );
    }

    // Age range filter
    if (filters.ageMin) {
      result = result.filter(
        (player) => player.age >= Number.parseInt(filters.ageMin)
      );
    }
    if (filters.ageMax) {
      result = result.filter(
        (player) => player.age <= Number.parseInt(filters.ageMax)
      );
    }

    // Gender filter
    if (filters.gender) {
      result = result.filter((player) => player.gender === filters.gender);
    }

    // Work rate filter
    if (filters.workRate) {
      result = result.filter((player) => player.workRate === filters.workRate);
    }

    setFilteredPlayers(result);
  }, [filters, searchTerm]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      position: "",
      ageMin: "",
      ageMax: "",
      gender: "",
      workRate: "",
    });
    setSearchTerm("");
  };

  return (
    <main role="main">
      <Header />
      <div className="min-h-screen bg-background/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            <SideFilter
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              filters={filters}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ContentGrid
              resetFilters={resetFilters}
              filteredPlayers={filteredPlayers}
              NigerianPlayerCount={NigerianPlayers.length}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
