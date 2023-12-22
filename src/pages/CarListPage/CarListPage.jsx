import CarsList from '../../components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
// import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import Loader from 'components/Loader/Loader';
import BackToTop from 'components/BackToTop/BackToTop';
import setFilterParams from 'components/helpers/Params';
import {fetchAdverts, getCarModel} from "../../redux/cardata/operations";
import { emptyAdvertList } from '../../redux/cardata/carSlice';
import { getAdverts } from '../../redux/cardata/selectors';
import { getIsLoading } from '../../redux/cardata/selectors';
// import { getPagesEnd } from '../../redux/cardata/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


const CarListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState(null);
    const itemsOnPage = 12;
    
    
    const adverts = useSelector(getAdverts);
    console.log(adverts);
    const loading = useSelector(getIsLoading);
    // const pagesEnd = useSelector(getPagesEnd);
    
    // console.log(pagesEnd);
    
    const dispatch = useDispatch();

      const acceptFilter = (newFilter) => {
          if (newFilter === filter) {
              return
          }
          dispatch(emptyAdvertList())
          setFilter(newFilter)
          setCurrentPage(1)
     };

    useEffect(() => {
        dispatch(emptyAdvertList())
        dispatch(getCarModel())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAdverts(setFilterParams(itemsOnPage, currentPage, filter)))
    }, [filter, dispatch, currentPage])


    return (
        <>
            {loading && <Loader />}
              <Filter acceptFilter={acceptFilter} /> 
            {(adverts.length < 1) && !loading && <p>There is no adverts that matches filters, try to change them!</p>}
            <CarsList adverts={adverts}/>
             {/* { !pagesEnd && !loading && <BtnLoadMore callbackFunction={() => setCurrentPage(currentPage + 1)} />} */}
            <BackToTop />
        </>
    )
}

export default CarListPage;