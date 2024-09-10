import Banner from "./Home files/Banner";
import BestSelling from "./Home files/BestSelling";
import Books from "./Home files/Books";
import Categories from "./Home files/Categories";
import Discount from "./Home files/Discount";
import Information from "./Home files/Information";
import Instagram from "./Home files/Instagram";
import Post from "./Home files/Post";
import Review from "./Home files/Review";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Information></Information>
            <BestSelling></BestSelling>
            <Discount></Discount>
            <Books></Books>
            <Categories></Categories>
            <Review></Review>
            <Post></Post>
            <Instagram></Instagram>
            
        </div>
    );
};

export default Home;