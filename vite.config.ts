import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load the environment variables from the corresponding .env file
export default defineConfig(({ mode }) => {
  dotenv.config({ path: `.env.${mode}` });

  return {
    plugins: [react()],
    define: {
      'process.env': process.env,
    },
  };
});
