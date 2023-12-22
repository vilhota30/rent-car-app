import styled from 'styled-components'; 

export const CarList = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin: 0 auto;
  list-style: none;
  padding-right: 15px;
`;

export const LoadMore = styled.button`
display: flex;
justify-content: center;
margin-left: 600px;
width: 180px;
align-items: center;
padding: 4px 16px;
background-color: blue;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
color: white;
border-radius: 8px;
border: 3px solid darkblue;
text-decoration: none;
cursor: pointer;
font-size: 18px;
font-weight: 800;
height: 60px;
box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.4);
&&:hover {
background-color: darkblue;
color: blue; 
}
`;


