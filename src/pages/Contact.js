import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <>
      <div className="section section-team">
        <div>
          <h1>Contact Us</h1>
          <a href="https://www.google.com/maps/place/HexaTech+Innovation+Pvt+Ltd/@26.2991873,73.0806993,17z/data=!4m14!1m7!3m6!1s0x39418d8e0941ccbd:0x5ea4f54e61468d54!2sHexaTech+Innovation+Pvt+Ltd!8m2!3d26.2991825!4d73.0832742!16s%2Fg%2F11vj8q5zrm!3m5!1s0x39418d8e0941ccbd:0x5ea4f54e61468d54!8m2!3d26.2991825!4d73.0832742!16s%2Fg%2F11vj8q5zrm?entry=ttu">
            <PlaceIcon style={{ fontSize: 25, paddingInline: 10 }} />
            <p>
              {" "}
              Parent organization: HexaTech Innovation Pvt Ltd,
              <br /> Khasara no.152, Dhanesh Nagar, Plot <br />
              no. 45, Digari Rd, Cantt Area,
              <br /> Jodhpur, Rajasthan 342015{" "}
            </p>
          </a>
          <br />
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

export default Contact;
