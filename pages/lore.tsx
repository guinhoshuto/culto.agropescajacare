import type { NextPage } from 'next'
import Header from './components/Header'
import axios from 'axios'

const Lore: NextPage = () => {
    return(
        <div>
            <Header />
            Não fiz
        </div>
    )
}

export default Lore

export async function getServerSideProps(){
    const res = await axios.get("https://culto.agropescajacare.com.br/api/twitter");
    const arr = JSON.parse(JSON.stringify(res.data.galeria));

    return{
        props: {
            thread: arr
        }
    }
}