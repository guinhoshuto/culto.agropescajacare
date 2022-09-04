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
                    src={`https://player.twitch.tv/?collection=ex8rmLoFBhd32Q&parent=localhost&parent=agropescajacare.com.br`}
                    // height="100%"
                    // width="50%"
                    height="720"
                    width="1280"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Clips