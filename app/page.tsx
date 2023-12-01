import type { Metadata } from "next";

import Header from "../components/homepage/Header";
import Hero from "../components/homepage/Hero";
import CoreValues from "../components/homepage/CoreValues";
import ChatWithUs from "../components/homepage/ChatWithUs";
import AskQuestions from "../components/homepage/AskQuestions";
import Testimonials from "../components/homepage/Testimonials";
import Footer from "../components/shared/Footer";

export const metadata: Metadata = {
  title: "Gabeth.Ai",
  description: "Gabeth.Ai is your personal AI chat companion.",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CoreValues />
      <AskQuestions />
      <ChatWithUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
