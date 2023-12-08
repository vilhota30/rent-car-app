import {Outlet} from 'react-router-dom';
import React, {Suspense} from 'react';

import {Header, Nav, List, Item, LINK} from './Navigation.styled';


function Navigation() {
    return(
        <>
          <Header>
              <Nav>
                <List>
                    <Item>
                        <LINK to="/">Home Page</LINK>
                    </Item>
                    <Item>
                        <LINK to="/catalog">Catalog Page</LINK>
                    </Item>
                    <Item>
                        <LINK to="/favorite">Favorite Page</LINK>
                    </Item>
                </List>
              </Nav>
          </Header>
          <Suspense fallback={null}>
             <Outlet/>
          </Suspense>
        </>
    );
}

export default Navigation;
