import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Join SportzTap?
          </h2>
          <p className="max-w-[600px] md:text-xl">
            Start your journey towards professional football while prioritizing
            your mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/scouting">
              <Button size="lg" variant="secondary">
                Explore Scouting
              </Button>
            </Link>
            <Link to="/wellness-hub">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Visit Wellness Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
