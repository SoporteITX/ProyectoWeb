import React, { useEffect } from 'react'
import optim from './../assets/images/outfuncion.jpg'
import optimi from './../assets/images/vulnerabilidades.jpg'
import optimi2 from './../assets/images/outTI.jpg'


const Contact = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  return (
    <section >

      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={optimi2} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>

  
          <div className=' max-sm:hidden absolute left-[70px]  top-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

          {/* <div className=' max-sm:hidden absolute left-0 top-0 w-[310px] h-full bg-verdeColor rounded-[15px]'></div> */}
        </div>

        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Outsourcing de TI</h2>
            <p className='text__para'>
              Le ayudamos a usar la tecnología para potenciar su negocio y construir una ventaja en el mercado que lo apoyará a mejorar la interacción con sus distintos usuarios desde la tecnología o específicamente desde su departamento de TI.
            </p>
          </div>

        </div>
      </div>


      <br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Outsourcing en áreas funcionales</h2>
            <p className='text__para'>
            Se ofrece un servicio de Outsourcing de recursos en áreas funcionales para organizaciones de diversos sectores. Se destaca la capacidad de adaptación y acompañamiento en todas las etapas de crecimiento. Este enfoque estratégico permite a las empresas liberar recursos y capital de trabajo, ofreciendo la flexibilidad necesaria para impulsar un crecimiento sostenible.
            </p>
          </div>

        </div>

        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={optim} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>


          <div className=' max-sm:hidden absolute right-[70px] top-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

          {/* <div className=' max-sm:hidden absolute left-0 top-0 w-[310px] h-full bg-verdeColor rounded-[15px]'></div> */}
        </div>


      </div>

    </section>
  )
}

export default Contact