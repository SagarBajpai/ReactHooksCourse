import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./uiLIbs/List";
import { Grid } from "@material-ui/core";

const Hooks = () => {
  const [data, setData] = useState([]);

  // It is working as componentDidMount
  useEffect(() => {
    fetchUsers();
  }, []); // Try to remove this [] what will happen

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const data = response.data;
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const generatedLists = () => {
    return data.map((item) => {
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

  return <Grid>{generatedLists()}</Grid>;
};

export default Hooks;
