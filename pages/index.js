import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>THOMAS | Software Developer</title>
        <meta
          name="description"
          content="I’m a software developer interested in AI, Blockchain and IOT."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
