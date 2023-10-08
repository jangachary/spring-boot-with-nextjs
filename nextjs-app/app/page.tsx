import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./UI/HeroSection";
import Users from "./components/Users";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <div>Test</div>
      <Users />
    </main>
  );
}
