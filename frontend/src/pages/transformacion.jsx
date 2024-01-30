import React, { useEffect } from 'react'
import admSerDesk from './../assets/images/combina.jpg'
import admSOP from './../assets/images/dataana.jpg'
import admNOC from './../assets/images/NOC.jpg'
import admGobTI from './../assets/images/desarrolloSoft.jpg'

const DevelopersDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className=' py-[45px]'>

      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admSOP} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>


          <div className=' max-sm:hidden absolute left-[70px]  bottom-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

        </div>

        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Data analytics</h2>
            <p className='text__para'>
              Ventajas de utilizar Data Analytics 
            </p>
            <p className='text__para'>
                <li> Le ayuda a tener una visión global de la situación empresarial.</li>
              <li>Crear estrategias y generación de oportunidades de negocio.</li>
              <li>Reduce los riegos.</li>
              <li>Mejora la comunicación interna.</li></p> 
          </div>

        </div>
      </div>



      <br /><br /><br /><br />
      


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Data Blending</h2>
            <p className='text__para'>
              Ofrecemos servicios especializados en Data Blending, una técnica poderosa que une datos de diversas fuentes para brindar una visión más profunda y enriquecida.
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
            <img src={admGobTI} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>


          <div className=' max-sm:hidden absolute left-[70px] top-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

        </div>

        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Desarrollo de software a la medida</h2>
            <p className='text__para'>

              Facilitamos la orientación a empresas que buscan implementar o mejorar su modelo de Gobierno y Gestión de Tecnologías de la Información, utilizando como referencia marcos de buenas prácticas como COBIT® e ITIL® y metodologías ágiles como SCRUM.
            </p>
          </div>

        </div>
      </div>


<br /><br /><br /><br />


    </div>

  )
}

export default DevelopersDetails