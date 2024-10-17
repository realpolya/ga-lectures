// src/App.jsx
import './App.css';
import Button1 from './components/normal-css/Button.jsx';
import Button2 from './components/inline-css/Button.jsx';
import Button3 from './components/css-in-js/Button.jsx';
import Button4 from './components/styled-comp/Button.jsx';
import Button5 from './components/modules/Button.jsx';
import Button6 from './components/sass/Button.jsx';



const App = () => {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <Button1 buttonText="Normal CSS" />
      <Button2 buttonText="Inline CSS" />
      <Button3 buttonText="CSS in JS" />
      <Button4 buttonText="Styled Components" />
      <Button5 buttonText="Modules" />
      <Button6 buttonText="Sass" />
    </div>
  );
};

export default App;
