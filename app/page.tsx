import React from 'react';

import PricingPlans from "./pricing-plans";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7x1 bg-white px-4 pt-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight">Pricing plans for terms of all sizes</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-500">
          Choose an affordable plan thats packed with the best features for engaging your audience, creating customer loyality, and driving sales.
        </p>
      </div>
      <PricingPlans />
    </>
  );
}
