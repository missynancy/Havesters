import React from "react";
import image1 from '/public/ovacado.jpg'
import image2 from '/public/about.jpg'

function Home () {
    return(
        <home>
            <main>
                <img src={image1} />
                <div className="intro">
                    <h1>Your Ovacado Harvesting Experts</h1>
                    <p>We specialize in high-quality ovacado harvesting.</p>
                    <button>Learn More</button>
                </div>
            </main>
            <div className="about">
                <h1>About Us</h1>
                <about>
                    <img src={image2} />
                    <div className="about-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt doloremque explicabo maxime neque quia excepturi. Odit delectus blanditiis quidem a quisquam quas! Laborum quo aut, impedit fuga omnis animi.
                    </div>
                </about>
            </div>
        </home>
    )
}

export default Home