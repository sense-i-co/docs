import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
   {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_researching_22gp.svg').default,
    description: (
      <>
        Sense-i was designed from the ground up to be quick to install and easy 
        to use to get your business running on a single platform faster than any 
        other solution available to small and medium sized companies.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_dev_focus_b9xo.svg').default,
    description: (
      <>
        Clear job descriptions and user profiles with easy to understand reports 
        keeps everyone in your team focused on the priority tasks for the day. 
        This leads to faster processing of orders, reduce overheads and greater 
        sales and customer satisfaction.
      </>
    ),
  },
  {
    title: 'Real-time Control',
    Svg: require('@site/static/img/undraw_real-time_sync_o57k.svg').default,
    description: (
      <>
        Powerful reporting tools give owners and managers access to up-to-date, 
        accurate and comprehensive information about every transaction and aspect 
        of your business so that you can monitor the business performance in 
        real-time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
