import type { NextPage } from 'next'
import axios from 'axios'
import styles from '../styles/Galeria.module.css'
import { Header, Lightbox } from './components'
// import {
//   BentoLightboxGalleryProvider,
//   WithBentoLightboxGallery,
// } from '@bentoproject/lightbox-gallery/react';

const Galeria: NextPage = ({galeria}: any) => {
    return(
        <div>
            <Header />
            <h1>GALERIA</h1>
            <div className={styles.galeria}>
                <Lightbox images={galeria.fields.imagens}/>
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