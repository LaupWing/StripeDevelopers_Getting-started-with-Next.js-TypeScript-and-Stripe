import {NextApiRequest, NextApiResponse} from 'next'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});


export default async (req: NextApiRequest, res: NextApiResponse) =>{
   const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
         {
           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
           price: '{{PRICE_ID}}',
           quantity: 1,
         },
       ],
       mode: 'payment',
       success_url: `/success.html`,
       cancel_url: `/cancel.html`,
   })
   res.status(200).json({name: 'John Doe'})
}