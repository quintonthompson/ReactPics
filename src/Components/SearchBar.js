import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    //returns term all the way back to App.js
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {
          // this.onFormSubmit is passed to onFormSubmit function
        }
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {
              // do not put () on this.onInputChange when using event handler liek onChange
            }
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
