import Modal from "components/Modal/Modal";
import { CarModalContainer, ImageContainer, Image, Header, AccessoriesList, RentalHeader, RentalList, RentalLi, DataContainer} from "./ModalCarNotices.styled";
// import { useState } from "react";

const ModalCarNotices = () => {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const toggleContactModal = () => {
    //     setIsModalOpen(prevState => !prevState);
    // };
    
    // const contactClickHandler = () => {
    //     toggleContactModal();
    // };
    
    return (
        <>
         <Modal>
             <CarModalContainer>
                   <DataContainer>
                       <ImageContainer>
                          <Image />
                       </ImageContainer>
                          <Header/>
                          <AccessoriesList />
                          <RentalHeader />
                             <RentalList>
                                <RentalLi />
                             </RentalList>
                   </DataContainer>
             </CarModalContainer>
         </Modal>
        </>
    )
}

export default ModalCarNotices;