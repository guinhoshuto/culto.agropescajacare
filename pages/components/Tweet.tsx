import styles from '../../styles/Tweet.module.css'

const Tweet = ({tweet}: any) => {
    return(
        <a href={`https://twitter.com/guzcalp/status/${tweet ? tweet.id : ''}`}>
            <div className={styles.tweet}>
                {tweet && tweet.text}
            </div>
        </a>
    )
}

export default Tweet;