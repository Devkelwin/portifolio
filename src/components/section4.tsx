import Image from 'next/image'

export default function Section4() {

  return (
    
    <div style={{background: "#182337",height: 750, width:450, borderRadius:25,marginTop: '3%' }}>
        
        <section style={{width:450,height:150}}>
        <section style={{display: 'flex',justifyContent: 'center',padding:20}}>
        <Image
      src={require('../image/imc.png')}
      width={250}
      height={200}
      alt="Picture of the author"
      style={{borderRadius:15}}
    />

    </section>
<h1 style={{fontFamily: 'Mazzard',fontSize:22}}>Projeto - Barbeiro Delivery</h1>
    <h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20}} >Nele trabalhei com React Native e Firebase</h1>
    <button style={{backgroundColor: '#34ebe2',width:160,height:55,color: '#182337',borderRadius:15, fontFamily:'Mazzard',fontSize:20}}>Github</button>
      
        </section>
    
    </div>
    
  )
}
