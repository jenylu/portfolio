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
                <p> I'm an illustrator/writer based in the Bay Area. My main art tool is Procreate but I also love 
					working with goauche, collage, and copic markers. I love drawing memories from childhood, portraits,
					and comics about fancy pigeons. I am a member of SCBWI as well as a student at {' '}
				    <a class="link" href="https://www.storytelleracademy.com/" target="_blank" rel="noreferrer">Storyteller Academy</a>, {' '}
					<a class="link" href="https://www.svslearn.com/" target="_blank" rel="noreferrer">School of Visual Storytelling</a>, and {' '}
					<a class="link" href="https://www.warriorartcamp.com/" target="_blank" rel="noreferrer">Warrior Art</a>.
					When I'm not drawing, I'm coding or rollerskating. I am currently looking for representation. 
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