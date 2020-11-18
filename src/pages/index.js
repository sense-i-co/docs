import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_researching_22gp.svg',
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
    imageUrl: 'img/undraw_dev_focus_b9xo.svg',
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
    imageUrl: 'img/undraw_real-time_sync_o57k.svg',
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

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl("/img/text_logo_white.png")} className={styles.titleLogoImage}/>
          <p className={clsx("hero__subtitle", styles.subtitleText)}>{siteConfig.tagline}</p>
          <div className={clsx('home-page-button-container', styles.buttons)}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              View Documentation
            </Link>
          </div>
          {
          /* Temporarily hide the download button until the download page is finalised */
          /*
          <div className={clsx('home-page-button-container', styles.buttons)}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://elfworks.co.za'>
              Download Application
            </Link>
          </div>
          */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
