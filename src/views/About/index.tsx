import './index.scss';
import barbero from '~/assets/img/barbero-png.png'


const About = () => {
  return (
    <>
    <div className='cont1'>

      <div className="seccion1">
        <div className="texto">
          <img src={barbero} alt="" />
          <h2>"Information about us"</h2>
          <p><span>Barbersopp</span></p>

       </div>
      </div>
      

     
    </div>
     <div className="contenido">
     <div className="texto2">
      <h2>About us</h2>
       <p>
       Barbershop se inicia en el mundo de la peluquería En 2022 se abre la primera barbería Barbershop.
en la cual encontrareás barberos por vocación, totalmente vinculados al mundo de 
las barberías, por eso en el año 2022 comenzamos a forjar las bases para franquiciar nuestro modelo de negocio.
 </p>
       <p>
Un modelo de negocio basado en la profesionalidad y el éxito. Con un saber hacer propio su principal finalidad 
es que sus creaciones y servicios puedan ser destinados al hombre actual independientemente de su imagen, conservando un 
estilo clásico para los más tradicionales y creando looks 
más arriesgados para los más atrevidos. Fruto del conocimiento y de la experiencia en el sector de la peluquería desde el año 
1997, nuestros salones están pensados para
satisfacer las necesidades de nuestros clientes, que buscan calidad en la prestación del servicio, rapidez y a coste reducido.
       </p>
     </div>

     <div className="imagenes">
      <p>HOLA</p>


     </div>

 </div>

 </> 
  );
}
export default About;