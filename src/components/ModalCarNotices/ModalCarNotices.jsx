import { CarModalContainer, AccessoriesList, DataContainer, Image, Description, Backdrop, BtnRentCar, RentalList, RentalLi, CloseButton} from "./ModalCarNotices.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal} from '../../redux/cardata/carSlice';
import {getModalState} from '../../redux/cardata/selectors';
// import { getAdverts } from "../../redux/cardata/selectors";
import {ReactComponent as CloseIcon} from '../svg/close.svg';


const ModalCarNotices = ( { data } ) => {
     
          const dispatch = useDispatch();
          const modal = useSelector(getModalState);
        //   const adverts = useSelector(getAdverts);

          const modalClose = () => {
            //   if (e.target === e.currentTarget) {
                  dispatch(closeModal())
                //   console.log('close modal');
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
      
        //    const index = 0; 
        //    const selectedAdvert = adverts[index];

        // const selectedAdvert = adverts[selectedAdvertIndex];

        const selectedAdvert = modal;

    const CharacteristicList = () => {
        return (
            <div>
                <Image src={selectedAdvert.img} alt={selectedAdvert.description} />
                <AccessoriesList>
                    <li>{selectedAdvert.city}</li>
                    <li>{selectedAdvert.country}</li>
                    <li>Id: {selectedAdvert.id}</li>
                    <li>Year: {selectedAdvert.year}</li>
                    <li>Type: {selectedAdvert.type}</li>
                    <li>Fuel consumption: {selectedAdvert.fuelConsumption}</li>
                    <li>Engine size: {selectedAdvert.engineSize}</li>
                </AccessoriesList>
            </div>
        )
    }

     const AccessorisList = () => {
         return (
             <div>
                 <h3>Accessories and functionalities:</h3>
                 <ul>
                 {selectedAdvert.accessories && Array.isArray(selectedAdvert.accessories) && selectedAdvert.accessories.map((characteristic) => (
                    <li key={characteristic}>
                        {characteristic}
                    </li>))}
                 </ul>
                 <ul>
                 {selectedAdvert.functionalities && Array.isArray(selectedAdvert.functionalities) && selectedAdvert.functionalities.map((characteristic) => (
                    <li key={characteristic}>
                        {characteristic}
                    </li>
                ))}
                 </ul>
             </div>
         )
     }
    
    const ConditionsOfRental = () => {
        const conditionsArray = selectedAdvert.rentalConditions ? selectedAdvert.rentalConditions.split('\n') : [];
        const rentalData = {
            mileage: selectedAdvert.mileage,
            rentalPrice: selectedAdvert.rentalPrice
        };
    
        return (
            <>
                <h4>Rental conditions:</h4>
                <RentalList>
                    {conditionsArray.map((condition, index) => {
                        const [firstHalf, secondHalf] = condition.split(':');
                        return (
                            <RentalLi key={index}>
                                {firstHalf}
                                {secondHalf ? <>: <span>{secondHalf}</span></> : null}
                            </RentalLi>
                        );
                    })}
                    <RentalLi>Mileage: <span>{rentalData.mileage}</span></RentalLi>
                    <RentalLi>Price: <span>{rentalData.rentalPrice}</span></RentalLi>
                </RentalList>
            </>
        );
    };



    return (
        <>
         { modal && (
                <Backdrop onClick={() => modalClose()}>
                <CarModalContainer>
                      <DataContainer>
                      <CloseButton onClick={(e) => modalClose(e)}>
                        <CloseIcon />
                      </CloseButton>
                           {/* <Image src={data.img}>
                          </Image> */}
                          {/* <img src={data.selectedAdvert.img} alt={data.selectedAdvert.description} /> */}
                               <CharacteristicList data={selectedAdvert} />
                                    <Description data={selectedAdvert}/> 
                                   <AccessorisList data={selectedAdvert} />
                                        <ConditionsOfRental data={selectedAdvert}/> 
                                    <BtnRentCar href={'tel:+380730000000'}>Rent Car</BtnRentCar>
                                
                      </DataContainer>
                </CarModalContainer>
               </Backdrop>
            )}
           
             {/* { !modal && (
               <h2>Plese, choose yuor favorite car</h2>
            )}  */}
        </>
    )
}

export default ModalCarNotices;