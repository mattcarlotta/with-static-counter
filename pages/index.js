import * as React from "react";
import Head from "next/head";

const IndexPage = () => {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => ++c)}>Increment</button>
      <button onClick={() => setCount((c) => --c)}>Decrement</button>
    </main>
  );
};

export default IndexPage;
