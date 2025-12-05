import ArchitectHero from "@/components/Home";
import About from "@/components/About"; // Import the new component
import Services from "@/components/Services"; // Import the Services component
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <ArchitectHero />
      <About /> {/* Add it here */}
      <Services /> {/* Add the Services component */}
      <Projects />
    </main>
  );
}