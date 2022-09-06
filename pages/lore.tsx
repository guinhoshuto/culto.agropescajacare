import type { NextPage } from 'next'
import { Header, Tweet } from './components'
import styles from '../styles/Lore.module.css'
import axios from 'axios'

const Lore: NextPage = ({thread}: any) => {
    return(
        <div>
            <Header />
            <h1>LORE</h1>
            {/* {console.log(typeof thread)} */}
            <div className={styles.lore}>
                {thread.map((comment: any, index: number) => (
                    index !=  0 && <div className={styles.timeline} key={index}><Tweet tweet={comment} /></div>
                ))}
            </div>
        </div>
    )
}

export default Lore

export async function getServerSideProps(){
    const res = await axios.get("https://culto.agropescajacare.com.br/api/twitter");
    const arr = JSON.parse(JSON.stringify(res.data.thread));
    console.log(arr)
    arr.reverse()

    return{
        props: {
            thread: arr
        }
    }
}