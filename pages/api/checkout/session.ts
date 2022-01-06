import {NextApiRequest, NextApiResponse} from 'next'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});


export default async (req: NextApiRequest, res: NextApiResponse) =>{
   const {quantity} = req.body

   const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
         {
           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
           price: process.env.PRICE_ID,
           quantity,
         },
       ],
       mode: 'payment',
       success_url: `/success.html`,
       cancel_url: req.headers.origin,
   })
   res.status(200).json({sessionId: session.id})
}