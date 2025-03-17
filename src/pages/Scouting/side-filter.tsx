import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SideFilter({
  filters,
  handleFilterChange,
  resetFilters,
  searchTerm,
  setSearchTerm,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  filters: {
    position: string;
    ageMin: string;
    ageMax: string;
    gender: string;
    workRate: string;
  };
  handleFilterChange: (name: string, value: string) => void;
  resetFilters: () => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}) {
  return (
    <Card className="md:w-64 h-fit md:sticky top-20">
      <CardContent className="p-4 space-y-4">
        <div className="hidden md:block">
          <h2 className="text-xl font-semibold mt-2">Filters</h2>
          <Separator className="my-2" />
        </div>

        <div>
          <label htmlFor="search" className="block text-sm font-medium mb-1">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or city"
              className="pl-8"
            />
          </div>
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium mb-1">
            Position
          </label>
          <Select
            value={filters.position}
            onValueChange={(value) => handleFilterChange("position", value)}
          >
            <SelectTrigger id="position">
              <SelectValue placeholder="All Positions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
              <SelectItem value="Defender">Defender</SelectItem>
              <SelectItem value="Midfielder">Midfielder</SelectItem>
              <SelectItem value="Forward">Forward</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Age Range</label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={filters.ageMin}
              onChange={(e) => handleFilterChange("ageMin", e.target.value)}
              placeholder="Min"
            />
            <Input
              type="number"
              value={filters.ageMax}
              onChange={(e) => handleFilterChange("ageMax", e.target.value)}
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-1">
            Gender
          </label>
          <Select
            value={filters.gender}
            onValueChange={(value) => handleFilterChange("gender", value)}
          >
            <SelectTrigger id="gender">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="workRate" className="block text-sm font-medium mb-1">
            Work Rate
          </label>
          <Select
            value={filters.workRate}
            onValueChange={(value) => handleFilterChange("workRate", value)}
          >
            <SelectTrigger id="workRate">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={resetFilters} className="w-full">
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}
