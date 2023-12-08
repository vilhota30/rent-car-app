import CarsList from '../../components/CarsList/CarsList';
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";

const CarListPage = () => {
    return (
        <>
           <CarsList />
           <BtnLoadMore>Load More Data</BtnLoadMore>
        </>
    )
}

export default CarListPage;