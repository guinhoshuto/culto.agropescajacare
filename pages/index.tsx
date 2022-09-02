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
        <div className={styles.members}>
          {members.map((member: any, index: number) => (
            <div key={index} className={styles.member}> 
              <div className={styles.overlay}>
                <Image className={member.fields.alive ? 'alive' : 'dead'} src={`https:${member.fields.profilePicture.fields.file.url}`} alt={member.fields.nome} width={200} height={200} />
              </div>
              <h3 className={styles.memberName}>
              {member.fields.nome}
              </h3>
            </div>
          ))}

        </div>
        {/* {members.map(member => {
          <div>{member}</div>
        })} */}
    </div>
  )
}

export default Home

export async function getServerSideProps(){
  const res = await axios.get("https://culto.agropescajacare.com.br/api/contentful");
  // const res = await axios.get("http://feras-leaderboards.herokuapp.com/cubot/preceitos")
  const arr = JSON.parse(JSON.stringify(res.data.members))

  return{
    props: {
      members: arr
    }
  }
}