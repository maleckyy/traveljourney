import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'

import data from './data';

function App() {

console.log(data[0].location)

const cards = data.map((item)=>{
return(
  <Card
    item={item}
  />
)
})


  return (
    <div className="App">
    <Navbar/>
    <section className='cards-section'>
      {cards}
    </section>
    <p className='addnot'>scrimba solo project w/ .map, conditional rendering and data from external file</p>
    </div>
  );
}

export default App;
