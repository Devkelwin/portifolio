

import React from 'react';
import Section1 from '@/src/components/section1'
import Image from 'next/image'

import Section2 from '@/src/components/section2'
import Section3 from '@/src/components/section3'

import ContactEmail from '@/src/components/contactemail'
import ContactInsta from '@/src/components/contactinsta'
import ContactZap from '@/src/components/contactzap'
import Section4 from '@/src/components/section4'
import portifolio from '../src/image/portifolioimage.png'
import agenda from '../src/image/Agenda.png'
import barber from '../src/image/barber.png'
import cardapio from '../src/image/cardapio.png'
import carros from '../src/image/carros.png'
import imc from '../src/image/imc.png'
import metas from '../src/image/metas.png'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'

export default function Home() {
  return (
   
    <div id="container"  style={{ background: "linear-gradient(#182337 ,#1b7075 )", height: '100%',paddingBottom:60,width: '100%' }}>
    
      <header style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 style={{ fontSize: 20,color: 'white' }}>Olá, eu sou</h2>
        <h1 style={{ fontFamily: 'Mazzard', fontSize: 42, color: '#34ebe2' }}>Kelwin Carlos</h1>
        <h2 style={{ fontSize: 20,color: 'white' }}>Desenvolvedor Front-End</h2>
      </header>

      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '5%',paddingBottom:'5%' }}>

         <Image
      src={portifolio}
      width={350}
      height={350}
      alt="Picture of the author"
    />
      </header>
     

      <section style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 color='white'>Quem eu sou na</h2>
        <h1 style={{ color: '#34ebe2', fontSize: 24, fontFamily: 'Mazzard' }}>Programação</h1>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Section1 />
      </section>


      <section style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 style={{fontSize: 18,fontFamily: 'Mazzard',color: 'white'}}>Minhas experiências e</h2>
        <h1 style={{ color: '#34ebe2', fontSize: 28, fontFamily: 'Mazzard' }}>Como elas podem ajudar você</h1>
      </section>

     

      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '5%',paddingBottom:'5%' }}>
        <Section2 />
      </header>
     
   

     


    
    
      
    
       
     

      <section style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 style={{fontSize: 18,fontFamily: 'Mazzard'}}>Um parceiro para</h2>
        <h1 style={{ color: '#34ebe2', fontSize: 28, fontFamily: 'Mazzard' }}>Suas necessidades profissionais</h1>
      </section>

      
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '5%',paddingBottom:'5%' }}>
<Section3 />
      </header>
       
    
      
    
   

      <section style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 style={{fontSize: 18,fontFamily: 'Mazzard'}}>Meus trabalhos</h2>
        <h1 style={{ color: '#34ebe2', fontSize: 28, fontFamily: 'Mazzard' }}>Portfólio</h1>
      </section>

      

      <section style={{display: 'flex',justifyContent: 'center',padding:20}}>

 
      <div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%',marginRight:80 }}>
        
        <section style={{width:450,height:150}}>
        <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
        <Image
      src={metas}
      width={250}
      height={200}
      alt="Picture of the author"
      style={{borderRadius:15}}
    />

    </section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,textAlign:  'center'}}>Projeto - Consumo Diário</h1>
    <h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,textAlign: 'center'}} >Nele trabalhei com React Native e Javascript</h1>
    <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
    <button style={{backgroundColor: '#34ebe2',width:160,height:55,color: '#182337',borderRadius:15, fontFamily:'Mazzard',fontSize:20}}>Github</button>
      </section>
        </section>
    
    </div>
    


     
    <div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%' }}>
        
        <section style={{width:450,height:150}}>
        <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
        <Image
      src={imc}
      width={250}
      height={200}
      alt="Picture of the author"
      style={{borderRadius:15}}
    />

    </section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,textAlign: 'center'}}>Projeto Calculadora IMC</h1>
    <h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,textAlign: 'center'}} >Nele trabalhei com React Native e Javascript</h1>
    <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
    <button style={{backgroundColor: '#34ebe2',width:160,height:55,color: '#182337',borderRadius:15, fontFamily:'Mazzard',fontSize:20}}>Github</button>
      </section>
        </section>
    
    </div>
    


      </section>


      <section style={{display: 'flex',justifyContent: 'center',padding:20}}>

 
