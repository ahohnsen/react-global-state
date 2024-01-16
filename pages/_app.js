import { useState } from "react";

import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialAnimals = [
  { id: "1", name: "Cats", count: 0 },
  { id: "2", name: "Dogs", count: 0 },
  { id: "3", name: "Sheep", count: 0 },
  { id: "4", name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubtract() {
    setCount(Math.max(0, count - 1));
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} animals={animals} />
      </Layout>
    </>
  );
}
