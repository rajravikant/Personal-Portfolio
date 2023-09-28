import logo from "./logo.png";
import my from "./myImg.png";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import ProjectC from "./components/ProjectC";
import project1 from "./Screen.png";
import project2 from "./project2.png";
import project3 from "./images/headphones.jpg";


function App() {
  return (
    <>
    <Navbar/>
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="intro">
              <p className="greet">Namaste,Im </p>
              <h1 className="name">Ravikant</h1>
              <p>React.js and front end developer</p>
              <button className="btn-know">About Me</button>

              <div className="creator-contact">
                <ul className="contact-links">
                  <li>
                    <a href="https://www.facebook.com">
                      <ion-icon
                        name="logo-facebook"
                        className="f-logo"
                      ></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <ion-icon
                        name="logo-instagram"
                        className="f-logo"
                      ></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <ion-icon
                        name="logo-twitter"
                        className="f-logo"
                      ></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rajravikant">
                      <ion-icon
                        name="logo-github"
                        className="f-logo"
                      ></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="myimage">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </section>

        <section className="section-about" id="section-about">
          <div className="heading">
            <h1>About Me</h1>
            <span>the journey so far</span>
          </div>

          

          <div className="content">

            <div className = "picture" >
                <img src={my} alt="my" />
            </div>

            <div className = "about-me">

           
            <p>
              Hello, I'm Ravikant Raj, a passionate and dedicated computer
              science and engineering student currently in my second year of
              study. With a strong foundation in programming languages like C,
              C++, and Java, along with proficiency in front-end development and
              Windows app development.
            </p>
            <p>
              During my academic journey, I have not only honed my technical
              skills but also developed a deep passion for creating seamless and
              user-friendly digital experiences. I take pride in crafting
              elegant front-end solutions that captivate users while ensuring
              smooth functionality. In addition to my front-end expertise, I
              have delved into the world of Windows app development, allowing me
              to create innovative applications that cater to the needs of
              Windows users.
            </p>

            <p>
              My ultimate goal is to become a well-rounded full-stack developer,
              capable of building robust and scalable web applications from end
              to end. I am eager to expand my knowledge in server-side
              programming, database management, and the latest web technologies
              to achieve this ambition.
            </p>
            </div>
          </div>
        </section>

        <section className="section-skills" id="section-skills">

          <div className="heading">
            <h1>My Projects</h1>
            <span>Project and Ideas</span>
          </div>

          <div className="container">
           <ProjectCards 
           title = "MyHealth Stats" 
           art = {project1} 
           descri = "MyHealthStats is an engaging and informative fitness website designed to empower individuals on their journey to a healthier and more active lifestyle.Dedicated to provide valuable resources, expert advice,and a supportive community to help users achieve their fitness goals."/>

           <ProjectC  title = "AVI Studio" art = {project2} descri = "Media Player includes full support for browsing, managing, and watching our local video collection too. All the content in the music and video folders on our PC will appear automatically in our library. "/>
           <ProjectCards title = "Clip2Tune" art = {project3} descri = "Youtube to audio converter web based application developed is reactjs"/>
           


          </div>
        </section>

        <section className="section-ski">
          <div className="heading">
            <h1>My Skills</h1>
            <span>What i do</span>
          </div>
          <div className="container">

              <div className="frontend">
                <img src={require('./images/programming.png')} alt="lang" height={80} />
                <h4>Languages</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Java</li>
                  <li>C/C++</li>
                </ul>
              </div>
              <div className="frontend">
                <img src={require('./images/framework.png')} alt="lang" height={80} />
                <h4>Frameworks</h4>
                <ul>
                  <li>Reactjs</li>
                  <li>Nextjs</li>
                  <li>Bootstrap</li>
                  <li>.Net</li>
                </ul>
              </div>
              <div className="frontend">
                <img src={require('./images/technical-support.png')} alt="lang" height={80} />
                <h4>Tools</h4>
                <ul>
                  <li>VS Code</li>
                  <li>Gitub</li>
                  <li>Firebase</li>
                  <li>npm</li>
                  <li>yarn</li>
                  
                </ul>
              </div>
          </div>
        </section>

        <section className="section-contact" id="section-contact">
        <div className="heading">
            <h1>Contact Me</h1>
            <span>Reach me out</span>
          </div>

          <div className="container">
            <div className="details">
                  <p>
                  I'm excited about the opportunities that lie ahead, and I'm always
                  eager to connect with like-minded individuals and organizations.
                  Whether you're looking for a front-end developer, a Windows app
                  developer, or a versatile coder ready to take on full-stack
                  challenges, I'm here to contribute my skills and knowledge to your
                  projects. Feel free to explore my portfolio to see some of my past
                  work, and don't hesitate to get in touch if you'd like to discuss
                  potential collaborations or just chat about technology and
                  development. Thank you for visiting my portfolio, and I look forward
                  to connecting with you soon!
                </p>
            </div>

            <div className="contact">
            <form action="#">
          
              <input type="text" name="username" id="" required placeholder="Name"/>
              <input  type="email" name="email" required placeholder="Email" autocomplete="false"/>
                <textarea name="message" id="txtarea" placeholder="Message" rows={5}></textarea>
              <input type="submit" value="send message" class="btnsubmit" />
             
            </form>
            </div>
          </div>


          
        </section>
      </main>
    </>
  );
}

export default App;
