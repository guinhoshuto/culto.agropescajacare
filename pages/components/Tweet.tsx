import styles from '../../styles/Tweet.module.css'
import Image from 'next/image'

const Tweet = ({tweet}: any) => {
    return(
        <a href={`https://twitter.com/guzcalp/status/${tweet ? tweet.id : ''}`}>
            {tweet && 
                <div className={styles.tweet}>
                    <div className={styles.tweetText}>
                        {tweet.text} 
                    </div>
                    {tweet.media_url && <div className={styles.tweetImage}><Image src={tweet.media_url} alt="" width={300} height={180} layout="responsive"/></div>}
                </div>
            }
        </a>
    )
}

export default Tweet;