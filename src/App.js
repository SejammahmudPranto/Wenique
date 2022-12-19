import './App.css';
import Homepage from './Components/Homepage/homepage';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div >
      
      <Container textAlign='center'>
        <Homepage/>
          <p>
            This website is on progress.
            Please use our facebook page to contact and purchase.
            Facebook page: <a href="https://www.facebook.com/weniqueBD">WENIQUE</a>
          </p>
      </Container>
    </div>
  );
}

export default App;
