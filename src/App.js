import './App.css';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';
import Content from './layouts/content/Content';
import CommentBoxSection from './layouts/commentBoxSection/CommentBoxSection';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
