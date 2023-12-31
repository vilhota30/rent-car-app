import styled from "styled-components";

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: #51515199;
   overflow-y: scroll;
   z-index: 101;
 `;
export const CarModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(18, 20, 23, 0.50);
`;

export const DataContainer = styled.div`
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 541px;
    height: 632px;
    border-radius: 24px;
    border: 3px solid black;
    background-color: white;
    z-index: 101;
`;

export const ImageContainer = styled.div`
    
    margin-right: auto;
    margin-left: auto; 
    width: 450px;
    height: 220px;
    border-radius: 14px;
    background-image: url('../../../images/placeholder');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    margin-bottom: 14px;
`;

export const Image = styled.img`
    // width: 100%;
    // height: 100%;
    margin-right: auto;
    margin-left: auto; 
    width: 450px;
    height: 220px;
    border-radius: 14px;
    object-fit: cover;
    background-image: url('../../../images/placeholder.jpg');
    background-color: antiquewhite;
    
`;

export const Header = styled.h2`
   font-size: 24px;
   font-weight: 500;
   line-height: 24px;
   margin-bottom: 8px;
`;

export const AccessoriesList = styled.ul`
    display: flex;
    gap: 12px;
    row-gap: 4px;
    flex-wrap: wrap;
    margin-bottom: 4px;
    list-style: none;
`;

export const Description = styled.p`
margin-bottom: 24px;
`;


export const RentalHeader = styled.h2`
color: #121417;
font-weight: 500;
line-height: 20px;
margin-bottom: 8px;
font-size: 20px;
`;

export const RentalList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

export const RentalLi = styled.li`
   padding: 7px 14px;
   border-radius: 35px;
   background: #F9F9F9;
   font-size: 12px;
`;

export const BtnRentCar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    width: 160px;
    height: 30px;
    color: white;
    background-color: blue;
    border-radius: 8px;
    max-width: 168px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    &&:hover {
        background-color: darkblue;
        color: white; 
    }
`; 

export const CloseButton = styled.button`
    display: inline-block;
    margin-left: 500px;
    border: none;
    color: white;
    outline: none;
    background-color: darkblue;
    border-radius: 8px;
    height: 24px;
    &&:hover {
        color: white;
        background-color: blue;
        border: 3px solid dakrlue;
    }
`;



