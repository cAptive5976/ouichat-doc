import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import ChatStreamIcon from '@site/static/img/chat-stream.png';
import LikeMessageIcon from '@site/static/img/like-message.png';
import MessageRelevanceIcon from '@site/static/img/message-relevance.png';

// Feature List
const FeatureList = [
    {
        Svg: ChatStreamIcon,
        title: 'Chat en direct',
        description: 'Diffusion de messages dans un fil de chat visible par tous les employés.',
    },
    {
        Svg: LikeMessageIcon,
        title: 'Aimer les messages',
        description: 'Les employés peuvent aimer les messages pour les faire remonter dans le fil d\'actualité.',
    },
    {
        Svg: MessageRelevanceIcon,
        title: 'Calcul de pertinence',
        description: 'Le score de pertinence d\'un message est calculé en fonction de son âge et du nombre de likes.',
    },
];

// Feature Component
function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={Svg} className={styles.featureSvg} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

// New Section Component
function HeaderSection() {
    return (
        <div className={clsx(styles.headerSection, 'container')}>
            <div className={clsx(styles.noWrapRow)}>
                {/* OuiChat Section */}
                <div className={clsx('col col--6', styles.headerBox)}>
                    <div className={styles.logo}>
                        <img src="/img/logo.webp" alt="OuiChat Logo"/>
                    </div>
                    <div className={styles.details}>
                        <h2>OuiChat</h2>
                        <a
                            href="https://github.com/cAptive5976/ouichat/releases/download/release/OuiChat_v1.0.0_release_20241204_arm64.apk"
                            className={styles.downloadButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                        <p className={styles.versionText}>Version 1.0</p>
                    </div>
                </div>

                {/* OuiContact Section */}
                <div className={clsx('col col--6', styles.headerBox)}>
                    <div className={styles.logo}>
                        <img src="/img/ouicontact-logo.webp" alt="OuiContact Logo"/>
                    </div>
                    <div className={styles.details}>
                        <h2>OuiContact</h2>
                        <a
                            href=""
                            className={styles.downloadButton}
                            //target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                        <p className={styles.versionText}>SOON</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main Component
export default function HomepageFeatures() {
    return (
        <div>
            {/* Header Section */}
            <HeaderSection />

            {/* Features Section */}
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
