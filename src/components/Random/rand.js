import React from 'react';
import Joke from '../../json/jokes.json';
import image1 from "../../assets/funny-food.jpeg";
import image2 from "../../assets/funny-food2.jpeg";
import image3 from "../../assets/funny-food3.jpeg";
import image4 from "../../assets/funny-food4.jpeg";
import image5 from "../../assets/funny-food5.jpeg";
import image6 from "../../assets/funny-food6.jpeg";
import image7 from "../../assets/funny-food7.jpeg";
import image8 from "../../assets/funny-food8.jpeg";
import image9 from "../../assets/funny-food9.jpeg";
import image10 from "../../assets/funny-food10.jpeg";
import image11 from "../../assets/funny-food11.jpeg";
import image12 from "../../assets/funny-food12.jpeg";
import image13 from "../../assets/funny-food13.jpeg";
import image14 from "../../assets/funny-food14.jpeg";
import image15 from "../../assets/potato.jpeg";



const joke = Joke[Math.floor(Math.random() * Joke.length)].content;
const imageArr = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
const imageSelected = imageArr[Math.floor(Math.random() * imageArr.length)]

const Rand = props => (
        <div className="randDiv">
            <h4>{joke}</h4>
            <img src={imageSelected} alt="Funny food pic"></img>
        </div>
)

export default Rand;