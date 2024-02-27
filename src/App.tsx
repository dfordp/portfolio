import { ModeToggle } from "./components/mode-toggle"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        Dilpreet 
        <ModeToggle/>
      </div>
    </ThemeProvider>
  )
}

export default App
