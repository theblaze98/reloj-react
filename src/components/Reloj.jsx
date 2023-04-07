import { useEffect, useState } from "react";

function Reloj() {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [hora, setHora] = useState("");
  const [minutos, setMinutos] = useState("");
  const [seconds, setSeconds] = useState('');

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    reloj();
    setInterval(reloj, 1000);
    });

  function reloj() {
    const date = new Date();
    setDia(dias[date.getDate()]);
    setDay(date.getDay());
    setMes(meses[date.getMonth()]);
    setHora(date.getHours());
    setMinutos(date.getMinutes());
    setYear(date.getFullYear());
    setSeconds(date.getSeconds());
  }

  return (
    <div className="w-11/12 p-5 max-w-lg bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg reloj rounded">
      <div className="my-5">
        <p className="text-lg font-medium block text-center">
          {dia} {day} de {mes} del {year}
        </p>
      </div>
      <div className="my-5">
        <p className="text-4xl font-medium block text-center">{hora}:{minutos}:{seconds}</p>
      </div>
    </div>
  );
}

export default Reloj;
