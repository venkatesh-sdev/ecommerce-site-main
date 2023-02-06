import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51M8cJ2SFVU7QxXsbxn8UMwKjCGzS0dYpQkNWDaBujs8LwKt2iiI99kmlvpC7ednWyJKaLgqO6AkZKFfRtU0pBiff00xh3ntAze"
    );
  }

  return stripePromise;
};

export default getStripe;
