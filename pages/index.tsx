import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Header from './components/Header'

const Home: NextPage = ({members}: any) => {
  return (
    <div>
      <Head>
        <title>AGROPESCA JACARÉ</title>
      </Head>
      <Header />
        <h1>MEMBROS</h1>
        <div className={styles.members}>
          {members.map((member: any, index: number) => (
            <div key={index} className={styles.member}> 
              <Image 
                className={member.fields.alive ? 'alive' : 'dead'} 
                src={`https:${member.fields.profilePicture.fields.file.url}`} 
                alt={member.fields.nome} 
                width={170} 
                height={170} 
                layout="fixed"
                />
              <h3 className={styles.memberName}>
              {member.fields.nome}
              </h3>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(){
  const res = await axios.get("https://culto.agropescajacare.com.br/api/contentful");
  const arr = JSON.parse(JSON.stringify(res.data.members));
  arr.reverse();

  return{
    props: {
      members: arr
    }
  }
}