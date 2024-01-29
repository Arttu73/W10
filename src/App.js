import './App.css';
import MyContainer from './components/MyContainer';
import {useState} from "react"

function App() {

  const [items, setItems] = useState([
    { id: "1", text: "This is an item" },
    { id: "2", text: "Also this"},
]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer items={items}/>
    </div>
  );
}

export default App;
