import Banner from "./Home files/Banner";
import BestSelling from "./Home files/BestSelling";
import Books from "./Home files/Books";
import Discount from "./Home files/Discount";
import Information from "./Home files/Information";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Information></Information>
            <BestSelling></BestSelling>
            <Discount></Discount>
            <Books></Books>
            
        </div>
    );
};

export default Home;