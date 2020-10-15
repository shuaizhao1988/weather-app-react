import React from "react";
import axios from "axios";
import { queryAllByAttribute } from "@testing-library/dom";

export default function Weather(props) {
  function handleSubmit(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c1e2ce826268a3eec47d68f632fb9a68&units=metric`;

  axios.get(apiUrl).then(handleSubmit);
}
