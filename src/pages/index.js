// pages/index.js
import client from '../lib/redisClient';
import styles from '../styles/Home.module.css'; // Importing CSS module for styling

export default function Home({ wordleAnswer }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today&#39;s Wordle Answer is...</h1>
      <p className={styles.answer}>{wordleAnswer}</p>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const wordleAnswer = await client.get('wordle:today');
    return {
      props: {
        wordleAnswer: wordleAnswer || 'No answer available',
      },
    };
  } catch (error) {
    console.error('Error fetching Wordle answer:', error);
    return {
      props: {
        wordleAnswer: 'Error fetching the Wordle answer',
      },
    };
  }
}
