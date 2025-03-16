import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";

export default function ProblemsBenefits() {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-background">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Challenge
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Young Nigerian Athletes face numerous challenges that hinder their
              progression in becoming amateur or professional footballers.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="Football challenges"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Lack of Visibility</h3>
              <p className="text-muted-foreground text-wrap max-w-96">
                Limited exposure to scouts and professional clubs, especially
                for talents in rural areas.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Mental Health Challenges</h3>
              <p className="text-muted-foreground">
                Insufficient awareness and support for mental wellness in sports
                development.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Data Limitations</h3>
              <p className="text-muted-foreground">
                Lack of accurate performance metrics and player progression
                tracking.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Solution
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SportzTap bridges these gaps with a comprehensive platform that
                addresses both talent visibility and mental wellness.
              </p>
            </div>
          </div>

          <div className="grid gap-6 mt-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Talent Showcase</h3>
                </div>
                <p className="text-muted-foreground">
                  A platform for players to display their skills and connect
                  with scouts and clubs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Mental Wellness</h3>
                </div>
                <p className="text-muted-foreground">
                  Resources and support for mental health awareness and
                  psychological resilience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Data Analytics</h3>
                </div>
                <p className="text-muted-foreground">
                  Comprehensive metrics and performance tracking for informed
                  decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
