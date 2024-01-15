import React from 'react';

export const pricingPlans = [
  {
   title : "Freelancer",
   price: 24,
   currency: "USD",
   frequency: "/month",
   description: "The essentials to provide your best work for your best clients." ,
   features: [
    "5 products",
    "Up to 1,000 subscribers",
    "Basic analytics",
    "48-hour support response time",
   ],

   cta: "Start your trial",
   mostPopular: false,
},

{
    title : "Startup",
    price: 32,
    currency: "USD",
    frequency: "/month",
    description: "A plan that scales with your rapidly growing business." ,
    features: [
     "25 products",
     "Up to 10,000 subscribers",
     "Advanced analytics",
     "24-hour support response time",
    ],
 
    cta: "Start your trial",
    mostPopular: true,
},

{
    title : "Enterprise",
    price: 48,
    currency: "USD",
    frequency: "/month",
    description: "Dedicated support and infastructure for your company." ,
    features: [
     "Unlimited products",
     "Unlimited subscribers",
     "Basic analytics",
     "One-hour, dedicated support response time",
     "Marketing automations",
     "Salesforce, Clearbit Reveal & Marketo Integrations",
    ],
 
    cta: "Start your trial",
    mostPopular: false,
}
]
