// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

import './style.css'

const siteProps = {
  name:"Alexandrie Greiner",
  title:"Web desginer",
  email:"ale@gamil.com",
  gitHub:"microsoft",
  linkedIn:"satyanadella",
  medium:"",
  twitter:"microsoft",
  youTube:"",
};

const App=()=> {
  return (
    <div id="main">
      <Header/>
      <Home name={siteProps.name} title={siteProps.title}/>
      <About/>
      <Portfolio/>
      {/* <Footer {...siteProps}/> */}
    </div>
  );
};

export default App;
