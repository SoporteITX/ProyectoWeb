import React from 'react'
import heroImg01 from './../assets/images/Soporte-tecnico.jpg'
import exp from './../assets/images/experiencia.jpg'
import ServiceList from '../components/Services/ServiceList'
import Testimonial from '../components/Testimonial/Testimonial'
import Certificaciones from '../components/Testimonial/Certificaciones'


const Home = () => {
  
  const inputStyles = {
    width: '100%',
    border: '1px solid #888',
    borderRadius: '4px',
    padding: '8px',
  };

  const buttonStyles = {
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    backgroundColor: '#5491f5',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  };
  return (
    <>

      {/* ======== hero section ========*/}
      <section id='Inicio' className='hero__section pt-[60px] 2xl:h-[600px]' style={{ backgroundColor: '#072146' }}>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between' >
            {/* ======== hero content ========*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className='text-[36px] leading-[46px] text-white font-[800] md:text-[600] md:leading-[70px]'>
                  ¿QUIÉNES SOMOS?
                </h1>
                <p className='text__para text-white'>
                  ITX es una empresa de servicios y soluciones en el área de TI, con presencia regional y amplia experiencia en el sector empresarial. 
                  Nuestro Objetivo, es ayudar a las organizaciones a que consoliden un negocio más eficiente, competitivo y relevante a largo plazo, a través de un acompañamiento en su proceso de transformación digital, logrando un mejor y más eficiente uso de TI.                 </p>
                {/*<button className='btn'>Solicita tu reclutador</button>*/}
              </div>

            </div>

            {/* ======== hero content ========*/}
            <div className='flex gap-30 justify-end'>
              <div>
                <img className='w-400 h-227 rounded-[15px] transform transition-transform shadow-md hover:shadow-lg hover:scale-105' src={heroImg01} alt="" />
              </div>
              
            </div>
          </div>
        </div>


      </section>
      {/* ======== hero section end ========*/}


      {/* ======== hero section ========*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Nuestra experiencia
            </h2>
            {/*<p className='text__para text-center'>
          Desarrollamos un proceso de contratación flexible y personalizado, enfocado en la calidad
          </p>*/}
          </div>
        </div>

        <div >
          <div className="flex items-center justify-center">
            <img className='responsive-image' src={exp} alt="" />
          </div>

          
        </div>
      </section>


      {/* ======== Services section ========*/}
      <section id='Plataforma de servicios' style={{ backgroundColor: '#072146' }}>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-white">
              Plataforma de servicios
            </h2>
            <p className='text__para text-center'>

            </p>
          </div>
          <ServiceList />


        </div>
      </section>
      {/* ======== end section ========*/}

   
      
      <section id='Aliados' >
        <div className="container">
          <div className="mx-auto">
            <h2 className='heading text-center'>
              Aliados
            </h2>

          </div>

          <Testimonial />

        </div>
      </section>


      <section className='bg-[#f4f4f4]'>
        <div className="container ">
          <div className="mx-auto">
            <h2 className='heading text-center'>
              Certificaciones
            </h2>

          </div>

          <Certificaciones />

        </div>
      </section>



<section
      id='Contacto'
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '50%',
          padding: '20px',
        }}
      >
        <div
          style={{
            maxWidth: '500px',
            margin: 'auto',
          }}
        >
          <h2 className='heading text-center' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Contacto</h2>

    <form action="https://formsubmit.co/norman.baca@itxlatam.com" method="POST"  style={{ fontFamily: 'Arial, sans-serif'}}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='nombre' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Nombre:</label>
        <input type='text' id='nombre' name='nombre' style={inputStyles} required />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='empresa' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Empresa:</label>
        <input type='text' id='empresa' name='empresa' style={inputStyles} required />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='correo' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Correo Electrónico:</label>
        <input type='email' id='correo' name='correo' style={inputStyles} required />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='departamento' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Departamento:</label>
        <select id='departamento' name='departamento' style={inputStyles} required>
          <option value='ventas'>Ventas</option>
          <option value='soporte'>Soporte</option>
          <option value='tecnologia'>Tecnología</option>
          <option value='finanzas'>Finanzas</option>
          <option value='recursos_humanos'>Recursos Humanos</option>
          <option value='Otro'>Otro</option>
          {/* Agrega más opciones aquí */}
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='celular' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Celular:</label>
        <input type='tel' id='celular' name='celular' style={inputStyles} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='tema' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Tema:</label>
        <select id='tema' name='tema' style={inputStyles} required>
          <option value='comercial'>Comercial</option>
          <option value='soporte'>Soporte</option>
          <option value='ciberseguridad'>Ciberseguridad</option>
          <option value='desarrollo'>Desarrollo</option>
          <option value='Otro'>Otro</option>
          {/* Agrega más opciones aquí */}
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor='mensaje' style={{ display: 'block', fontWeight: 'bold' ,textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'}}>Mensaje:</label>
        <textarea id='mensaje' name='mensaje'  style={inputStyles} required></textarea>
      </div>
      
      <input type='submit' value='Enviar' style={buttonStyles} />
    </form>


        </div>
      </div>

      <div
        style={{
          width: '50%',
          padding: '20px',
        }}
      >
        <div
          style={{
            maxWidth: '100%',
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.032701169887!2d-84.10469892512954!3d9.931234590170693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fcacdfdb6d97%3A0xf35790826dbd35c9!2sOficentro%20Ejecutivo%20la%20Sabana!5e0!3m2!1ses-419!2scr!4v1702663669440!5m2!1ses-419!2scr'
            width='90%'
            height='500'
            style={{ border: '0' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>


 


    </>
  )
}

export default Home
