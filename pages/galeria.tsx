import type { NextPage } from 'next'
import Image from 'next/image'
import axios from 'axios'
import Header from './components/Header'

const Galeria: NextPage = ({galeria}: any) => {
    return(
        <div>
            <Header />
            <div>
                {galeria.includes.Asset.map((images: any, index: number) => (
                    <div key={index}><Image src={images.fields.file.url} alt="galeria" /></div>
                ))}
            </div>
        </div>
    )
}

export default Galeria

export async function getServerSideProps(){
  const res = await axios.get("https://culto.agropescajacare.com.br/api/galeria");
  const arr = JSON.parse(JSON.stringify(res.data.galeria));
  arr.reverse();

  return{
    props: {
        galeria: arr
    }
  }

}