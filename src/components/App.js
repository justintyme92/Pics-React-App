import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchBarSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
