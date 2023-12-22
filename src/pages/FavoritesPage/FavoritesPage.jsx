import { Title } from "./FavoritesPage.styled";
import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/cardata/selectors";
import CarsList from "../../components/CarsList/CarsList";
import BackToTop from "components/BackToTop/BackToTop";

const FavoritePage = () => {

  const favoritedAdverts = useSelector(getFavorites);
    return (
        <>
          <Title>Favorited  Cars:</Title>
         <CarsList adverts={favoritedAdverts} />
         <BackToTop />
        </>
    )
}

export default FavoritePage;