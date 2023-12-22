import styled from "styled-components";

export const Dropdown = styled.div`
position: relative;
`;

export const Input = styled.input`
width: 100%;
padding: 14px 18px;
border-radius: 14px;
background: #F7F7FB;
border: none;
outline: none;

cursor: pointer;

text-align: start;
font-size: 18px;
font-weight: 500;
line-height: 22px;
color: #121417;
`;

export const List = styled.ul`
position: absolute;
z-index: 1000;
top: 110%;
left: 0;
right: 0;

background-color: mediumslateblue;
border-bottom-left-radius: 14px;
border-top-left-radius: 14px;

border: 1px solid rgba(18, 20, 23, 0.05);
overflow: auto;
`;

export const Item = styled.li`
color: black;
// list-style: none;
font-weight: 600;
padding: 5px 10px;
cursor: pointer;
font-size: 16px;
`

export const Label = styled.label`
display: block;
font-weight: 500;
color: black;
margin-bottom: 8px;
`;

