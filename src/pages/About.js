import React from "react";
import Phone from "../components/Phone/Phone";
import Tabs from "../components/Tabs/Tabs";

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title">Про нас</h1>
		<Tabs/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
      <Phone />
    </section>
  );
}
