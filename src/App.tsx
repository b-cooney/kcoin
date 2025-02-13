import './index.css'
import RotatingCoin from './components/RotatingCoin'
import GlitchyText from './components/GlitchyText'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 py-12">
      <div className="flex flex-col items-center justify-center gap-8">
        <RotatingCoin />
        <GlitchyText text="hello kcoin" />
        <SocialLinks />
      </div>
    </div>
  )
}

export default App
