import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./NASACard";
import { Container } from "reactstrap";
// import { tsPropertySignature } from "@babel/types";




export default function NASAContent() {
const [photos, setPhotos] = useState([]);
const [date, setDate] = useState("2019-11-11");

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response => {
      console.log(response.data);
      setPhotos(response.data)
    })
    .catch(error => {
      console.log("the data was not returned", error)
    });
  }, [date])
  return (
    // change back to container if issue
    <Container> 
      < NASACard title={photos.title} imgURL={photos.url} explanation={photos.explanation} date={photos.date}/>
    </Container>
    )
}
