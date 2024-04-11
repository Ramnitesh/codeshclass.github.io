import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "../../config";

class RazorpaySdk {
  constructor() {
    if (typeof window !== "undefined") {
      console.log("window");
      //here `window` is available, so `window.document` (or simply `document`) is available too
      const script = window.document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      window.document.head.appendChild(script);
    }
  }

  async open(request) {
    var webOptions = {
      key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      key_secret: RAZORPAY_SECRET_KEY,
      amount: request.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "USD",
      name: "TUTORBRO PRIVATE LIMITED", //your business name
      description: "TutorBro Transaction",
      image:
        "https://res.cloudinary.com/dtq6u9rp1/image/upload/v1711986571/tutorbro/tutorbro.png",
      //order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: window.location.origin + "/payments/payment-success",
      redirect: true,
      handler: function (response) {
        localStorage.setItem("payment_id", response.razorpay_payment_id);
        console.log(response.razorpay_payment_id);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: request.name, //your customer's name
        email: "",
        contact: "", //Provide the customer's phone number for better conversion rates
        address: request.address,
        pincode: request.pincode,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2ca5ce",
      },
    };
    const rzp = new window.Razorpay(webOptions);

    rzp.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    return rzp.open();
  }
}

const razorpaySdk = new RazorpaySdk();

export default razorpaySdk;
