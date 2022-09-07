import type { NextPage } from 'next';
import styles from '../styles/Clips.module.css';
import Header from './components/Header';

const videos = [
    ''
]

const Clips: NextPage = () => {
    return(
        <div>
            <Header />
            <h1>CLIPS</h1>
            <div className={styles.container}>
                <iframe
                    title="preview"
                    src={`https://player.twitch.tv/?collection=NFS57ZqPERdkxQ&parent=localhost&parent=culto.agropescajacare.com.br`}
                    // height="100%"
                    // width="50%"
                    className={styles.twitch}
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Clips