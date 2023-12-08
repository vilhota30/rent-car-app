import styled from "styled-components";

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
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 540px;
    border-radius: 24px;
    background-color: white;
    z-index: 101;
`;

export const ImageContainer = styled.div`
    width: 460px;
    height: 248px;
    border-radius: 14px;
    background-image: url(../../images/listing_vehicle_placeholder.jpg);
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    margin-bottom: 14px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Header = styled.h2`
   font-size: 18px;
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
`;

export const RentalHeader = styled.h2`
color: #121417;
font-weight: 500;
line-height: 20px;
margin-bottom: 8px;
font-size: 14px;
`;

export const RentalList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const RentalLi = styled.li`
   padding: 7px 14px;
   border-radius: 35px;
   background: #F9F9F9;
   font-size: 12px;
`;



