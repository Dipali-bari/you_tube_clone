import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryBar from "../../categoryBar/CategoryBar";
import Vedio from "../../Video/Vedio";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '27624833f5mshe330180fd45e459p126275jsn3bccecde832c',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

export default function Homescreen() {
  

  const [state, setState] = useState([]);
  useEffect(()=>{
    axios.request(options, Headers)
    .then((res)=>{
        
    
        
        console.log(res.data);
    })
    .catch(()=>{
        alert("Invalid data")
    })
    
} , []);


  return (
    <Container>
      <CategoryBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            
              <Vedio />
            
          </Col>
        ))}
      </Row>
    </Container>
  );
}
