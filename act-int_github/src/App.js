import Posada_Logo from './Imagenes/Posada_Logo.jpg';
import Frente_Vertical from './Imagenes/Frente_Vertical.jpg';
import Habitaciones_Frente from './Imagenes/Habitaciones_Frente.jpg'
import Telefono_logo from './Imagenes/Telefono_logo.png'
import  phone_icon from './Imagenes/phone_icon.png'
import whatsapp_icon from './Imagenes/whatsapp_icon.png'
import facebook_logo from './Imagenes/facebook_logo.jpg'
import ubicacion from './Imagenes/ubicacion.png'

import './App.css';
import React, { Component } from "react";

class App extends Component {

  render() {
  return (
  <div>
<body>
	<div id="img_principal">
		<div id = "logo"><img src={Posada_Logo}/></div>
		<div id = "div_p">
			<h1>HOTEL POSADA DON LUIS</h1>
		</div>
	</div>
	<div>
		<div id="menu">
			<ul id = "menu_1">
				<li><a href="Principal.html" class = "menu_posada">Bienvenidos</a></li>
				<li id = "drop">
					<span class = "menu_posada">Posada</span>
					<ul id = "drop_content">
						<li><a href="Habitaciones.html" class = "opcion_posada">Habitaciones</a></li>
						<li><a href="Hostal.html" class = "opcion_posada">Hostal</a></li>
						<li id="ultimo-menu"><a href="Acampado.html" class = "opcion_posada">Acampado</a></li>
					</ul>
				</li>
				<li><a href="Servicios.html" class = "menu_posada">Servicios</a></li>
				<li><a href="Reservaciones.html" class = "menu_posada">Reservaciones</a></li>
			</ul>
		</div>
		<div id = "bienvenidos">
			<div id = "bienvenidos_1">
				<h1 id = "Titulo">Bienvenidos</h1>
				<h3 id = "Titulo_3">Centro Holistico De Sanacion</h3>
				<p id = "m_bienvenida"> --Mensaje de Bienvenida-- Estamos convirtiendo la Posada en un lugar en donde se encuentren los cuatro rumbos y se armonicen todas las energias de nuestros visitantes ofreciéndoles actividades que ayuden a que esto se realize, entre ellas</p>
			</div>
		</div>
		<div id = "Posada">
			<div id = "Posada_3">
				<div>
					<img src={Frente_Vertical} id = "Frente_Vertical"/>
				</div>
			</div>
			<div id = "Posada_2">
				<h2>Acerca de la Posada</h2>
				<p> Descripcion general de la posada, Según estudios realizados la peña de Bernal se formó hace 65 millones de años en el período Jurásico a partir de un volcán que agotó su actividad; la lava del interior se volvió sólida y la erosión que sufrió el volcán a través de los años hizo desaparecer sus restos. El magma sólido que quedó es lo que constituye y da forma al monolito que forma parte de la Sierra Gorda. La Peña tiene una elevación de 2,510 mts. sobre el nivel del mar con una prominencia de 350, siendo uno de los peñones más llamativos del continente americano con vasta vegetación entre las rocas.
				</p>
			</div>
		</div>
		<div id = "Hospedaje_1">
			<h2>Hospedaje</h2>
		</div>
		<div id = "Hospedaje_2">
			<div id = "Hospedaje_2_3">
				<div>
					<img src={Habitaciones_Frente}/>
				</div>
			</div>
			<div id = "Hospedaje_2_2">
				<h3> Habitaciones</h3>
				<p> Descripcion de las habitaciones, son 4 habitaciones con dos camas matrimoniales, con un baño, calentador solar, sin television, etc.</p>
				<button>Detalles</button>
			</div>
		</div>
		<div id = "Hospedaje_3">
			<div id = "Hospedaje_3_2">
				<h3>Hostal</h3>
				<p>Descripction del hostal, una sola habitacion con 5 literas, 10 camas, ideal para grupos que no quieren acampar, etc. </p>
				<button>Detalles</button>
			</div>
			<div id = "Hospedaje_3_3">
				<h3>Acampado</h3>
				<p>Zona de acampado, amplia, con luz, baños, electricidad, zona de cocina, etc, descripcion de la zona de acampado.</p>
				<button>Detalles</button>
			</div>
		</div>
		<div id = "Actividades">
			<div id = "Actividades_1">
				<h3>Actividades Ofrecidas</h3>
				<p>Dentro de las actividades que se pueden ofrecer dentro de la posada se encuentran las siguientes: </p>
				<ul>
					<li>Temazcal Tradicional</li>
					<li>Clases de Yoga</li>
					<li>Escalado</li>
					<li>Uso del Jacuzzi</li>
				</ul>
				<button>Detalles</button>
			</div>
		</div>
		<div id = "contacto">
			<div id = "c_titulo">
				<h3>Datos de Contacto</h3>
			</div>
			<div id = "contacto_2">
				<div id = "c_d_1"></div>
				<div id = "c_d_2">
					<h4>Telefonos</h4>
					<div id = "div_logo_tel"><img src={Telefono_logo} id = "logo_tel"/></div>
					<div id = "tel">
						<img src={phone_icon}/>
						<p id = "tel_1">4423360876</p>
					</div>
					<div id = "cel">
						<img src={whatsapp_icon}/>
						<p id = "tel_2">4423360876</p>
					</div>
				</div>
				<div id = "c_d_3">
					<img src={facebook_logo}/>
				</div>
				<div id = "c_d_4">
					<h4>Ubicacion</h4>
					<div id = "ubicacion"><img src={ubicacion}/></div>
					<p>Corregidora No 77 esquina el descanso, Barrio de el puerto</p>
				</div>
				<div id = "c_d_5"></div>
			</div>
		</div>
	</div>
</body>
</div>
  );
  }
}

export default App;
