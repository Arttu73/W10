import './App.css';
import MyContainer from './components/MyContainer';
import MyList from './components/MyList';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<><Header /> <MyContainer /> </> } />
        <Route path="/about" element={<><Header /> <About /> </> } />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
