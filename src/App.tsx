import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>Hello Vite</>
    </ThemeProvider>
  )
}

export default App
