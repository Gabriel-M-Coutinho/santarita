import { Inter } from "next/font/google";
import NavBar from "../Components/NavBar";
import CarouPesque from "../Components/CarouPesque";
import CarouHospe from "@/Components/CarouHospe";
import CarouRestau from "@/Components/CarouRestau";
import NavFoot from "@/Components/NavFoot";

const inter = Inter({ subsets: ["latin"] });

export default function infos() {
  return (
    <>
      <NavBar />
      <div style={{ height: "70px" }} />
      <CarouPesque />
      <CarouHospe />
      <CarouRestau />
      <NavFoot />
    </>
  );
}
