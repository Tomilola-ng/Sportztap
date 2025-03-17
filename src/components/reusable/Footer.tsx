import { Link } from "react-router";

import { SMIcons } from "@/components/reusable/social-media-icons";
import { ClubIcon as Football } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-3 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Football className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SportzTap</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering grassroots football talents with scouting opportunities
              and mental wellness support.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/scouting"
                  className="text-muted-foreground hover:text-primary"
                >
                  Scouting
                </Link>
              </li>
              <li>
                <Link
                  to="/wellness-hub"
                  className="text-muted-foreground hover:text-primary"
                >
                  Wellness Hub
                </Link>
              </li>
            </ul>
          </div>

          <div></div>

          <div>
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                {SMIcons.instagram}
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                {SMIcons.twitter}
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                {SMIcons.facebook}
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                {SMIcons.youtube}
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SportzTap. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Created by Okoye Emmanuel Joel Kossy
          </p>
        </div>
      </div>
    </footer>
  );
}
