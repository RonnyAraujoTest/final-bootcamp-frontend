
import { useEffect } from "react"
import "./index.scss"
import silla from '~/assets/img/barbero-png.png'




const Shopp = () => {
  let services =[
    {
      "name":"boy cut",
      "price":75,
    },
    {
      "name":"beard cut",
      "price":150,
    },
    {
      "name":"full cut",
      "price":200,
    },
    {
      "name":"fringe",
      "price":50,
    }

  ]
  useEffect(() => {
    let data = "";

    services.forEach(item => {
      data += `
      <main>
          <div>
            <p>${item.name}</p>
            <p><span>$${item.price}</span></p>
          </div>
      </main>

      `;
     

    })
    let section1 = document.querySelector("#section1");

    if(section1 !== null) section1.innerHTML = data;


  })






  return (
    <>
      <div className="services-contain">
     
      <div className="section1" id='section1'>
         
      
      </div>


      <div className="section2">
        <div className="contenido">
          <div className="shadow">
            <img src={silla} alt="" />
          <h2> "Available services"</h2>
              <p>Barbershop</p>

          </div>
        </div>

      </div>
    </div>
    </>
  );
}
export default Shopp;