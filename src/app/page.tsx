import Image from "next/image";
import Accordion from "./components/Accordion";
import Layout from "./components/Layout";
import Head from "next/head";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main>
      <Accordion />

      <Cursor />
    </main>
  );
}
