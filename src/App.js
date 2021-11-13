// import logo from './logo.svg';
import logo from './img/logo.png';
import './App.css';
import background from './img/background.png';
import TitleContainer  from './containers/TitleContainer';
import RoadmapContainer from './containers/RoadmapContainer';
import ShowcaseContainer from './containers/ShowcaseContainer';
import SocialFollow from './components/SocialFollow';
import TeamContainer from './containers/TeamContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${background})`}}>
        <img src={logo} className="logo" alt="logo" />        
              
        
        <TitleContainer />                
        <RoadmapContainer />
        <TeamContainer />

        <SocialFollow />

        
      </header>
    </div>
  );
}

export default App;
