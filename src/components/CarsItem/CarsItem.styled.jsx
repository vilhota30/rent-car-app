import styled from 'styled-components';

export const CarItemCart = styled.li`
   display: flex;
   flex-direction: column;
   width: 274px;
   height: 426px;
   padding: 5px;
   border: 2px solid blue;
   border-radius: 8px;
`;

export const CarImage = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  background-color: darkblue;
  margin-bottom: 5px;
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
 `;
