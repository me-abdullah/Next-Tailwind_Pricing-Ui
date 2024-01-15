import { features } from 'process';
import React from 'react';
import { pricingPlans } from './pricingPlans';

export default function PricingPlans() {
  return (
    <div className="relative">
      {/* background decoration */}

<div className="absolute inset-0 flex flex-col">
<div className="flex-1"></div>
<div className="bg-slate-50 flex-1"></div>
</div>
    <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
      {pricingPlans.map((plan) => (
        <div key={plan.title} className="relative rounded-2xl border border-slate-200 p-8 shadow-lg flex-col">
          <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
          {plan.mostPopular && <p className="absolute top-0 -translate-y-1/2 rounded-full bg-cyan-500  px-3 py-0.5 text-sm text-white font-semibold tracking-wide shadow-md">Most Popular</p>}
          <p className="mt-4 text-sm leading-6 text-slate-700">{plan.description}</p>
          <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
            <p className="flex text-sm font-semibold text-slate-500 items-center">
              <span>{plan.currency}</span>
              <span className="ml-3 text-4xl text-slate-900">${plan.price}</span>
              <span className="ml-1.5">{plan.frequency}</span>
            </p>
          </div>

          {/* Features*/}

          <ul className="mt-6 space-y-4 flex-1">
            {plan.features.map((features) => (
              <li key={features} className="flex text-sm leading-6 text-slate-700">
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-5 w-5 text-cyan-500 shrink-0 bi bi-check-lg" viewBox="0 0 16 16"> <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" /> </svg>
                <span className="ml-3">{features}</span>
              </li>
            ))}
          </ul>

          {/* call to action */}
          <a href="#" className={`mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4 
          ${plan.mostPopular
          ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
          : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
          }
          `}>
{plan.cta}
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}
