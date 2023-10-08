import "./Home.css";
import left_intro from "../assets/videos/left_intro.gif";
import right_intro from "../assets/videos/right_intro.gif";
import Button from "@mui/material/Button";
import dsa_image from "../assets/images/dsa.jpeg";
import leetcode_image from "../assets/images/leetcode_image.jpg";
import grpc_image from "../assets/images/grpc.png";
function Home() {
  function onClickHandler(link) {
    if (link === "dsa")
      window.location.href =
        "https://www.youtube.com/watch?v=UdDj8qau4WU&list=PLWiRdVW_EBIxPoK_c5br1MKWKnhRDNJIz";
    else if (link === "leedcode")
      window.location.href =
        "https://www.youtube.com/watch?v=oNzjm7TKoWM&list=PLWiRdVW_EBIx0mo-1bbD0KC_Q2Gab51CH&index=2";
    else if (link === "grpc") {
      window.location.href =
        "https://www.youtube.com/watch?v=rzWwgmhtAyc&list=PLWiRdVW_EBIzQxZhgxdYDbvaVl9YOD4FT";
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
              window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSfv66tYquRGdbwwcM7mygBQvvrHiAvDUrPITQvNy98wgo2zJg/viewform?usp=sf_link";
            }}
          >
            Access Now
          </Button>
        </div>
      </div>
      <div className="section">
        <div>
          <br />
          <h1>Courses Available</h1>
          <h3>Click on the course to learn more</h3>
          <br />
        </div>
        <div id="carddiv">
          <div className="row">
            <div className="column" onClick={() => onClickHandler("dsa")}>
              <div className="card">
                <img
                  alt="Data Structures and Algorithms"
                  src={dsa_image}
                  height={"100%"}
                  width={"100%"}
                />
                <h3>Data Structures and Algorithms</h3>
                <p>
                  We are creating the most beautiful comprehensive Data
                  Structures and Algorithms course with high-quality animation
                  videos.{" "}
                </p>
              </div>
            </div>
            <div className="column" onClick={() => onClickHandler("leetcode")}>
              <div className="card">
                <img
                  alt="Leet Code Interview Preparation"
                  src={leetcode_image}
                  height={"100%"}
                  width={"100%"}
                />
                <h3>Leet Code Interview Preparation</h3>
                <p>
                  Every programmer should build a strong foundation in
                  programming by solving problem of DSA. You'll find all that
                  and more here.
                </p>
              </div>
            </div>
            <div className="column" onClick={() => onClickHandler("grpc")}>
              <div className="card">
                <img
                  alt="Google Remote Processor Call"
                  src={grpc_image}
                  height={"100%"}
                  width={"100%"}
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
    </>
  );
}

export default Home;
