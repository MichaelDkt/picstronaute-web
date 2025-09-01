    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/picstronaute-web/', // Assurez-vous que le nom du dépôt est correct
      envPrefix: 'VITE_', // Ajoutez cette ligne pour que Vite lise les variables d'environnement
    })