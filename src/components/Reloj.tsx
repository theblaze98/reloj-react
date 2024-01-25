import { useEffect, useState } from 'react'

export default function Reloj() {
	const [dia, setDia] = useState<string>()
	const [mes, setMes] = useState<string>()
	const [day, setDay] = useState<string>()
	const [year, setYear] = useState<string>()
	const [hora, setHora] = useState<string>()
	const [minutos, setMinutos] = useState<string>()
	const [seconds, setSeconds] = useState<string>()

	const dias = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado',
	]
	const meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	]

	useEffect(() => {
		reloj()
		setInterval(reloj, 1000)
	})

	function reloj() {
		const date = new Date()
		setDia(dias[date.getDay()])
		setDay(date.getDate().toString())
		setMes(meses[date.getMonth()])
		setHora(date.getHours().toString().padStart(2, '0'))
		setMinutos(date.getMinutes().toString().padStart(2, '0'))
		setYear(date.getFullYear().toString())
		setSeconds(date.getSeconds().toString().padStart(2, '0'))
	}

	return (
		<div className='w-11/12 p-5 max-w-lg bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg reloj rounded'>
			<div className='my-5'>
				<p className='text-lg font-medium block text-center'>
					{dia} {day} de {mes} del {year}
				</p>
			</div>
			<div className='my-5'>
				<p className='text-4xl font-medium block text-center'>
					{hora}:{minutos}:{seconds}
				</p>
			</div>
		</div>
	)
}
