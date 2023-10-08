import "./Home.css";
import video from "../assets/images/video.gif";
import Button from '@mui/material/Button';
import dsa_image from "../assets/images/dsa.webp";
import leetcode_image from "../assets/images/leetcode_image.jpg";
import grpc_image from "../assets/images/grpc.png";
function Home() {
  function onClickHandler(link) {
    if(link === "dsa")
      window.location.href = "https://www.youtube.com/watch?v=UdDj8qau4WU&list=PLWiRdVW_EBIxPoK_c5br1MKWKnhRDNJIz";
    else if(link === "leedcode")
      window.location.href = "https://www.youtube.com/watch?v=oNzjm7TKoWM&list=PLWiRdVW_EBIx0mo-1bbD0KC_Q2Gab51CH&index=2";
    else if(link === "grpc"){
      window.location.href = "https://www.youtube.com/watch?v=rzWwgmhtAyc&list=PLWiRdVW_EBIzQxZhgxdYDbvaVl9YOD4FT";
    }
  }
  return (
    <>
      <div class="container">
        <img alt="intro video" src={video} width="100%" height="600px"></img>
        <div class="centered"><h2 id="header" style={{fontWeight:600}}>High Quality Coding Videos</h2>
          <label style={{ fontSize: "large" }}>Code Foundations | Leet Code | Interview Preparations</label><br/><br />
          <label style={{ fontSize: "15px" }}>Get your Codesh Class All-Access Pass today</label> <br />
          <Button variant="contained">Buy Now</Button>
        </div>
      </div>
      <div class="section">
        <div>
          <br/>
          <h1>Courses Available</h1>
          <h3>Click on the course to learn more</h3><br/>
        </div>
        <div id="carddiv">
          <div class="row">
            <div class="column" onClick={()=>onClickHandler("dsa")}>
              <div class="card">
              <img alt="Data Structures and Algorithms" src={dsa_image} height={"100%"} width={"100%"}/>
                <h3>Data Structures and Algorithms</h3>
                <p>We are creating the most comprehensive Data Structures and Algorithms course with high-quality animation videos. </p>
              </div>
            </div>
            <div class="column" onClick={()=>onClickHandler("leetcode")}>
              <div class="card">
              <img alt="Leet Code Interview Preparation" src={leetcode_image} height={"100%"} width={"100%"}/>
                <h3>Leet Code Interview Preparation</h3>
                <p>Every programmer should build a strong foundation in programming by solving problem of DSA. You'll find all that and more here.</p>
              </div>
            </div>
            <div class="column" onClick={()=>onClickHandler("grpc")}>
              <div class="card">
                <img alt="Google Remote Processor Call" src={grpc_image} height={"100%"} width={"100%"}/>
                <h3>Google Remote Processor Call</h3>
                <p>If you work at a big tech company, chances are you'll have to use another tech service no matter what job title you have. Get started with gRPC.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
