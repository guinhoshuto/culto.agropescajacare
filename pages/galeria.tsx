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
                    <div key={index}><Image src={`https://${images.fields.file.url}`} alt="galeria" height={300} width={400} /></div>
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