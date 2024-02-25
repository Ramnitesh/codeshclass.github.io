import "./Home.css";
import left_intro from "../assets/videos/left_intro.gif";
import right_intro from "../assets/videos/right_intro.gif";
import Button from "@mui/material/Button";
import dsa_image from "../assets/images/dsa.jpeg";
import leetcode_image from "../assets/images/leetcode_image.jpg";
import grpc_image from "../assets/images/grpc.png";
import soniya_image from "../assets/images/team-soniya.jpeg";
import nitesh_image from "../assets/images/team-nitesh.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import resume_soniya from "../assets/files/soniyafarodaresume.pdf";
import resume_ramnitesh from "../assets/files/ramniteshsaranresume.pdf";
function Home() {
  function onClickHandler(link) {
    if (link === "dsa")
      window.open(
        "https://www.youtube.com/watch?v=UdDj8qau4WU&list=PLWiRdVW_EBIxPoK_c5br1MKWKnhRDNJIz"
      );
    else if (link === "leetcode")
      window.open(
        "https://www.youtube.com/playlist?list=PLWiRdVW_EBIx0mo-1bbD0KC_Q2Gab51CH"
      );
    else if (link === "grpc") {
      window.open(
        "https://www.youtube.com/watch?v=rzWwgmhtAyc&list=PLWiRdVW_EBIzQxZhgxdYDbvaVl9YOD4FT"
      );
    } else if (link === "soniya") {
      window.open("https://www.linkedin.com/in/soniyafaroda");
    } else if (link === "ramnitesh") {
      window.open("https://www.linkedin.com/in/rnsaran");
    } else if (link === "ramniteshgithub") {
      window.open("https://github.com/ramnitesh");
    } else if (link === "soniyagithub") {
      window.open("https://github.com/soniyafaroda");
    } else if (link === "ramnitesh_resume") {
      window.open(resume_ramnitesh);
    } else if (link === "soniya_resume") {
      window.open(resume_soniya);
    }
  }
  return (
    <>
      <div className="container">
        <div>
          <img
            className="intro_img"
            alt="intro video"
            src={left_intro}
            width="50%"
            height="600px"
            style={{ opacity: "50%" }}
          />
          <img
            className="intro_img"
            alt="intro video"
            src={right_intro}
            width="50%"
            height="600px"
            style={{ opacity: "50%" }}
          />
        </div>
        <div className="centered">
          <h2 id="header" style={{ fontWeight: 600 }}>
            High Quality Coding Videos
          </h2>
          <label style={{ fontSize: "large" }}>
            Code Foundations | Leet Code | Interview Preparations
          </label>
          <br />
          <label style={{ fontSize: "15px" }}>
            Get your Codesh Class All-Access Pass today
          </label>{" "}
          <br />
          <Button
            style={{ fontWeight: 800 }}
            variant="contained"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfv66tYquRGdbwwcM7mygBQvvrHiAvDUrPITQvNy98wgo2zJg/viewform?usp=sf_link"
              );
            }}
          >
            Access Now
          </Button>
        </div>
      </div>
      <div className="section section-course">
        <div>
          <h1>Courses Available</h1>
          <p>Click on the course to learn more</p>
          <br />
          <br />
        </div>
        <div className="card-container">
          <div className="row">
            <div className="column">
              <div className="card">
                <img
                  className="course-img"
                  alt="Data Structures and Algorithms"
                  src={dsa_image}
                  height={"100%"}
                  width={"100%"}
                  onClick={() => onClickHandler("dsa")}
                />
                <h3>Data Structures and Algorithms</h3>
                <p>
                  We are creating the most beautiful comprehensive Data
                  Structures and Algorithms course with high-quality animation
                  videos.{" "}
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img
                  className="course-img"
                  alt="Leet Code Interview Preparation"
                  src={leetcode_image}
                  height={"100%"}
                  width={"100%"}
                  onClick={() => onClickHandler("leetcode")}
                />
                <h3>Leet Code Interview Preparation</h3>
                <p>
                  Every programmer should build a strong foundation in
                  programming by solving problem of DSA. You'll find all that
                  and more here.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img
                  className="course-img"
                  alt="Google Remote Processor Call"
                  src={grpc_image}
                  height={"100%"}
                  width={"100%"}
                  onClick={() => onClickHandler("grpc")}
                />
                <h3>Google Remote Processor Call</h3>
                <p>
                  If you work at a big tech company, chances are you'll have to
                  use another tech service no matter what job title you have.
                  Get started with gRPC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-team">
        <div>
          <h1>Our Team</h1>
          <p>
            Our team is a group of individuals working together to achieve our
            goal of providing
            <br /> high-quality coding videos and mentoring to student <br />{" "}
            without any social distraction.
          </p>
        </div>
        <div className="card-container">
          <div className="row">
            <div className="column">
              <div className="card card-team">
                <img
                  alt="Google Remote Processor Call"
                  src={nitesh_image}
                  height={"50%"}
                  width={"50%"}
                  style={{ borderRadius: "50%" }}
                />
                <h3>Ramnitesh Saran</h3>
                <small>Senior Software Developer - Ex @Siemens</small>
                <br />
                <br />
                <div>
                  <Button
                    onClick={() => onClickHandler("ramnitesh")}
                    style={{ color: "white" }}
                  >
                    <LinkedInIcon style={{ fontSize: 25, paddingInline: 10 }} />
                  </Button>{" "}
                  <Button
                    onClick={() => onClickHandler("ramniteshgithub")}
                    style={{ color: "white" }}
                  >
                    <GitHubIcon />
                  </Button>
                </div>
                <br />
                <Button
                  onClick={() => onClickHandler("ramnitesh_saran_resume")}
                  variant="outlined"
                  style={{ borderRadius: 20 }}
                >
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="column">
              <div className="card card-team">
                <img
                  alt="Google Remote Processor Call"
                  src={soniya_image}
                  height={"50%"}
                  width={"50%"}
                  style={{ borderRadius: "50%" }}
                />
                <h3>Soniya Faroda</h3>
                <small>Fresher - ReactJS Developer (MERN Stack) </small>

                <br />
                <br />
                <div>
                  <Button
                    onClick={() => onClickHandler("soniya")}
                    style={{ color: "white" }}
                  >
                    <LinkedInIcon style={{ fontSize: 25, paddingInline: 10 }} />
                  </Button>{" "}
                  <Button
                    onClick={() => onClickHandler("soniyagithub")}
                    style={{ color: "white" }}
                  >
                    <GitHubIcon />
                  </Button>
                </div>
                <br />
                <Button
                  onClick={() => onClickHandler("soniya_faroda_resume")}
                  variant="outlined"
                  style={{ borderRadius: 20 }}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
