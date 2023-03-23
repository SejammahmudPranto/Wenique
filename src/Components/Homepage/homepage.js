import React from 'react'
import { Container } from 'semantic-ui-react';

function Homepage() {
    return (
      <div> 
        <Container textAlign='center'>
            <h1 style={{color: "white"}}>Wenique Website is under maintenance.</h1>
            <p style={{fontSize: "1.5rem", fontWeight: "1200", backgroundColor: "#283b53", color:"white"}}>
                This website is on progress.
                Please use our facebook page to contact and purchase.
                Facebook page: <a href="https://www.facebook.com/Weniquee/">WENIQUE</a>
            </p>
          </Container>
          <Container>
              <h1 style={{color: "white"}}></h1>
          </Container>
      </div>
    );
  }
  
  export default Homepage;