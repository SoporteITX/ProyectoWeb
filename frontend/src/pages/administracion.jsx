import React, { useEffect } from 'react'
import admSerDesk from './../assets/images/servicedesk.png'
import admSOP from './../assets/images/soporteremoto.jpg'
import admNOC from './../assets/images/NOC.jpg'
import admGobTI from './../assets/images/gestionti.jpg'



const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (

    <section>

      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Outsourcing de service desk</h2>
            <p className='text__para'>
              Le ofrecemos la posibilidad de externalizar su Service Desk o Help Desk como punto de contacto para gestionar incidencias y solicitudes de servicios. Esto se realiza de manera que no genere interrupciones y garantice respuestas eficientes a los usuarios.
            </p>
          </div>

        </div>

        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[320px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admSerDesk} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>
          <div className=' max-sm:hidden absolute right-[70px] top-0 w-[320px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>


        </div>
      </div>


      <br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admSOP} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>


          <div className=' max-sm:hidden absolute left-[70px]  bottom-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

        </div>


        <br /><br /><br /><br />


        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Soporte técnico en sitio remoto</h2>
            <p className='text__para'>
              A través de nuestro servicio de soporte técnico en sitio y remoto, proporcionamos acceso a expertos y una solución tecnológica integral. Nos encargamos del diagnóstico y resolución de problemas técnicos, ofreciendo asesoramiento basado en metodologías ágiles y buenas prácticas de tecnologías de la información.
            </p>
          </div>

        </div>
      </div>


      <br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Network Operation Center (NOC)</h2>
            <p className='text__para'>

              Colaboramos para garantizar una elevada disponibilidad de los servicios críticos para su negocio y cumplir con las cambiantes necesidades comerciales. El propósito del NOC (Centro de Operaciones de Red) es preservar un rendimiento y disponibilidad óptimos en la red, asegurando un tiempo de funcionamiento constante para los servicios comerciales
            </p>
          </div>

        </div>

        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[320px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admNOC} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>
          <div className=' max-sm:hidden absolute right-[70px] bottom-0 w-[320px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>


        </div>
      </div>


<br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admGobTI} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>


          <div className=' max-sm:hidden absolute left-[70px] top-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

        </div>

        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Gobierno y gestión de TI</h2>
            <p className='text__para'>

              Facilitamos la orientación a empresas que buscan implementar o mejorar su modelo de Gobierno y Gestión de Tecnologías de la Información, utilizando como referencia marcos de buenas prácticas como COBIT® e ITIL® y metodologías ágiles como SCRUM.  
            </p>
          </div>

        </div>
      </div>


    </section>



  )
}

export default Services