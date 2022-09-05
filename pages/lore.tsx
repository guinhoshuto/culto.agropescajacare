import type { NextPage } from 'next'
import { Header, Tweet } from './components'
import styles from '../styles/Lore.module.css'
import axios from 'axios'

const Lore: NextPage = ({thread}: any) => {
    return(
        <div>
            <Header />
            <h1>LORE</h1>
            <div className={styles.lore}>
                {thread.map((tweet: any, index: number) => (
                    <div className={styles.timeline} key={index}><Tweet tweet={tweet} /></div>
                ))}
            </div>
        </div>
    )
}

export default Lore

export async function getServerSideProps(){
    const res = await axios.get("https://culto.agropescajacare.com.br/api/twitter");
    const arr = JSON.parse(JSON.stringify(res.data.thread));
    arr.reverse()

    return{
        props: {
            thread: arr
        }
    }
}