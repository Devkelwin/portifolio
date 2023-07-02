import Image from 'next/image'

export default function Section1() {

  return (
    
    <div style={{background: "#182337", width:'75%', borderRadius:30,marginTop: '3%' }}>
        
        <header>
              <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
                
                <section style={{width: '90%',backgroundColor: '#34ebe2',borderRadius:20,marginRight:25,paddingTop: '2%'}} >
                    <h1 style={{color: '#182337',fontFamily: 'Mazzard'}}>Experiência</h1>
                    <h2 style={{color: '#182337',fontFamily: 'Mazzard',paddingBottom:10,padding:5}} >Mais de 1 ano no mercado de trabalho</h2>
                </section>
                <section style={{minHeight: '40%',width: '90%',backgroundColor: '#34ebe2',borderRadius: 20,paddingTop: '2%'}} >
                <h1 style={{color: '#182337',fontFamily: 'Mazzard'}}>Projetos</h1>
                    <h2 style={{color: '#182337',fontFamily: 'Mazzard',paddingBottom:10,padding:5}} >Experiência com projetos em equipe</h2>
                </section>
          </section>
           
            
            <h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingLeft:10,paddingRight:10,padding:10,color: 'white'}}>Sou um programador web e mobile com o objetivo de criar soluções criativas e funcionais para os usuários, superando as expectativas dos clientes. Sou apaixonado por aprender novas tecnologias e tendências do mercado, e tenho habilidades em linguagens de programação como Javascript e frameworks como React JS e React Native. Se precisa de um programador web e mobile experiente e dedicado, estou à disposição para ajudar.</h1>
        </header>
      

    </div>
    
  )
}
