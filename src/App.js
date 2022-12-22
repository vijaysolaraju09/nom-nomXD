import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from "./components/Home"
import Services from './components/Services'
import Collections from "./components/Collections"
import Popular from './components/Popular'
import Explore from './components/Explore'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Collections />
      <Popular />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
