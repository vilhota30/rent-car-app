import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux'
import DropdownInput from '../DropdownInput/DropdownInput';
import RangeInput from '../RangeInput/RangeInput';
import PricesFilter from 'components/helpers/PricesFilter';
import { getModelCar } from '../../redux/cardata/selectors';

function Filter({ acceptFilter }) {
     const [filterInitState, setFilterInitState] = useState({
         make: '',
         maxPrice: '',
         minMileage: null,
         maxMileage: null,
     })
    
     const modelCarOptions = useSelector(getModelCar);
     const pricesOptions = PricesFilter(10, 100, 10)
    // const brandsOptions = useSelector(state => state.adverts.brands)

     const onFilterChange = useCallback(
         (value) => {
             setFilterInitState((state) => ({
                 ...state,
                 ...value
             }));
         },
         [setFilterInitState]
     );



     const onFilterSet = () => {
         if (filterInitState.minMileage > filterInitState.maxMileage && filterInitState.maxMileage) {
             return alert('Minimum milage cannot be higher than maximum milage')
         }
         acceptFilter(filterInitState)
    }

    return (
        <div style={{display: "flex", flexFlow: "row", marginBottom: "10px"}}>
               <DropdownInput 
                options={modelCarOptions}
                name={'make'}
                onChange={onFilterChange}
                label='Car brand' />
                 <DropdownInput
                options={pricesOptions}
                name={'maxPrice'}
                onChange={onFilterChange}
                placeholder={'To $'}
                label='Price / 1 hour' />
             <RangeInput label={'Сar mileage / km'} maxName={'maxMileage'} minName={'minMileage'} onChange={onFilterChange} />
            <button style={{color: "white", backgroundColor: "blue", width: "280px", height: "30px", borderRadius: "8px", alignItems: "center", marginTop: "35px"}} onClick={() => onFilterSet(filterInitState)}>Search</button>
        </div>
    )
}

export default Filter;


