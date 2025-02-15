import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/header";
import GameWindow from "@/components/game-window/game-window";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (<div><Header /><GameWindow/></div>)
};