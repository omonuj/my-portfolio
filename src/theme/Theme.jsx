import Modal from "../components/Modal"
import { useThemeContext } from '../context/theme-context'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import './theme.css'

const Theme = () => {
  const { themeState, themeHandler } = useThemeContext()

  return (
    <Modal className="theme__modal">
      <h4>Appearance</h4>
      <small>Choose your preferred display mode</small>
      <div className="theme__mode-buttons">
        <button
          className={`theme__mode-btn ${themeState.background === 'bg-2' ? 'active' : ''}`}
          onClick={() => themeHandler('bg-2')}
        >
          <MdDarkMode />
          <span>Dark</span>
        </button>
        <button
          className={`theme__mode-btn ${themeState.background === 'bg-1' ? 'active' : ''}`}
          onClick={() => themeHandler('bg-1')}
        >
          <MdLightMode />
          <span>Light</span>
        </button>
      </div>
    </Modal>
  )
}

export default Theme
