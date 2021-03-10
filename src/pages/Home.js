import React from "react";
import MyProductContainer from "../components/MyProduct/MyProductContainer";

export default function Home(props) {
  return (
    <main>
      <MyProductContainer store={props.store} />
    </main>
  );
}
