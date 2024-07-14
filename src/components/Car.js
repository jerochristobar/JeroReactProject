function Car(props) {
    const {carInfo} = props;
    // const {color,brand} = carInfo;

    
    const text = `Hi, Im  ${carInfo.color} ${carInfo.brand} car`;
    return (

        <h2> {text}</h2>
    )
}

export default Car;