import './App.css'
import Card from "./components/Card"
import luxury from "./assets/icon-luxury.svg"
import sedan from "./assets/icon-sedans.svg"
import suvs from "./assets/icon-suvs.svg"

function App() {
  return (
    <>
      <div className='container'>
        <Card image={sedan} title="SEDANS" text="Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip" className="sedans" />
        <Card image={suvs} title="SUVS" text="Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip" className="suvs" />
        <Card image={luxury} title="LUXURY" text="Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip" className="luxury" />
      </div>

    </>
  )
}

export default App
