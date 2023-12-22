import { LoadMore } from "./BtnLoadMore.styled";

 const BtnLoadMore = ({callbackFunction}) => {
    <>
       <LoadMore onClick={callbackFunction}>Load More</LoadMore>
    </>
}

export default BtnLoadMore;