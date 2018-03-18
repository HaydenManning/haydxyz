const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production" ? "http://hdn.mx" : "http://hdn.mx";

export default PAYMENT_SERVER_URL;
