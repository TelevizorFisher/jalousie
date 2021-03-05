import React from "react";

export class SearchForm2 extends React.Component {
  findTrack() {
    console.log("findTrack", this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }
  render() {
    return (
      <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="name">search your favorite drawing</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={(input) => {
                this.searchInput = input;
              }}
            />
            <button onClick={this.findTrack.bind(this)}>Find track</button>
          </div>
        </form>
      </section>
    );
  }
}

export default SearchForm2;