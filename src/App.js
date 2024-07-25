import './App.css';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';
import Content from './layouts/content/Content';
import Main from './pages/InsideTalks/Main/Main';
import StoryMain from './pages/Stories/main/Main';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <StoryMain s/>
      <Footer/>
    </div>
  );
}

export default App;
