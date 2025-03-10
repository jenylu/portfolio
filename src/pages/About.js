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
                <p> I'm an illustrator and writer living in San Francisco. 
                    I like creating art that is heartwarming, funny, and relatable. I am inspired by street fashion 
                    and street pigeons (for my comics). Outside of digital work, I enjoy experimenting with cut-paper 
                    collage as well as mixed-media in my travel sketchbook.
                    I am a member of SCBWI and volunteer as the Social Media Coordinator for the
                    SF/South Bay branch. 
                    I was a student at {' '}
				    <a class="link" href="https://www.storytelleracademy.com/" target="_blank" rel="noreferrer">Storyteller Academy</a>, {' '}
					<a class="link" href="https://www.svslearn.com/" target="_blank" rel="noreferrer">School of Visual Storytelling</a>, and {' '}
					<a class="link" href="https://www.warriorartcamp.com/" target="_blank" rel="noreferrer">Warrior Art Camp</a>.
                    In 2023, I won the SCBWI July #DrawThis challenge. 
					When I'm not drawing, you can find me coding or rollerskating. 
                </p>
                <br />
                <p>
                    <b> I am currently looking for representation. </b>
                </p>
                <p> Contact me at <a className="link" href="mailto: jenlucreates@gmail.com">jenlucreates@gmail.com</a> </p>
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