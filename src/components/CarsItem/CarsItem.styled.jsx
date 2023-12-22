import styled from 'styled-components';

export const CarItemList = styled.ul`
    display: flex;
    gap: 12px;
    row-gap: 4px;
    flex-wrap: wrap;
    margin-bottom: 4px;
    max-width: 320px;
    list-style: none;
}
`;

export const CarItemCart = styled.li`
   display: flex;
   flex-direction: column;
   width: 274px;
   height: 426px;
   padding: 5px;
   border: 3px solid darkblue;
   background-color: #3F51B5;
   border-radius: 8px;
`;

export const ImageContainer = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;

  background-image: url('src/images/placeholder.jpg');
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  margin-bottom: 14px;

  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  background-color: darkblue;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

 export const BtnLearnMore = styled.button`
 display: flex;
 justify-content: center;
 width: 274px;
 height: 44px;
 padding: 12px 80px;
 color: white;
 background-color: blue;
 border-radius: 20px;
 margin-top: auto;
 font-size: 16px;
 font-weight: 400;
  &&:hover {
     color: white;
     background-color: darkblue;
  }
 `;
