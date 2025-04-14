import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/~jarmoil/Web-Sovelluskehitys/Week4/wsk-25-react/routing/',
});
