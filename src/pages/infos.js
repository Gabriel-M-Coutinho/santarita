import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "../Components/NavBar";
import CarouPesque from "../Components/CarouPesque";
import CarouHospe from "@/Components/CarouHospe";
import CarouRestau from "@/Components/CarouRestau";
import NavFoot from "@/Components/NavFoot";

const inter = Inter({ subsets: ["latin"] });

export default function infos() {
  return (
    <>
      <Head>
        <title>Santa Rita Gigantes</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <NavBar />
          <div style={{ paddingTop: "30px" }}>
            <CarouPesque />
          </div>
          <CarouHospe />
          <CarouRestau />
          <NavFoot />
        </div>
      </main>
    </>
  );
}
