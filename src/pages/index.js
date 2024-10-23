// pages/index.js
import client from '../lib/redisClient';

export default function Home({ wordleAnswer }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Today&#39;s Wordle Answer is...</h1>
      <p style={{ fontSize: '24px' }}>{wordleAnswer}</p>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // Replace 'wordle:today' with your actual Redis key
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
