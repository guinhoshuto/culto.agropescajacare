import type { NextPage } from 'next'
import Image from 'next/image'
import axios from 'axios'
import styles from '../styles/Galeria.module.css'
import Header from './components/Header'

const Galeria: NextPage = ({galeria}: any) => {
    return(
        <div>
            <Header />
            <h1>GALERIA</h1>
            <div className={styles.galeria}>
                {galeria.fields.imagens.map((images: any, index: number) => (
                    <div key={index} className={styles.foto}><Image src={`https:${images.fields.file.url}`} alt="galeria" height={300} width={500} layout="fixed" /></div>
                ))}
            </div>
        </div>
    )
}

export default Galeria

export async function getServerSideProps(){
  const res = await axios.get("https://culto.agropescajacare.com.br/api/galeria");
  const arr = JSON.parse(JSON.stringify(res.data.galeria));

  return{
    props: {
        galeria: arr
    }
  }

}