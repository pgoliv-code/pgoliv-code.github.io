import profilePic from '../../assets/img/pris.jpg';
import htmlLogo from '../../assets/icon/html.png';
import cssLogo from '../../assets/icon/css.png';
import jsLogo from '../../assets/icon/javascript.jpg';
import reactLogo from '../../assets/icon/react.js.png';
import javaLogo from '../../assets/icon/java.png';
import linkedinLogo from '../../assets/icon/linkedin.png';
import githubLogo from '../../assets/icon/github.png';

function LandingPage () {
    return (
        <main>
            <img className="picture" src={profilePic} alt="Me, Priscila Oliveira's picture" />
            <div className="greetings">
                <h1 className="message">Hello stranger 👋</h1>
                <p className="bio">I'm Priscila, Full Stack Dev based in Barcelona.</p>
            </div>
            <hr />
            <section className="studies-section">
                <p>What I've learned so far:</p>
                <div className="studies-logos">
                    <img className="languages-logos" src={htmlLogo} alt="logo of the HTML language" />
                    <img className="languages-logos" src={cssLogo} alt="logo of the CSS language" />
                    <img className="javascript" src={jsLogo} alt="logo of the JS language" />
                    <img className="react" src={reactLogo} alt="logo of the React framework" />
                    <img className="java" src={javaLogo} alt="logo of the JAVA language" />
                </div>
            </section>
            <hr />
            <section className="links-social-media">
                <a href="https://www.linkedin.com/in/priscilaguillen/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-logo" src={linkedinLogo} alt="LinkedIn logo" />
                </a>
                <a href="http://github.com/pgoliv-code/" target="_blank" rel="noopener noreferrer">
                    <img className="github-logo" src={githubLogo} alt="GitHub logo" />
                </a>
            </section>
        </main>
    )
}

export default LandingPage;