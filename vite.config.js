import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/feedback-app/", // 💯 same repo name
  plugins: [react()],
  define: {
    "process.env": {}, // 👉 Prevent build errors for missing env
    "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
      "https://my-feedback-backend.onrender.com"
    ),
  },
})
