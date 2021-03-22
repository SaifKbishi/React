import React from "react";
import axios from "axios";
import AvatarList from "./components/avatar-list/AvatarList.component";
import SearchBox from "./components/search-box/SearchBox.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatars: [], searchField: "" };
  }
  async componentDidMount() {
    //! this api gives you a choice of requesting multiple users. But for fun if it didn't this is what you will do:
    try {
      const promises = [];
      for (let i = 0; i < 10; i++) {
        const promise = axios.get("https://randomuser.me/api/");
        promises.push(promise);
      }
      const data = await Promise.all(promises);
      const avatars = data.map((avatar) => {
        const person = avatar.data.results[0];
        return {
          id: avatar.data.info.seed,
          firstName: person.name.first,
          lastName: person.name.last,
          img: person.picture.medium,
        };
      });

      this.setState({ avatars });
    } catch (e) {
      console.log(e.message);
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { avatars, searchField } = this.state;

    const filteredAvatars = [...avatars].filter((avatar) => {
      return avatar.firstName
        .toLowerCase()
        .startsWith(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <div>Filter</div>
        <SearchBox
          onSearchChange={this.onSearchChange}
          type="search"
          placeholder="filter avatars"
        />
        <AvatarList avatars={filteredAvatars}></AvatarList>
      </div>
    );
  }
}

export default App;
