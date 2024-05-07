import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {data} from './export-tester';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
