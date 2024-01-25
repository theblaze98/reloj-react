import { createContext, useState } from "react";
import defaultBackground from '@/assets/wallpaper_default.png'
import defaultAudio from '@/assets/default_audio.mp3'

type TConfig = {
	background: string
	audio: string
}

interface IConfiContext {
  config: TConfig,
  changeBackground: (background: string) => void
  changeAudio: (audio: string) => void
}

type props = {
	children: JSX.Element | JSX.Element[]
}

const defaultValues: TConfig = {
  background: localStorage.getItem('background') || defaultBackground,
  audio: localStorage.getItem('audio') || defaultAudio
}

export const ConfigContext = createContext<IConfiContext>({} as IConfiContext);

export const ConfigProvider = ({ children }: props) => {
  const [config, setConfig] = useState<TConfig>(defaultValues)

  const changeBackground = (background: string) => {
    localStorage.setItem('background', background)
    setConfig({...config, background})
  }

  const changeAudio = (audio: string) => {
    localStorage.setItem('audio', audio)
    setConfig({...config, audio})
  }

  return (<ConfigContext.Provider value={{config, changeBackground, changeAudio}}>{children}</ConfigContext.Provider>)
}
