import Button from "@mui/material/Button";
import razorpaySdk from "../sdk/payments/razorpay.sdk";
const Payment = () => {
  const handlePayment = async (request) => {
    razorpaySdk.open(request);
  };
  return (
    <>
      <div className="section section-team">
        <div>
          <Button
            style={{ fontWeight: 800 }}
            variant="contained"
            onClick={() => {
              handlePayment({ amount: 1, currencyCode: "USD" });
            }}
          >
            Pay Now
          </Button>
        </div>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default Payment;
