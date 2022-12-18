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
          </p>
      </Container>
    </div>
  );
}

export default App;
