
const obtenerTiempo = fechaLimite => {
	let fechaActual = new Date(),
	tiempoFaltante = (new Date(fechaLimite) - fechaActual + 1000) / 1000,
	tiempoSecond = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2), //slice quita 2 digitos
	tiempoMinutes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2),
	tiempoHours = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2),
	tiempoDays =  Math.floor(tiempoFaltante / (3600 * 24));


	return{
		tiempoFaltante,
		tiempoSecond,
		tiempoMinutes,
		tiempoHours,
		tiempoDays,
	}
};

const countdown = (fechaLimite,elem,finalMensaje) => {
 const el = document.getElementById('countdown');

 const timerUpdate = setInterval(() =>{
 	let tiempo = obtenerTiempo(fechaLimite);
 	el.innerHTML = `
 	<div>${tiempo.tiempoDays}<span>Dias</span></div>
 	<div>${tiempo.tiempoHours}<span>Horas</span></div>
 	<div>${tiempo.tiempoMinutes}<span>Minutos</span></div>
 	<div>${tiempo.tiempoSecond}<span>Segundos</span></div>`

 	if(tiempo.tiempoFaltante <= 1){
 		clearInterval(timerUpdate)
 		// el.style.color = red;
 		el.innerHTML = finalMensaje;
 		el.style.color = '#C80316';
 		// el.style.
 	}

 },1000 ) //intervalo en milisegundos
};

countdown('oct 02 2018 08:00:00', 'clock', 'Bienvenidos a INVACION CÓMIC ')


// oct 02 2018 08:00:00