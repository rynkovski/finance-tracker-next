import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Mouse } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center px-8 py-2 snap-y">
            <section className="flex flex-col items-center gap-4 pt-32 pb-8 text-center snap-center sm:pt-48 md:pt-52 md:pb-10 lg:pt-64 lg:pb-24">
              <h1 className="text-3xl font-bold md:text-6xl">
                Your Personal
                <span className="inline-block mx-1 text-transparent sm:mx-2 md:mx-3 bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  Finance
                </span>
                Companion
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Unlock financial freedom with Budget Buddy, your trusted partner
                in managing money and achieving your financial goals.
              </p>
              <div className="flex gap-2 py-10">
                <Button variant="secondary">How does it work?</Button>
                <Button>
                  <Link href="register">Get started</Link>
                </Button>
              </div>
              <div className="flex items-center gap-1 pt-64 lg:pt-80 animate-pulse">
                <Mouse />
                Scroll to see more
              </div>
            </section>
            <section className="flex flex-col items-center gap-2 py-8 snap-center md:py-12 lg:pt-40 lg:pb-24">
              <h2 className="text-4xl font-bold text-center">
                Why Budget Buddy?
              </h2>
              <Features />
            </section>
            <section></section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
