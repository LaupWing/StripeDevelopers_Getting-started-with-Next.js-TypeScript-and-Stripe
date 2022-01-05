import {NextApiRequest, NextApiResponse} from 'next'
import Stripe from 'stripe';
const stripe = new Stripe('pk_test_51KEWZJFyfXsOPlWi8T77h6PcawgrS1XvQMMAVEHzAm9Jce03VxaC0cbHilcJ2XXBHIpIXFREAJTUVzYTeJ9VLnnt00ahsWvM8k', {
  apiVersion: '2020-08-27'
});


export default (req: NextApiRequest, res: NextApiResponse) =>{
   res.status(200).json({name: 'John Doe'})
}