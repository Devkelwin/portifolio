'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai'

export default function Section3() {

  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  useEffect(() => {
    // Função para verificar se o conteúdo excede a largura da tela
    const checkContentOverflow= () => {
      const section = document.querySelector('.section3');
      const sectionWidth = section!.scrollWidth;
      const screenWidth = window.innerWidth;

      setIsContentOverflowing(sectionWidth > screenWidth);
    };

    // Chamar a função quando o componente montar e sempre que a janela for redimensionada
    window.addEventListener('resize', checkContentOverflow);
    checkContentOverflow();

    // Remover os event listeners quando o componente desmontar
    return () => {
      window.removeEventListener('resize', checkContentOverflow);
    };
  }, []);

  const sectionClass = `section3 ${isContentOverflowing ? 'block-display' : ''}`;

  return (
  
    <section className={sectionClass} style={{ justifyContent: 'center',display: 'flex'}}>


    <section  style={{ background: "#182337", height: 480, width: 380, borderBottomLeftRadius:40,borderBottomRightRadius:40, marginTop: '3%',marginRight: '4%'} }  >

        <section style={{ background: "#34ebe2", height: 120, width: 380,borderBottomLeftRadius:40,borderBottomRightRadius:40}} >

        <h1 style={{ fontSize: 22,color: '#182337', textAlign: 'center', margin: 0,fontFamily: 'Mazzard',paddingTop:40 }}>Desenvolvimento Mobile</h1>
        </section>
    <section style={{padding:25}}>
        <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Criação e Desenvolvimento de aplicativos</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Criação de logo marca</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Layouts para aplicativo</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Paleta de cores</h1>
              
            </div>
          </section>


          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Design completo da aplicação</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Desenvolvimento com as mais novas tecnologias</h1>
              
            </div>
            </section>
          </section>
    </section>




    <section style={{ background: "#182337", height: 480, width: 380, borderBottomLeftRadius:40,borderBottomRightRadius:40, marginTop: 50}}>

        <section style={{ background: "#34ebe2", height: 120, width: 380,borderBottomLeftRadius:40,borderBottomRightRadius:40}} >

        <h1 style={{ fontSize: 22,color: '#182337', textAlign: 'center', margin: 0,fontFamily: 'Mazzard',paddingTop:40 }}>Desenvolvimento Web</h1>
        </section>
    <section style={{padding:25}}>
        <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white' }}>Criação de landing pages</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Criação de e-commerce</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Trabalho completo de logo marca</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Layouts para websites</h1>
              
            </div>
          </section>


          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Paleta de cores</h1>
              
            </div>
          </section>

          <section style={{ display: 'flex', alignItems: 'center',marginTop:20,paddingLeft:30 }}>
            <AiOutlineCheck size={22} style={{marginRight:10,color: 'white'}}/>
            <div>
              <h1 style={{ fontSize: 16, textAlign: 'left', margin: 0,fontFamily: 'Mazzard',color: 'white'  }}>Tecnologias aceitas em todo lugar</h1>
              
            </div>
            </section>
          </section>
    </section>
   
    </section>
   
  )
}
