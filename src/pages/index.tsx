import Footer from "@/component/footer";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export default function Home() {
  return (
    <main className={`w-full bg-[#1A1A1A] min-h-screen ${sans.variable}`}>
      <div className="w-full h-[23.5rem] bg-white" />
      <Footer />
    </main>
  );
}
