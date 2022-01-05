import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
   const handleClick = async (event)=>{
      const {sessionId} = await fetch('/api/checkout/session', {
         method: 'POST',
         headers:{
            "content-type" : 'application/json'
         }
      })
      const stripe = await stripePromise

      const {error} = await stripe.redirectToCheckout({
         sessionId
      })
   }   

   return (
      <div>
         <h1>Checkout</h1>
         <button role="link" onClick={handleClick}>Checkout</button>
      </div>
   )
}

export default Checkout
