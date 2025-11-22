import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/feedback-app/", // keep your repo name SAME
  plugins: [react()],
  define: {
    "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
      "https://my-feedback-backend.onrender.com"
    ),
  },
})
