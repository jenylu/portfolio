import { useEffect } from 'react';
import '../styles/About.css';

function About() {
    useEffect(() => {
        document.title = 'Jennifer Lu | About';
      }, []);

    return (
        <div className="blurb">
            <div className="meImage">
                <img src="./images/about/me.jpg" alt="me" />
            </div>

            <div className="meBlurb">
                <h1 className="about-title">Hi, I'm Jennifer!</h1>
                <br />
                <p> I'm an illustrator/writer living in San Francisco. 
                    I like creating art that is heartwarming, funny, and relatable. 
                    I also love drawing street fashion, portraits, and comics about fancy pigeons. 
                    I am a member of SCBWI as well as a student at {' '}
				    <a class="link" href="https://www.storytelleracademy.com/" target="_blank" rel="noreferrer">Storyteller Academy</a>, {' '}
					<a class="link" href="https://www.svslearn.com/" target="_blank" rel="noreferrer">School of Visual Storytelling</a>, and {' '}
					<a class="link" href="https://www.warriorartcamp.com/" target="_blank" rel="noreferrer">Warrior Art Camp</a>.
					When I'm not drawing, I'm coding or rollerskating. 
                </p>
                <p>
                    I've loved to draw since I was a kid, a fact that was further solidified 
                    by the third grade when we had to choose what we wanted to be when we grew up
                    and I said "a mom" and my mom said "no that isn't what they mean", and I said
                    "fine then an artist". By high school it became clear that my parents did not 
                    actually want me to be an artist even though I had been taking classes up to this point
                    so I entered college as an Econ major before
                    switching to Computer Science because of an initial desire to try to pursue
                    Animation. Ironically art led me to CS but I learned that Computer Graphics is really 
                    mostly about math
                    and that actually it was the drawing part of animation that I wanted to do.
                    I was on and off doodling in my sketchbook throughout this time until Covid hit 
                    and a Facebook ad led me to Storyteller Academy. I discovered that children's illustration
                    was another potential avenue that I could go and loved doing. Stories and art have been the 
                    two things that I've always enjoyed making and since then I've focused on building my portfolio
                    (as said above).
                </p>
                <p>
                    My main art tool is Procreate but I also love working with goauche, collage, and copic markers.          
                    <b> I am currently looking for representation. </b>
                </p>
                <br />
                <p> Contact me at <a className="link" href="mailto: lu.jennifer@outlook.com">lu.jennifer@outlook.com</a> </p>
                <br />
                <p> To see more of my art journey, check out my Instagram account {' '}
                    <a className="link" href="https://www.instagram.com/lunaludraws" target="_blank" rel="noreferrer">
                        @lunaludraws 
                    </a>. 
                </p>
            </div>
        </div>
    );
}

export default About;