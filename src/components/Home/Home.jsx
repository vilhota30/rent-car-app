import { HomeContainer, HomeWrapper, Header } from "./Home.styled";
import car from '../../images/carphoto.jpg';
const MainPage = () => {

    return (
        <>
           <HomeWrapper>
             <HomeContainer style={{ backgroundImage: `url(${car})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "427px", width: "640px", border: "2px solid black", borderRadius: "8px"}}>
                <Header>We know what you need</Header>
             </HomeContainer>
           </HomeWrapper>
        </>
    )  
}
export default MainPage;