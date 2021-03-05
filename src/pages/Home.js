import React from "react";
import MyProductContainer from "../components/MyProduct/MyProductContainer";
import SearchForm2 from "../components/SearchForm2";
export default function Home(props) {
  return (
    <main>
      <SearchForm2 store={props.store} />
      <MyProductContainer store={props.store}/>
    </main>
  );
}
