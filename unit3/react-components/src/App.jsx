import './App.css'
import Nav from './components/Navbar/Nav.jsx';
import ItemCard from './components/ItemCard/ItemCard.jsx';
import FounderList from './components/FounderList/FounderList.jsx';


// App is the main component, other ones are imported

const App = () => {

  return (
    <>
      <Nav/>
      <h1>Welcome to Hyperbo.ly</h1>
      <FounderList/>
    </>
  )

}

export default App
