import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Helmet } from 'react-helmet';
import './App.css';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import computer from './lottie/computer.json';
import Navbar from './components/Navbar';

// LOTTIE
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: computer, // Reference the correct JSON animation file (computer.json)
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function App() {
  // FRAMER MOTION
  const textVariant = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const subTextVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeInOut" } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1, ease: "easeInOut", staggerChildren: 0.2 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1, ease: "easeInOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.5 } },
  };

  const section3Variant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  // SECTION 4 ANIMATIONS
  const section4TextVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const skillCardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // SKILL CARDS
  const SkillCard = ({ imgSrc, altText, title, percentage }) => (
    <motion.div
      className="col-md-3"
      variants={skillCardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="card text-center cardBorder shadow-sm rounded p-4 hover-container"
        whileHover={{ scale: 1.05, borderColor: '#bcf002' }}
        transition={{ duration: 0.2 }}
      >
        <img src={imgSrc} alt={altText} width="60" className="mx-auto mb-3" />
        <h3 className="text-light fw-bold">{title}</h3>
        <button className="btn btn-secondary d-block mt-3 hover-button">
          {percentage}
        </button>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <Helmet><title>Home</title></Helmet>
      <Navbar />
      <section id="section1">
        <div className="container-fluid d-flex align-items-center justify-content-center p-5" style={{ height: "100vh" }}>
          <div className="row w-100 justify-content-center">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img src="../src/img/toga.jpg" alt="Profile" className="pic1 img-fluid" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column mt-5 text-md-left">
              <motion.p
                className="dharyll m-0"
                variants={textVariant}
                initial="hidden"
                animate="visible"
              >
                Hi, I'm Dharyll
              </motion.p>
              <motion.p
                className="title fs-3 roboto-thin-italic m-0"
                variants={subTextVariant}
                initial="hidden"
                animate="visible"
              >
                Aspiring IT Professional
              </motion.p>
              <motion.div
                className="mt-3"
                variants={paragraphVariant}
                initial="hidden"
                animate="visible"
              >
                <h4 className="text-light text-justify">
                  - an aspiring software developer passionate about learning and building. While I may be at the beginning of my journey, I've dedicated my time to mastering core programming concepts and creating projects as a freelance developer that showcase my growing skills.
                </h4>
              </motion.div>
              <motion.div
                className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start mt-5 gap-3"
                variants={buttonVariant}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  className="btn btn-dark fs-5 col-12 col-md-3"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <a href="/MyResume.pdf" download className="text-decoration-none">
                    <h1 className="fs-5 mt-2" style={{ color: "#bcf002" }}>
                      Download CV
                    </h1>
                  </a>
                </motion.button>
                <a href="#section2" className="btn fs-5 col-12 col-md-3 text-dark" style={{ backgroundColor: "#bcf002", textDecoration: "none" }}>
                  <h1 className='fs-5 mt-2 text-dark'>Hire Me</h1>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id='section2'>
        <div className="container-fluid p-5 ">
          <div className="container-fluid p-5 sec2 text-light">
            <div className="row">
              <motion.div
                className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="fs-4 mb-5">About Me</p>
                <h1 className="roboto-thin">
                  Professional <span style={{ color: '#bcf002' }}>Problem Solutions</span> For Digital Products
                </h1>
                <p className='roboto-thin-italic fs-5 mb-5 text-justify'>
                  I am dedicated to solving complex challenges by delivering innovative, tailor-made solutions that drive digital products forward. With a focus on efficiency and creativity, I aim to transform problems into opportunities for growth, ensuring every solution not only meets but exceeds expectations.
                </p>
                <div className="container">
                  <div className="row align-items-center justify-content-between fs-4">
                    <div className="col-md-6">
                      <p><i className="bi bi-check2" style={{ color: "#bcf002" }}></i> Frontend Development</p>
                      <p><i className="bi bi-check2" style={{ color: "#bcf002" }}></i> Backend Development</p>
                    </div>
                    <div className="col-md-6">
                      <p><i className="bi bi-check2" style={{ color: "#bcf002" }}></i> Quality Assurance</p>
                      <p><i className="bi bi-check2" style={{ color: "#bcf002" }}></i> Project Management</p>
                    </div>
                  </div>
                 
                </div>
              </motion.div>

              <motion.div
                className="col-12 col-md-6 d-flex justify-content-center align-items-center"
                variants={section3Variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Lottie
                  animationData={computer}
                  loop={true}
                  style={{ width: '100%', height: 'auto' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container-fluid p-5">
          <div className="row d-flex ">
            {/* Icon Section */}
            <motion.div
              className="col-12 col-md-3 d-flex flex-column align-items-center "
              variants={section3Variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="d-flex flex-column a">
                <i className="bi bi-braces braces"></i>
                
                <p className='text-light fs-3 '>Bachelor of Science in <span style={{ color: "#bcf002" }}>Information Technology </span ><span className='fs-6'>2020-2024</span></p>
                <p className='text-light fs-5 '>Major in <span style={{ color: "#bcf002" }}>Web and Mobile Application Development</span></p>
                <p className='text-light fs-5 '>Bulacan State University - Philippines</p>
              </div>
            </motion.div>


            {/* Text Section */}
            <motion.div
              className="col-12 col-md-9 d-flex flex-column align-items-md-start text-md-start mt-5"
              variants={section3Variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-light fs-4">My Resume</p>
              <p className="text-light fs-1">
                Real Problem Solution <span style={{ color: "#bcf002" }}>Experience</span>
              </p>

              {/* EXPERIENCE */}
              <div className="col-12 resume align-items-center justify-content-center mb-3">
                <div className="row expands mb-3">
                  {/* First Entry */}
                  <motion.div
                    className="col-12 col-md-6 text-light exp mb-5"
                    variants={section3Variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle-fill check me-3"></i>
                      <p className="fs-5 mb-0">7/24 - Present</p>
                    </div>
                    <h1 className="fs-5 mt-2" style={{ color: "#bcf002" }}>Freelance Developer</h1>
                  </motion.div>

                  {/* Second Entry */}
                  <motion.div
                    className="col-12 col-md-6 text-light exp mb-5"
                    variants={section3Variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle check me-3"></i>
                      <p className="fs-5 mb-0">2/24 - 5/24 / Internship</p>
                    </div>
                    
                    {/* Downloadable title */}
                    <a href="/CICT-Files.pdf" download className="text-decoration-none">
                      <h1 className="fs-5 mt-2" style={{ color: "#bcf002" }}>
                        CICT Files - Backend Developer
                      </h1>
                    </a>

                    <p className="text-justify">
                      CICT Faculty Profiling System is a web-based program created to organize and keep track of specific information about faculty members at Bulacan State University, College of Information Communication Technology.
                    </p>
                    
                    <div className="d-flex flex-wrap">
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">PHP</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">JavaScript</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">AJAX</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">JQuery</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">Tailwind</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">MySQL</div>
                    </div>
                  </motion.div>


                  {/* Third Entry */}
                  <motion.div
                    className="col-12 col-md-6 text-light exp mb-5"
                    variants={section3Variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle check me-3"></i>
                      <p className="fs-5 mb-0">2/24 - 5/24 / Internship</p>
                    </div>
                    <a href="/CICT-RRS.pdf" download className="text-decoration-none">
                      <h1 className="fs-5 mt-2" style={{ color: "#bcf002" }}>
                        CICT RRS - Backend Developer
                      </h1>
                    </a>
                    <p className="text-justify">
                      A Repository system that ensures long-term digital preservation and provides open access to the materials, potentially increasing their impact and facilitating future research.
                    </p>
                    <div className="d-flex flex-wrap">
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">PHP</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">JavaScript</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">AJAX</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">JQuery</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">Tailwind</div>
                      <div className="badge bg-secondary text-light me-1 fs-6 mb-1">MySQL</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="container-fluid p-5">
          <div className="container-fluid p-5 sec2 text-light">
            <div className="row d-flex align-items-center">
              <motion.div
                className="col-md-5 align-items-center"
                variants={section4TextVariant}
                initial="hidden"
                animate="visible"
              >
                <p className="fs-4 mb-5">My Skills</p>
                <h1 className='text-light'>
                  Let's Explore My Popular <span style={{ color: "#bcf002" }}>Skills & Experience</span>
                </h1>
                <motion.p
                  className="text-light text-justify"
                  variants={paragraphVariant}
                  initial="hidden"
                  animate="visible"
                >
                  I am a web development professional with expertise in building dynamic and responsive websites. My front-end skills include HTML, CSS, and JavaScript, along with frameworks like React to create engaging user interfaces. On the back-end, I work with PHP, utilizing MySQL databases to build scalable applications.
                </motion.p>
              </motion.div>

              <motion.div
                className="col-md-7 mb-5"
                variants={section4TextVariant}
                initial="hidden"
                animate="visible"
              >
                <div className="row g-4">
                  <SkillCard imgSrc="../src/img/php.png" altText="Skill Logo" title="PHP" percentage="80%" />
                  <SkillCard imgSrc="../src/img/react.png" altText="Skill Logo" title="React JS" percentage="70%" />
                  <SkillCard imgSrc="../src/img/sql.png" altText="Skill Logo" title="MySQL" percentage="90%" />
                  <SkillCard imgSrc="../src/img/js.png" altText="Skill Logo" title="JavaScript" percentage="75%" />
                  <SkillCard imgSrc="../src/img/ajax.png" altText="Skill Logo" title="AJAX" percentage="85%" />
                  <SkillCard imgSrc="../src/img/jquery.png" altText="Skill Logo" title="JQuery" percentage="85%" />
                  <SkillCard imgSrc="../src/img/css.png" altText="Skill Logo" title="CSS" percentage="80%" />
                  <SkillCard imgSrc="../src/img/html.png" altText="Skill Logo" title="HTML" percentage="80%" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <div className="container-fluid footer bg-primary text-light p-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <span className='footerBraces'>{'</>'}</span> 
            <h1 className='text-light roboto-thin-italic mb-5'>Dharyll R. Flores</h1> 
          </div>

          <div className="col-md-3 text-light mb-5">
            <h3 className='mb-3'>My Contact</h3>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <p className="mb-0">Email: floresdharyll0731@gmail.com</p>
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-telephone-plus me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <p className="mb-0">Phone: +63 993 238 2375</p>
            </div>

            <div className="d-flex align-items-center">
              <i className="bi bi-map me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <p className="mb-0">Location: 3002 Bulacan, Philippines</p>
            </div>
          </div>

          <div className="col-md-3 text-light">
             <h3 className='mb-3'>Socials</h3>
             <div className="d-flex align-items-center mb-3">
              <i className="bi bi-linkedin me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <a href="https://www.linkedin.com/in/dharyll-flores-8241382a3/" className='text-light '>https://www.linkedin.com/in/dharyll-flores-8241382a3/</a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-facebook me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <a href="https://www.facebook.com/Dharyll0731" className='text-light '>https://www.facebook.com/Dharyll0731/</a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-twitter-x me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <a href="https://twitter.com/_dhaaaaaryll" className='text-light '>https://twitter.com/_dhaaaaaryll</a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-instagram me-2 fs-3" style={{ color: "#bcf002" }}></i>
              <a href="https://www.instagram.com/_dhaaaaaryll/" className='text-light '>https://www.instagram.com/_dhaaaaaryll/</a>
            </div>
          </div>
        </div>

        <div className="text-center footer pt-3 mt-3 border-top border-light">
          <p className="mb-0" >&copy; 2024 Dharyll R. Flores. All Rights Reserved.</p>
        </div>
    </div>


     


    </>
  );
}

export default App;
