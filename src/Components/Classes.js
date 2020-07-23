import React, { Component } from "react";
import axios from "axios";
import List from "./uiLIbs/List";
import { Grid } from "@material-ui/core";

class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const data = response.data;
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  generatedLists = () => {
    return this.state.data.map((item) => {
      return (
        <List
          key={item.id}
          firstName={item.first_name}
          lastName={item.last_name}
          image={item.avatar}
          email={item.email}
        />
      );
    });
  };

  componentDidMount = () => {
    this.fetchUsers();
  };

  render() {
    return <Grid>{this.generatedLists()}</Grid>;
  }
}

export default Classes;
