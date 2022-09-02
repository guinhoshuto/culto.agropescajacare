import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = ({members}: any) => {
  return (
    <div>
      <header className={styles.banner}>
        <div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/lore">Lore</Link></li>
              <li><Link href="/galeria">Galeria</Link></li>
              <li><Link href="/clips">Clips</Link></li>
            </ul>
          </nav>
        </div>
      </header>
        <h1>MEMBROS</h1>
        <ul>
          {members.map((member: any) => {
            <li>oi {member}</li>
          })}
        </ul>
        {/* {members.map(member => {
          <div>{member}</div>
        })} */}
    </div>
  )
}

export default Home

export async function getServerSideProps(){
  const res = await fetch("https://culto.agropescajacare.com.br/api/contentful");
  const json = await res.json();

  return{
    props: {
      members: json
    }
  }
}