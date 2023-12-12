import CarItem from "components/CarsItem/CarsItem";
import { CarList, LoadMore } from "./CarsList.styled";
import ModalCarNotices from "components/ModalCarNotices/ModalCarNotices";
import { nanoid } from "nanoid";


const CarsList = () => {
  const adverts = [
         {
             "id": 9582,
             "year": 2008,
             "make": "Buick",
            "model": "Enclave",
             "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
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
             "mileage": 5858
           },
           {
             "id": 9584,
             "year": 2019,
             "make": "Volvo",
             "model": "XC90",
             "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",
             "description": "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
             "fuelConsumption": "8.3",
             "engineSize": "2.0L 4-cylinder",
             "accessories": [
               "Nappa leather seats",
               "Bowers & Wilkins premium sound system",
              "Head-up display"
             ],
             "functionalities": [
               "IntelliSafe advanced safety features",
               "Pilot Assist semi-autonomous driving",
               "Four-zone automatic climate control"
             ],
             "rentalPrice": "$50",
             "rentalCompany": "Premium Auto Rentals",
             "address": "456 Example Avenue, Lviv, Ukraine",
             "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
             "mileage": 5352
           },
           {
             "id": 9586,
             "year": 2020,
             "make": "Volvo",
             "model": "XC60",
             "type": "SUV",
             "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",
             "description": "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
             "fuelConsumption": "7.9",
             "engineSize": "2.0L 4-cylinder",
             "accessories": [
               "Premium leather seats",
               "Harman Kardon audio system",
               "Hands-free power tailgate"
             ],
             "functionalities": [
               "City Safety collision avoidance technology",
               "Pilot Assist with adaptive cruise control",
               "9-inch Sensus touchscreen infotainment system"
             ],
             "rentalPrice": "$45",
             "rentalCompany": "Luxury Car Rentals",
             "address": "789 Example Boulevard, Odessa, Ukraine",
             "rentalConditions": "Minimum age: 23\nValid driver's license\nCredit card required",
             "mileage": 5966
           },
           {
            "id": 9586,
            "year": 2020,
            "make": "Volvo",
            "model": "XC60",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",
            "description": "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
            "fuelConsumption": "7.9",
            "engineSize": "2.0L 4-cylinder",
            "accessories": [
              "Premium leather seats",
              "Harman Kardon audio system",
              "Hands-free power tailgate"
            ],
            "functionalities": [
              "City Safety collision avoidance technology",
              "Pilot Assist with adaptive cruise control",
              "9-inch Sensus touchscreen infotainment system"
            ],
            "rentalPrice": "$45",
            "rentalCompany": "Luxury Car Rentals",
            "address": "789 Example Boulevard, Odessa, Ukraine",
            "rentalConditions": "Minimum age: 23\nValid driver's license\nCredit card required",
            "mileage": 5966
          },
          {
            "id": 9587,
            "year": 2006,
            "make": "HUMMER",
            "model": "H2",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp",
            "description": "The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",
            "fuelConsumption": "19.8",
            "engineSize": "6.0L V8",
            "accessories": [
              "Heated leather seats",
              "Bose premium sound system",
              "Off-road package"
            ],
            "functionalities": [
              "Electronic locking front and rear differentials",
              "Stabilitrak stability control",
              "Tire pressure monitoring system"
            ],
            "rentalPrice": "$55",
            "rentalCompany": "Adventure Car Rentals",
            "address": "321 Example Road, Kharkiv, Ukraine",
            "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
            "mileage": 4771
          },
          {
            "id": 9590,
            "year": 2016,
            "make": "Subaru",
            "model": "Outback",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/subaru_outback.jpg",
            "description": "The Subaru Outback is a versatile and reliable SUV that combines off-road capability with a comfortable and spacious interior.",
            "fuelConsumption": "8.7",
            "engineSize": "2.5L 4-cylinder",
            "accessories": [
              "Leather upholstery",
              "Power moonroof",
              "Harman Kardon premium audio system"
            ],
            "functionalities": [
              "Symmetrical All-Wheel Drive",
              "X-Mode off-road assist",
              "Subaru EyeSight driver-assist system"
            ],
            "rentalPrice": "$35",
            "rentalCompany": "Adventure Car Rentals",
            "address": "987 Example Street, Kyiv, Ukraine",
            "rentalConditions": "Minimum age: 21\nValid driver's license\nCredit card required",
            "mileage": 4061
          },
          {
            "id": 9591,
            "year": 2010,
            "make": "Mitsubishi",
            "model": "Outlander",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/mitsubishi_outlander.jpg",
            "description": "The Mitsubishi Outlander is a practical and fuel-efficient SUV with a stylish design and a range of modern features.",
            "fuelConsumption": "7.9",
            "engineSize": "2.4L 4-cylinder",
            "accessories": [
              "Heated front seats",
              "Rockford Fosgate premium audio system",
              "Power liftgate"
            ],
            "functionalities": [
              "Super All-Wheel Control",
              "Multi-View camera system",
              "Bluetooth hands-free system"
            ],
            "rentalPrice": "$30",
            "rentalCompany": "City Car Rentals",
            "address": "654 Example Avenue, Lviv, Ukraine",
            "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
            "mileage": 5374
          },
          {
            "id": 9593,
            "year": 2014,
            "make": "Nissan",
            "model": "Pathfinder",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/nissan_pathfinder.jpg",
            "description": "The Nissan Pathfinder is a versatile and family-friendly SUV that offers a comfortable ride and generous cargo space.",
            "fuelConsumption": "9.5",
            "engineSize": "3.5L V6",
            "accessories": [
              "Tri-Zone Automatic Climate Control",
              "Bose premium audio system",
              "Rear-seat entertainment system"
            ],
            "functionalities": [
              "Intelligent 4x4 system",
              "Advanced Drive-Assist Display",
              "Nissan Intelligent Key with push-button ignition"
            ],
            "rentalPrice": "$40",
            "rentalCompany": "Luxury Car Rentals",
            "address": "321 Example Road, Odessa, Ukraine",
            "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
            "mileage": 6282
          },
          {
            "id": 9596,
            "year": 2009,
            "make": "Lincoln",
            "model": "Navigator L",
            "type": "SUV",
            "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/lincoln_navigator_l.webp",
            "description": "The Lincoln Navigator L is a luxurious and spacious SUV with a refined interior and advanced technology features.",
            "fuelConsumption": "18.2",
            "engineSize": "5.4L V8",
            "accessories": [
              "Premium leather seats",
              "THX II Certified audio system",
              "Power-deployable running boards"
            ],
            "functionalities": [
              "AdvanceTrac with Roll Stability Control",
              "Voice-Activated Navigation System",
              "Power liftgate"
            ],
            "rentalPrice": "$50",
            "rentalCompany": "Elite Car Rentals",
            "address": "123 Example Boulevard, Kharkiv, Ukraine",
            "rentalConditions": "Minimum age: 25\nValid driver's license\nInsurance coverage required",
            "mileage": 6173
          },
       ]

     return (
      <>
       <CarList>
          {adverts?.map(advert => ( 
           <CarItem key={nanoid()} advert={advert}>
           </CarItem>
               
         ))} 
         <LoadMore>Load More</LoadMore>
       </CarList>
         <ModalCarNotices />
       </>
     );
   };
  
export default CarsList;