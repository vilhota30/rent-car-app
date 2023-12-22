  import React from 'react'
  import { BtnLike } from './BtnLikeCar.styled';
  import {ReactComponent as BtnNormal} from '../svg/normal.svg';
  import {ReactComponent as BtnActive} from '../svg/active.svg';

  const BtnLikeCar = ( { buttonState, callbackFunction } ) => {

    return (
          <BtnLike onClick={() => callbackFunction()}>
            {
                buttonState ? <BtnActive /> : <BtnNormal />
            }
          </BtnLike>
    );
  };

export default BtnLikeCar;
