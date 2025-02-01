import { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const url = "https://www.randomuser.me/api?results=1";
      const response = await fetch(url);
      const data = await response.json();

      setPerson({
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        email: data.results[0].email,
      });
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person}></Person>;
};

export default PersonController;
