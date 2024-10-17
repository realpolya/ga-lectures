// src/App.jsx
import './App.css';
import Button1 from './components/normal-css/Button.jsx';
import Button2 from './components/inline-css/Button.jsx';


const App = () => {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <Button1 buttonText="Normal CSS" />
      <Button2 buttonText="Inline CSS" />
    </div>
  );
};

export default App;
