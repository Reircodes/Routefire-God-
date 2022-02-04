import React from 'react';
import { Feature } from '../../component/index';
import './Features.css'

const Features = () => {
  return <section className="features">
              <div className="features__container">
              <Feature
               src='https://routefire.io/images/api-access.svg'
               alt='access'
               heading='API access'
               paragraph='Get fully integrated with a few lines of code. Bootstrap with our examples. Get support from our devs.'

              />
              <Feature
               src='https://routefire.io/images/analytics.svg'
               alt='analytics'
               heading='Analytics'
               paragraph='Understand your trading with a comprehensive data set on all executions. One-click export full-resolution order details.'

              />
              <Feature
               src='https://routefire.io/images/briefcase.svg'
               alt='briefcase'
               heading='Best in class'
               paragraph='The most performant execution technology for crypto in existence. 24/7/365 support with our HQ team.'

              />
              <Feature
               src='https://routefire.io/images/unified-crypto-experience.svg'
               alt='unified-crypto-experience'
               heading='Unify everything'
               paragraph='Simplify your workflow. Unify your many wallets, exchange accounts, and custodians through one integrated solution.'

              />
              </div>
  </section>;
};

export default Features;
