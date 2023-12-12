import { CarModalContainer, Image, AccessoriesList, Description, Header, RentalList, RentalLi, DataContainer, Backdrop, BtnRentCar, CloseButton} from "./ModalCarNotices.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from '../../redux/cardata/carSlice';
import {getModalState} from '../../redux/cardata/selectors';
import {ReactComponent as CloseIcon} from '../svg/close.svg';

const ModalCarNotices = ( ) => {
     
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
    
          const dispatch = useDispatch();
          const Modal = useSelector(getModalState);

          const modalClose = () => {
            //   if (e.target === e.currentTarget) {
                  dispatch(closeModal())
                  console.log('close modal');
            //   }
          }
      
          useEffect(() => {
              const onEscape = e => {
                  if (e.code === 'Escape') {
                      dispatch(closeModal())
                  }
              };
      
              document.addEventListener('keydown', onEscape);
      
              return () => {
                  document.removeEventListener('keydown', onEscape);
              };
          }, [dispatch]);
      
    
    const CharacteristicList = ({ data }) => {
        return (
            <div>
                <AccessoriesList>
                    <li>{data.city}</li>
                    <li>{data.country}</li>
                    <li>Id: {data.id}</li>
                    <li>Year: {data.year}</li>
                    <li>Type: {data.type}</li>
                    <li>Fuel consumption: {data.fuelConsumption}</li>
                    <li>Engine size: {data.engineSize}</li>
                </AccessoriesList>
            </div>
        )
    }

    const AccessorisList = ({ data }) => {
        return (
            <div>
                <h3>Accessories and functionalities:</h3>
                <AccessoriesList>
                    {data.accessories.map((characteristic) => (
                        <li key={characteristic}>
                            {characteristic}
                        </li>
                    ))}
                </AccessoriesList>
                <AccessoriesList>
                    {data.functionalities.map((characteristic) => (
                        <li key={characteristic}>
                            {characteristic}
                        </li>
                    ))}
                </AccessoriesList>
            </div>
        )
    }
    
    const ConditionsOfRental = ({ data }) => {
         const array = data.rentalConditions.split('\n');
        return (
            <>
               <h2>Rental conditions:</h2>
                <RentalList>
                    {array.map((characteristic, index) => {
                        const [firstHalf, secondHalf] = characteristic.split(':');
                        return (
                            <RentalLi key={index}>
                                {firstHalf}
                                {secondHalf ? <>: <span>{secondHalf}</span></> : null}
                            </RentalLi>
                        );
                    })}
                    <RentalLi>Mileage: <span>{data.mileage.toLocaleString('en-US', { useGrouping: true })}</span></RentalLi>
                    <RentalLi>Price: <span>{data.rentalPrice}</span></RentalLi>
                </RentalList>
            </>
        );
    };



    return (
        <>
         { Modal && (
                <Backdrop onClick={() => modalClose()}>
                <CarModalContainer>
                      <DataContainer>
                      <CloseButton onClick={(e) => modalClose(e)}>
                        <CloseIcon />
                      </CloseButton>
                          <Image src={data.img}>
                          </Image>
                             <Header>Buick Enclave</Header>
                               <CharacteristicList data={data} />
                                   <Description data={data}/>
                                  <AccessorisList data={data} /> 
                                       <ConditionsOfRental data={data}/>
                                    <BtnRentCar href={'tel:+380730000000'}>Rent Car</BtnRentCar>
                                
                      </DataContainer>
                </CarModalContainer>
               </Backdrop>
            )}
           
            {/* {isModalOpen && (
               <h2>Plese, choose yuor favorite car</h2>
            )} */}
        </>
    )
}

export default ModalCarNotices;