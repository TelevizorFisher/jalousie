import React from "react";
import MyProductContainer from "../components/MyProduct/MyProductContainer";
import Phone from "../components/Phone/Phone";

export default function Home(props) {
  return (
    <main>
      <MyProductContainer store={props.store} />
      <Phone/>
    </main>
  );
}
