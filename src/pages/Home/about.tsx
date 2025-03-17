export default function About() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              About SportzTap
            </h2>
            <p className="text-muted-foreground md:text-lg">
              SportzTap is a social enterprise dedicated to revolutionizing
              football scouting in Nigeria while promoting mental wellness among
              young athletes.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Our mission is to create a platform that gives grassroots talents
              a chance to showcase their abilities, provides mental health
              support, increases visibility, and connects players with
              opportunities.
            </p>
            <p className="text-muted-foreground md:text-lg">
              We believe in the power of sports to transform lives and
              communities, and we're committed to creating a more inclusive,
              transparent, and supportive environment for young Nigerian
              footballers.
            </p>
          </div>
          <div className="relative lg:ml-auto">
            <img
              src="/lightning-icon.jpg"
              width={600}
              height={400}
              alt="About SportzTap"
              className="mx-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
