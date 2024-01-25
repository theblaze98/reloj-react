import { useRef, useContext, useState } from 'react'
import { FaCog, FaPause } from 'react-icons/fa'
import Reloj from './components/Reloj'
import FormCostumize from './components/FormCostumize'
import { ConfigContext } from './contexts/ConfigContext'

export default function App() {
  const [isCofigMenuVisible, setIsCofigMenuVisible] = useState<boolean>(false)
  const { config } = useContext(ConfigContext)
  const audioRef = useRef<HTMLAudioElement>(null)
  const handleClick = () => {
    audioRef.current?.play()
  }
  const toggleConfigModal = () => {
    setIsCofigMenuVisible(!isCofigMenuVisible)
  }
  return (
		<div
			className='bg-cover bg-center min-h-screen flex justify-center items-center relative'
			style={{ backgroundImage: `url(${config.background})` }}>
			<Reloj />
			<button
				onClick={handleClick}
				className='text-2xl fixed top-0 left-0 text-white bg-slate-600 p-2 rounded-br'>
				<FaPause />
			</button>
			<audio
				src={config.audio}
				ref={audioRef}></audio>
			<span
				onClick={toggleConfigModal}
				className='cursor-pointer text-2xl fixed top-0 right-0 text-white bg-slate-600 p-2 rounded-bl'>
				<FaCog />
			</span>
			{isCofigMenuVisible ? (
				<FormCostumize toggleModal={toggleConfigModal} />
			) : (
				''
			)}
		</div>
	)
}
