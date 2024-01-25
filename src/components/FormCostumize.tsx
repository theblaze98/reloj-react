import { useContext, useState } from 'react'
import useFile from '@/hooks/useFile'
import { ConfigContext } from '@/contexts/ConfigContext'

type props = {
	toggleModal: () => void
}

export default function FormCostumize({ toggleModal }: props) {
	const [bgUrl, setBgUrl] = useState<string>('')
	const [file, handleFileUpload] = useFile()
	const { changeBackground, changeAudio } = useContext(ConfigContext)

	const handleBackgroundChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		handleFileUpload(event, changeBackground)
		console.log(file)
	}
	const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleFileUpload(event, changeAudio)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBgUrl(event.target.value)
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		changeBackground(bgUrl)
		setBgUrl('')
	}

	return (
		<div className='absolute w-11/12 max-w-md bg-slate-800 rounded-md border-2 border-slate-700 flex flex-col p-5 gap-5 text-white'>
			<label htmlFor='bg-url'>Wallpaper URL</label>
			<input
				type='text'
				name='bg-url'
				className='bg-transparent outline-none border-b-4 border-slate-700/40 hover:border-slate-700 focus:border-slate-700 transition-colors p-3'
				onChange={handleChange}
				value={bgUrl}
			/>
			<div>
				<label
					htmlFor='background-file'
					className='w-full rounded border-slate-700 border-2 p-2 block cursor-pointer'>
					Sube un Wallpaper (max 1mb)
				</label>
				<input
					type='file'
					id='background-file'
					onChange={handleBackgroundChange}
					className='hidden'
				/>
			</div>
			<div>
				<label
					htmlFor='audio-file'
					className='w-full rounded border-slate-700 border-2 p-2 block cursor-pointer'>
					Sube un Audio (max 3mb)
				</label>
				<input
					type='file'
					id='audio-file'
					onChange={handleAudioChange}
					className='hidden'
				/>
			</div>
			<button onClick={handleClick}>Guardar</button>
			<button onClick={toggleModal}>Cerrar</button>
		</div>
	)
}
