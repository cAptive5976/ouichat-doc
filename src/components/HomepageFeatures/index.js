import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import ChatStreamIcon from '@site/static/img/chat-stream.png';
import LikeMessageIcon from '@site/static/img/like-message.png';
import MessageRelevanceIcon from '@site/static/img/message-relevance.png';

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

function Feature({Svg, title, description}) {
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