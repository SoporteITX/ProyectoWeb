import React, { useEffect, useState } from 'react'
import infCIBER from './../assets/images/infraCiber1.jpg'
import admSOP from './../assets/images/soporteremoto.jpg'
import admNOC from './../assets/images/consultoria.jpg'
import admGobTI from './../assets/images/analiyvul.jpg'
import admGobTI2 from './../assets/images/soc.jpg'




const Developers = () => {


  const [isDetailOpen, setIsDetailOpen] = useState(false);
  

  const customSummaryStyles = {
    borderBottom: '1px solid #000',
    padding: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    background: '#3b85ce' ,
    borderRadius: isDetailOpen ? '10px' : '10px',
  };


  const customDetailsStyles = {
    marginBottom: '20px',
    border: '1px solid #000',
    borderRadius: isDetailOpen ? '10px' : '10px',
    overflow: 'hidden',
    background: '#3b85ce',
    color: 'black',
  };


  const customPlusSign = {
    fontSize: '42px', // Tamaño mayor para el signo más
    marginRight: '10px',
    color: 'white',
  };


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  

  return (
    <section>
      
        <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
                <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

                  <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
                    <img src={infCIBER} alt="" className='flex justify-start w-full h-full object-cover' />
                  </div>
                    <div className=' max-sm:hidden absolute left-[70px]  bottom-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>
                    </div>

              <div className='md:w-1/2'>
                  <div>
                    <h2 className='heading'>Servicios de ciberseguridad</h2>
                    <details name="info" open style={customDetailsStyles}>
                      <summary className='text__para text-white' style={customSummaryStyles}>
                        <span style={customPlusSign}>+</span> Monitoreo conexiones VPN
                      </summary>
                      <ul className='text-white py-5 px-5'>
                        <li>- Tiempo y horarios de conexión</li>
                        <li>- Transferencia de datos</li>
                        <li>- Geolocalización</li>
                        <li>- Tendencias, patrones y posibles vectores de ataque</li>
                      </ul>
                    </details>

                    <details name="info" open style={customDetailsStyles}>
                      <summary className='text__para text-white' style={customSummaryStyles}>
                        <span style={customPlusSign}>+</span> Monitoreo y Eficiencia en Home Office
                      </summary>
                      <ul className='text-white py-5 px-5'>
                        <li> - Monitoreo de la actividad de los usuarios trabajando desde casa</li>
                        <li> - Geolocalización</li>
                        <li> - Aplicaciones utilizadas e información de navegación</li>
                        <li> - Uso de dispositivos externos</li>
                        <li> - Tiempos, patrones y tendencias para evaluar productividad y posibles riesgos</li>
                      </ul>
                    </details>

                    <details name="info" open style={customDetailsStyles}>
                      <summary className='text__para text-white' style={customSummaryStyles}>
                        <span style={customPlusSign}>+</span> SGSI basado en ISO 27001
                      </summary>
                      <ul className='text-white py-5 px-5'>
                        <li> - Diseño</li>
                        <li> - Implementación</li>
                        <li> - Gestión de riesgos</li>
                      </ul>
                    </details>

                  {/*  <p className='text__para'>Monitoreo conexiones VPN</p>
                    <p className='text__para'>Monitoreo y Eficiencia en Home Office</p>
                    <p className='text__para'>SGSI basado en ISO 27001</p>*/}
                  </div>
              </div>
        </div>


<br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Análisis y detección de vulnerabilidades</h2>
            <p className='text__para' style={{ fontWeight: 'bold' }}>
            Características del servicio</p>
            <li className='text__para'>Escaneos diarios</li>
            <li className='text__para'>Alertas 24/7</li>
            <li className='text__para'>Dashboard en tiempo real</li>
            <li className='text__para'>Ethical hacking priorizado</li>
          </div>

        </div>

        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[320px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admGobTI} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>
          <div className=' max-sm:hidden absolute right-[70px] top-0 w-[320px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>


        </div>
      </div>


      <br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2 md:mr-5 relative overflow-hidden flex items-center justify-center'>

          <div className='w-[330px] h-[280px] shadow-md rounded-[15px] overflow-hidden z-30'>
            <img src={admGobTI2} alt="" className='flex justify-start w-full h-full object-cover' />
          </div>


          <div className=' max-sm:hidden absolute left-[70px] top-0 w-[330px] h-[280px] bg-[#e0e0e0] rounded-[15px] z-20'></div>

        </div>

        <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Servicios de SOC</h2>
            <p className='text__para' style={{ fontWeight: 'bold' }}>
            Security Operations Center</p>
            <li className='text__para'>Operación 24/7</li>
            <li className='text__para'>Monitoreo y correlación de eventos</li>
            <li className='text__para'>Monitoreo de Marca en Profundidad</li>
            <li className='text__para'>Respuesta y atención de incidentes</li>
            <li className='text__para'>Monitoreo de disponibilidad</li>
          </div>

        </div>
      </div>


      <br /><br /><br /><br />


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:h-[400px]">
        <div className='md:w-1/2'>
          <div>
            <h2 className='heading' >Servicios de consultoría</h2>
            <p className='text__para' style={{ fontWeight: 'bold' }}>
            SGSI (ISO 27001), Gestión de riesgos, Business Continuity Planning, buenas practicas, etc.</p>
            <div style={{ display: 'flex' }}>
      <div className='md:w-1/2'>
        <p className='text__para' style={{ fontWeight: 'bold' }}>Formación Ciberdefensa</p>
        <ul className='text__para'>
          <li>Conceptual</li>
          <li>Metodológica</li>
          <li>Técnica</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        <p className='text__para' style={{ fontWeight: 'bold' }}>Evaluación Ciberdefensa</p>
        <ul className='text__para'>
          <li>Contexto</li>
          <li>Ciberterreno</li>
          <li>Capacidades</li>
        </ul>
      </div>
    </div>
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


      <div className="container py-5 px-5 flex flex-col md:flex-row md:w-full md:mt-5 md:h-[400px]">
        
      <div className='md:w-1/2'>
          <div>
            <h2 className='heading'>Monitoreo de superficies de riesgo cibernético</h2>
            <p className='text__para'>
              Con la plataforma UpGuard, ITX ayuda a las empresas a identificar y gestionar los riesgos cibernéticos en todas las superficies de ataque. Por medio de un análisis no intrusivo a los URLs de la empresa, y a las IPs públicos, detectamos de forma continua, los riegos cibernéticos a los que se está viendo expuesta su empresa.
            </p>
          </div>

        </div>

        <div className='md:w-1/2 ml-5 relative'>
          <h2 className='text-[26px] font-[500] text-headingColor mb-[18px] z-30' style={{ fontWeight: 'bold' }}>Características de UpGuard</h2>
          <div className='md:flex mr-5'>
            <p className='bg-[#e0e0e0] rounded-[10px] p-3 md:mr-2 mb-[15px] md:w-1/3 z-30'>
              Evaluación continua de riesgos
            </p>
            <p className='bg-[#e0e0e0] rounded-[10px] p-3 md:mr-2 mb-[15px] md:w-1/3 z-30'>
              Descubrimiento de activos
            </p>
            <p className='bg-[#e0e0e0] rounded-[10px] p-3 mb-[15px] md:w-1/3 z-30'>
              Gestión de configuraciones
            </p>


          </div>
          <div className='md:flex mr-5'>
            <p className='bg-[#e0e0e0] rounded-[10px] p-3 mr-2 mb-[15px] md:w-1/3 z-30'>
              Análisis de terceros
            </p>
            <p className='bg-[#e0e0e0] rounded-[10px] p-3 mr-2 mb-[15px] md:w-1/3 z-30'>
              Cumplimiento normativo
            </p>
            <p className='bg-[#e0e0e0] rounded-[10px] p-3 mb-[15px] md:w-1/3 z-30'>
              Reportes y métricas
            </p>

          </div>

        </div>
      
      </div>



    </section>
  )
}

export default Developers