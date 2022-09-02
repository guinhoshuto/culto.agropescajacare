import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = ({members}) => {
  return (
    <div>
      {members}
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
    </div>
  )
}

export default Home

export async function getMembers(){
  const res = await axios.get("https://culto.agropescajacare.com.br/api/contentful");
  // const json = await res.json();

  return{
    props: {
      members: res
    }
  }
}