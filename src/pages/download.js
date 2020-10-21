import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Download() {
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
                    <h1 className="hero__title">
                        Sense-i&nbsp;
                        <code 
                            style={{
                                fontSize: '20px', 
                                verticalAlign: 'middle', 
                            }}>
                            v10.0.1
                        </code>
                    </h1>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('software/SenseiInstall.exe')}>
                            Download
                        </Link>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
  
export default Download;