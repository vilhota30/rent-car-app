import CarsList from '../../components/CarsList/CarsList';
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import { useSelector } from 'react-redux';

const CarListPage = () => {

    const adverts = useSelector(state => state.adverts);

    return (
        <>
           <CarsList adverts={adverts}/>
           <BtnLoadMore>Load More Data</BtnLoadMore>
        </>
    )
}

export default CarListPage;