<div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%',marginRight:80 }}>
  
  <section style={{width:450,height:150}}>
  <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
  <Image
src={barber}
width={250}
height={200}
alt="Picture of the author"
style={{borderRadius:15}}
/>

</section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,textAlign:  'center'}}>Projeto - Barbeiro Delivery</h1>
<h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,textAlign: 'center'}} >Nele trabalhei com React Native e Firebase</h1>
<section style={{display: 'flex',justifyContent: 'center',padding:20}}>
<button style={{backgroundColor: '#34ebe2',width:160,height:55,color: '#182337',borderRadius:15, fontFamily:'Mazzard',fontSize:20}}>Github</button>
</section>
  </section>

</div>




<div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%' }}>
  
  <section style={{width:450,height:150}}>
  <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
  <Image
src={carros}
width={250}
height={200}
alt="Picture of the author"
style={{borderRadius:15}}
/>

</section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,textAlign: 'center'}}>Projeto Cadastro de carros da empresa</h1>
<h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,textAlign: 'center'}} >Nele trabalhei com React Native e MongoDB</h1>
<section style={{display: 'flex',justifyContent: 'center',padding:20}}>
<button style={{backgroundColor: '#34ebe2',width:160,height:55,color: '#182337',borderRadius:15, fontFamily:'Mazzard',fontSize:20}}>Github</button>
</section>
  </section>

</div>



</section>




<section style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 style={{fontSize: 18,fontFamily: 'Mazzard'}}>Projetos</h2>
        <h1 style={{ color: '#34ebe2', fontSize: 28, fontFamily: 'Mazzard' }}>Em Desenvolvimento</h1>
      </section>


      <section style={{display: 'flex',justifyContent: 'center',padding:20}}>

 
<div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%',marginRight:80 }}>
  
  <section style={{width:450,height:150}}>
  <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
  <Image
src={cardapio}
width={250}
height={200}
alt="Picture of the author"
style={{borderRadius:15}}
/>

</section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,textAlign:  'center'}}>Projeto - App Hamburgueria</h1>
<h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,textAlign: 'center'}} >Nele trabalhei com React Native e Firebase</h1>
<section style={{display: 'flex',justifyContent: 'center',padding:20}}>

</section>
  </section>

</div>




<div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%' }}>
  
  <section style={{width:450,height:150}}>
  <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
  <Image
src={agenda}
width={250}
height={200}
alt="Picture of the author"
style={{borderRadius:15}}
/>

</section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,textAlign: 'center'}}>Projeto - Agendamento Salão de beleza</h1>
<h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,textAlign: 'center'}} >Nele trabalhei com React Native e Javascript</h1>
<section style={{display: 'flex',justifyContent: 'center',padding:20}}>

</section>
  </section>

</div>



</section>













      <section style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10%' }}>
        <h2 style={{fontSize: 18,fontFamily: 'Mazzard'}}>Precisando falar comigo?</h2>
        <h1 style={{ color: '#34ebe2', fontSize: 28, fontFamily: 'Mazzard' }}>Contate-me</h1>
      </section>


   <section style={{display: 'flex',justifyContent: 'center',padding:20}}>

    
   </section>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <ContactEmail  
        link='mailto:kelwindev12@gmail.com?body=My'
        title='E-mail'
        info='kelwindev12@gmail.com'
        linkmessage='Envie um e-mail'

        />
      </section>


 <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <ContactInsta
        link='https://www.instagram.com/kelwin_carlos012/'
        title='Instagram'
        info='Kelwin Carlos'
        linkmessage='Envie uma mensagem'
        
        />
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <ContactZap
        link='https://wa.me/5533999492996'
        title='WhatsApp'
        info='+55 33 9 9949-2996'
        linkmessage='Envie uma mensagem'
        
        />
        
      </section>


    </div>
  )
}
