import "./Home.css";
import video from "../assets/images/video.gif";
import Button from '@mui/material/Button';  
function Home() {
  return (
    <>
      <div class="container">
        <img src={video} width="100%" height="600px"></img>
        <div class="centered"><h1>High Quality Coding Videos</h1>
        <h5>Code Foundations | Data Science | Computer Science</h5>
        <label style={{fontSize:"20px"}}>Get your Codesh Class All-Access Pass today</label> <br/>
        <Button variant="contained">Buy Now</Button>
        </div>
       </div>
      <div>
        <h2>Courses Available</h2>
        <h3>Click on the course to learn more</h3>
      </div>
      <div style={{display:"flex"}}>
        <div class="one"></div>
        <div class="one"></div>
        <div class="one"></div>
      </div>
    </>
  );
}

export default Home;
