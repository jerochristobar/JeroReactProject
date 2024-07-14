import Car from './Car'
import Apple from './Apple';


function Garage() {
    // const brand = `Ford`;
    const carInfo = {brand: "Ford",color: "Red"}

  return (
    <>
      <h1>Who lies inside  my Garage?</h1>
      {/* <Car brand={brand} color={`Black`}/> */}
      <Car carInfo={carInfo} />
      <Apple/>
    </>
  )
}

export default Garage;