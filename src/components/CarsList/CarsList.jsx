import CarItem from "components/CarsItem/CarsItem";
import { CarList} from "./CarsList.styled";
import ModalCarNotices from "components/ModalCarNotices/ModalCarNotices";
import { nanoid } from "nanoid";


const CarsList = ({adverts}) => {
 
     return (
      <>
       <CarList>
          {adverts?.map(advert => ( 
           <CarItem key={nanoid()} advert={advert} />    
         ))} 
       </CarList>
         <ModalCarNotices />
       </>
     );
   };
  
export default CarsList;