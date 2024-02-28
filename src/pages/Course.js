import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Course = () => {
  return (
    <>
      <div className="section section-team">
        <div>
          <h1>Contact Us to avail course</h1>
          <a href={`mailto:${"codesh@codeshclass.com"}`}>
            <EmailIcon style={{ fontSize: 25, paddingInline: 10 }} />
            <p>codesh@codeshclass.com</p>
          </a>
          <br />
          <a href={`tel:+91-7339937969`}>
            <PhoneIcon style={{ fontSize: 25, paddingInline: 10 }} />
            <p>+91-7339937969</p>
          </a>
          <a href="https://wa.me/07339937969?text=I'd like to chat with you regarding codesh classes course.">
            <WhatsAppIcon style={{ fontSize: 25, paddingInline: 10 }} />
            <p>+91-7339937969</p>
          </a>
        </div>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default Course;
