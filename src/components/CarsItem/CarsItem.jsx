 import { CarItemList, CarItemCart, ImageContainer, BtnLearnMore } from "./CarsItem.styled";
 import { useDispatch, useSelector } from "react-redux";
 import { openModal } from '../../redux/cardata/carSlice';
 import { getFavorites } from "../../redux/cardata/selectors";
 import { toggleFavorite } from '../../redux/cardata/carSlice';
 import BtnLikeCar from "../BtnLikeCar/BtnLikeCar";

const CarItem = ({ advert }) => {

    const dispatch = useDispatch()

    const handleLearnMore = () => {
        dispatch(openModal(advert))
        // console.log('Hello')
    };

    const favoriteList = useSelector(getFavorites);

    const handleToggleFavorite = (advert) => {
        dispatch(toggleFavorite(advert))
    }

     const CarCharacteristic = ({ data }) => {
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
             <ImageContainer src={advert.img} alt={advert.description} /> 
             <BtnLikeCar buttonState={favoriteList.some(favorited => favorited.id === advert.id)} callbackFunction={() => handleToggleFavorite(advert)}>
             </BtnLikeCar>
            {/* <img src={advert.img || advert.photoLink} alt={advert.description} /> */}
              <h3>{advert.model}, {advert.year}</h3>
              <CarCharacteristic data={advert} />
             <BtnLearnMore onClick={handleLearnMore}>Learn More</BtnLearnMore>
         </CarItemCart>
        </>
    ) 
        
}

export default CarItem;
