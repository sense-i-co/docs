import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Download() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout title="Download">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                }}>
                <main>
                    <h1 className="hero__title">Sense-i Installer</h1>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            // Prepend the absolute URL to make React treat this like an external URL (rather than an internal web page)
                            to={`${siteConfig.url}${siteConfig.baseUrl}software/SenseiInstall.exe`}>
                            Download
                        </Link>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
  
export default Download;