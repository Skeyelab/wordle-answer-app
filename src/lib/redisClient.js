// lib/redisClient.js
import { createClient } from 'redis';

let client;

if (!client) {
  client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379', // Use your Redis URL
  });

  client.on('error', (err) => console.error('Redis Client Error', err));

  client.connect();
}

export default client;
