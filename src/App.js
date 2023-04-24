import './App.css';
import Homepage from './Components/Homepage/homepage';
import 'semantic-ui-css/semantic.min.css'
import bg from './images/webbg.png';


function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, //
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: "100%",
    height: "100vh",
    width: "100vw",
        }}>
        <Homepage/>
    </div>
  );
}

export default App;
