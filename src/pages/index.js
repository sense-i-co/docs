import React from 'react';
import Layout from '@theme/Layout';
import ImageMap from "../components/ImageMap";
import ImageDeck from "../components/ImageDeck";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={styles.heroContainer}>
          <div className={styles.heroTitleWrapper}>
            <div className={styles.heroTitle}>
              Take control and build your successful business with Sense-i
            </div>
            <div className={styles.heroSubtitle}>
              Building a business can be hard, complicated and full of risks… that’s why we built Sense-i, a complete program to help you grow a business that works.
            </div>
          </div>
          <img className={styles.heroBanner} src={useBaseUrl("/img/pages/index/hero-banner.png")}/>
        </div>
        <div className={styles.headlineWrapper}>
          <div className={styles.headline}>
            Over 20 years, leading SME’s have used Sense-i to build successful, well-run, profitable companies
          </div>
        </div>
        <ImageDeck 
          images={[
            {src: "/img/pages/index/ergoform-testimonial.png"},
            {src: "/img/pages/index/ergoform-testimonial.png"}
          ]}
          options={{
            buttons: false
          }}
        />
        <ImageMap
          src="/img/pages/index/logo-collage.png"
          maxWidth="1500px"
          areas={[
            {
              link: "https://www.sheetstreet.com",
              boundary: {
                topLeft: [51, 78],
                bottomRight: [415, 170]
              }
            },
            {
              link: "https://wunders.co.za",
              boundary: {
                topLeft: [515, 73],
                bottomRight: [872, 165]
              }
            },
            {
              link: "http://www.codesigns.co.za",
              boundary: {
                topLeft: [968, 68],
                bottomRight: [1328, 180]
              }
            },
            {
              link: "https://bedbathhome.co.za",
              boundary: {
                topLeft: [1436, 87],
                bottomRight: [1793, 162]
              }
            },
            {
              link: "https://pierrecronje.co.za",
              boundary: {
                topLeft: [60, 284],
                bottomRight: [582, 382]
              }
            },
            {
              link: "http://www.bambisana.co.za",
              boundary: {
                topLeft: [690, 222],
                bottomRight: [1090, 450]
              }
            },
            {
              link: "https://ergoform.co.za",
              boundary: {
                topLeft: [1263, 280],
                bottomRight: [1402, 414]
              }
            },
            {
              link: "https://inksaver.co.za",
              boundary: {
                topLeft: [1542, 290],
                bottomRight: [1906, 385]
              }
            }
          ]}
        />
      </main>
    </Layout>
  );
}

export default Home;
