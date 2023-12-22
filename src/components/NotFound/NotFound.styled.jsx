import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 300px;
`;

export const Header = styled.h2`
display: flex;
margin-right: 6px;
font-weight: 700;
font-size: 24px;
color: darkblue;
`;
export const Button = styled.button`
display: inline-block;
padding: 4px 12px;
background-color: blue;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
color: white;
border: 3px solid darkblue;
border-radius: 8px;
text-decoration: none;
cursor: pointer;
font-size: 18px;
font-weight: 800;
width: 180px;
height: 60px;
box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.4);
&&:hover {
background-color: darkblue;
color: blue; 
}`;

export const Link = styled(NavLink)`
color: white;
`;