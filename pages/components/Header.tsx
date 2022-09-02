import Link from 'next/link'

const Header:any = () => {
    return(
      <header>
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
    )
}

export default Header