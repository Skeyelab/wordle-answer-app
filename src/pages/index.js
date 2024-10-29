// pages/index.js
import client from '../lib/redisClient';

const Home = ({ wordleAnswer }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-bold text-white mb-4">Today&#39;s Wordle Answer is...</h1>
      <p className="text-6xl font-extrabold text-yellow-300">{wordleAnswer}</p>
    </div>
  );
};

export async function getServerSideProps() {
  let wordleAnswer;

  try {
    wordleAnswer = await client.get('wordle:today');
  } catch (error) {
    console.error('Error fetching Wordle answer:', error);
    wordleAnswer = 'Error fetching the Wordle answer';
  }

  return {
    props: {
      wordleAnswer: wordleAnswer || 'No answer available',
    },
  };
}

export default Home;
