import React from "react";

export default function SearchForm2() {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite drawing</label>
          <input type="text" name="name" id="name" />
          <button>Find track</button>
        </div>
      </form>
    </section>
  );
}
