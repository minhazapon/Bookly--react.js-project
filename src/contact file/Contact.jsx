import ContactBanner from "./ContactBanner";
import Our from "./Our";
import Que from "./Que";
import Review from '../Home files/Review'
import Post from '../Home files/Post'
import Instagram from '../Home files/Instagram'


const Contact = () => {
    return (
        <div className=" ">

            <ContactBanner></ContactBanner>
            <Que></Que>
            <Our></Our>
            <Review></Review>
            <Post></Post>
            <Instagram></Instagram>
            
        </div>
    );
};

export default Contact;