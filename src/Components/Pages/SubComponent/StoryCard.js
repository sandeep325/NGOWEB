import React from "react";
import { Link } from "react-router-dom";
const StoryCard = () => {
    return (
        <>
            <div class="featured-section overlay-color-2" style={{backgroundImage: "url('images/bg_3.jpg')"}}>

                <div class="container">
                    <div class="row">

                        <div class="col-md-6">
                            <img src="images/bg_3.jpg" alt="Image placeholder" class="img-fluid" />
                        </div>

                        <div class="col-md-6 pl-md-5">
                            <span class="featured-text d-block mb-3">Success Stories</span>
                            <h2>Water Is Life. We Successfuly Provide Clean Water in South East Asia</h2>
                            <p class="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span class="fund-raised d-block mb-5">We have raised $100,000</span>

                            <p><Link to="#" class="btn btn-success btn-hover-white py-3 px-5">Read The Full Story</Link></p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}
export default StoryCard;
