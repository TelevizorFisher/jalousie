import React from "react";
import MyProductContainer from "../components/MyProduct/MyProductContainer";
import Phone from "../components/Phone/Phone";

export default function Home(props) {
  return (
    <main>
      <div className="container">
        <MyProductContainer store={props.store} />
        <Phone />
      </div>
    </main>
  );
}
