import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react';
import rb from '../../images/rb.JPG';
import wb from '../../images/wb.JPG';

function Homepage() {
    return (
      <div> 
        <Container textAlign='center'>
            <h1 style={{color: "white"}}>Wenique Website is under maintenance.</h1>
            <p style={{fontSize: "1.5rem", fontWeight: "1200", backgroundColor: "#283b53", color:"white", borderRadius: "10px"}}>
                This website is on progress.
                Please use our facebook page to contact and purchase.
                Facebook page: <a href="https://www.facebook.com/Weniquee/">WENIQUE</a>
            </p>
          </Container>
          <Container>
              <h1 style={{color: "white", textAlign: "center", backgroundColor: "#283b53",  borderRadius: "10px", marginTop: "1rem"}}>Available Colours:</h1>
          </Container>
          <Container  style={{marginTop: "30px"}}>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <Image src={rb} size = 'big'/>
              </Grid.Column>
              <Grid.Column>
                <Image src={wb} size = 'big'/>
              </Grid.Column>
            </Grid>
          </Container>
      </div>
    );
  }
  
  export default Homepage;