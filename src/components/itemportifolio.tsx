import Image, { StaticImageData } from "next/image";

type Props = {
    DataImage: StaticImageData
}
export default function ItemPortifolio({DataImage}: Props) {
    return(
        <section className="itemporti" style={{width: 500, height: 500, backgroundColor: '#182337',borderRadius:15,alignItems: 'center',justifyContent: 'center'}}>
            <Image src={DataImage} style={{height: 220,width: '90%',marginTop: 40}}  alt="Imagem"/>
<h1 style={{fontFamily: 'Mazzard',fontSize:22,color: 'white',marginTop: '2%'}}>Projeto - Barbeiro Delivery</h1>
    <h1 style={{fontFamily: 'Mazzard',fontSize:16,paddingTop:20,paddingBottom:20,color: 'white'}} >Nele trabalhei com React Native e Firebase</h1>
    <button style={{backgroundColor: '#34ebe2',width:160,height:55,color: '#182337',borderRadius:15, fontFamily:'Mazzard',fontSize:20}}>Github</button>
        </section>
    )
}