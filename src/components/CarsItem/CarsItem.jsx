 import { CarItemList, CarItemCart, ImageContainer, BtnLearnMore } from "./CarsItem.styled";
 import { useDispatch } from "react-redux";
 import { openModal } from '../../redux/cardata/carSlice';

 

const CarItem = ({ advert }) => {

    const dispatch = useDispatch()

    const data = {
            "city": "Lviv",
            "country": "Ukraine",
            "id": 9582,
            "year": 2008,
            "make": "Buick",
            "model": "Enclave",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",
            "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
            "fuelConsumption": "10.5",
            "engineSize": "3.6L V6",
            "accessories": [
              "Leather seats",
              "Panoramic sunroof",
              "Premium audio system"
            ],
            "functionalities": [
              "Power liftgate",
              "Remote start",
              "Blind-spot monitoring"
            ],
            "rentalPrice": "$40",
            "rentalCompany": "Luxury Car Rentals",
            "address": "123 Example Street, Kiev, Ukraine",
            "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
            "mileage": "5858"
          };

    const handleLearnMore = () => {
        dispatch(openModal(data))
        console.log('Hello')
    }

     const CarCharacteristic = (advert) => {
         return (
            <div>
                 <CarItemList>
                     <li>City:{data.city}</li>
                     <li>Country:{data.country}</li>
                     <li>Rental Company:{data.rentalCompany}</li>
                     <li>Type: {data.type}</li>
                     <li>Model: {data.make}</li>
                     <li>Id: {data.id}</li>
                     {/* <li>{data.functionalities[0]}</li> */}
                 </CarItemList>
             </div>
         )
     }

    return (
        <>
         <CarItemCart>
             <ImageContainer /> 
            {/* <img src={advert.img || advert.photoLink} alt={advert.description} /> */}
              <h3>{data.model}, {data.year}</h3>
              <CarCharacteristic data={advert} />
             <BtnLearnMore onClick={handleLearnMore}>Learn More</BtnLearnMore>
         </CarItemCart>
        </>
    ) 
        
}

export default CarItem;
