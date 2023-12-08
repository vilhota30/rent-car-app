import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalWindow, CloseBtn } from "./Modal.styled";

const modalDiv = document.getElementById('modal-root');
//додати у батьківський компонент (сторінку) наступний код:
// - state:
// const [isModalOpen, setIsModalOpen] = useState(false);

// - функцію:
// const toggleModal = () => {
//   setIsModalOpen(prevState => !prevState);
// };

// - приклад використання:
// {isModalOpen && (
//     <Modal toggleModal={toggleModal}>
//       {children}
//     </Modal>
//   );}

const Modal = ({ toggleModal, children }) => {

    useEffect(() => {
      const onKeyDown = event => {
        if (event.code === 'Escape') {
          toggleModal();
        }
      };
  
      document.addEventListener('keydown', onKeyDown);
  
      return () => {
        document.removeEventListener('keydown', onKeyDown);
      };
    }, [toggleModal]);
  
    const onModalOpen = event => {
      if (event.target === event.currentTarget) {
        toggleModal();
      }
    };
  
    return createPortal(
      <>
        <Backdrop onClick={onModalOpen}>
          <ModalWindow>
            <CloseBtn type="button" onClick={toggleModal}>
              {/* <CrossIcon /> */}
            </CloseBtn>
            {children}
          </ModalWindow>
        </Backdrop>
      </>,
      modalDiv
    );
  };

export default Modal;
