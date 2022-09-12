import styles from '../../styles/Tweet.module.css'
import Image from 'next/image'

const Tweet = ({tweet}: any) => {
    return(
        <a href={`https://twitter.com/guzcalp/status/${tweet ? tweet[3] : ''}`}>
            {tweet && 
                <div className={styles.tweet}>
                    <div className={styles.tweetText}>
                        {tweet[0]} 
                    </div>
                    {tweet[1] != "" && <div className={styles.tweetImage}><Image src={tweet[1]} alt="" layout={'fill'}  objectFit={'contain'}/></div>}
                </div>
            }
        </a>
    )
}

export default Tweet;