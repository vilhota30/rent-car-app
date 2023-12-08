// import Modal from "components/Modal/Modal";
import { CarItemCart, CarImage, BtnLearnMore } from "./CarsItem.styled";
// import { useState, Dispatch } from "react";

const CarItem = ({ cars }) => {

    


    return (
        <>
         <CarItemCart>
             <CarImage />
             <BtnLearnMore
             type="button"
             >Learn More</BtnLearnMore>
         </CarItemCart>
        </>
    ) 
        
}

export default CarItem;
