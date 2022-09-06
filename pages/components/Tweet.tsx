import styles from '../../styles/Tweet.module.css'

const Tweet = ({tweet}: any) => {
    return(
        <div className={styles.tweet}>
            {console.log(tweet)}
            {console.log('oi')}
            {tweet.text}
        </div>
    )
}

export default Tweet;