const RAZORPAY_TEST_KEY_ID = "rzp_test_WLWecfGS3gcrvT";
const RAZORPAY_TEST_SECRET_KEY = "k21UjQpLREPTKAz4Ubn0vFFF";
const RAZORPAY_TEST_PAYMENT_PAGE = "https://rzp.io/l/qQF1kEU";

const RAZORPAY_LIVE_KEY_ID = "rzp_live_psPRqf7MsowmrP";
const RAZORPAY_LIVE_SECRET_KEY = "ya7SlXz1oweZL4U8CMDuWfQZ";
const RAZORPAY_LIVE_PAYMENT_PAGE = "https://rzp.io/l/tutorbro";

export const RAZORPAY_KEY_ID =
  process.env.NODE_ENV !== "production"
    ? RAZORPAY_TEST_KEY_ID
    : RAZORPAY_LIVE_KEY_ID;

export const RAZORPAY_SECRET_KEY =
  process.env.NODE_ENV !== "production"
    ? RAZORPAY_TEST_SECRET_KEY
    : RAZORPAY_LIVE_SECRET_KEY;

export const RAZORPAY_PAYMENT_PAGE =
  process.env.NODE_ENV !== "production"
    ? RAZORPAY_TEST_PAYMENT_PAGE
    : RAZORPAY_LIVE_PAYMENT_PAGE;
