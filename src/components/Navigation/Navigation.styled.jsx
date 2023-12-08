import styled from "styled-components";
import { NavLink} from 'react-router-dom';

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
pagging: 10px 10px;
margin-bottom: 20px;
margin-top: 20px;
border-bottom: 1px solid blue;
position: relative;
background-color: cornflowerblue;
border-radius: 20px;
`;

export const Nav = styled.nav`
display: flex;
justify-content: center;
margin-top: 5px;
`;

export const LINK = styled(NavLink)`
padding: 8px 14px;
border-radius: 4px;
text-decoration: none;
color: black;

&&.active{
    color: white;
    background-color: darkblue;
}

&&:not(:last-child) {
    margin-right: 10px;
}
`;

export const Item = styled.li`
margin: 0 10px;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
list-style: none;
padding: 0;
margin-bottom: 10px;
`;