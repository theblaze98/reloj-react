import { useState } from 'react'

export default function useFile(): [
	string,
	(
		event: React.ChangeEvent<HTMLInputElement>,
		callback?: (param: string) => void
	) => void
] {
	const [file, setFile] = useState<string>('')

	const handleFileUpload = (
		event: React.ChangeEvent<HTMLInputElement>,
		callback?: (param: string) => void
	): void => {
		const uploadedFile = event.target.files ? event.target.files[0] : ''
		if (uploadedFile) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setFile(reader.result as string)
				callback ? callback(reader.result as string) : ''
			}
			reader.readAsDataURL(uploadedFile)
		}
	}

	return [file, handleFileUpload]
}
