import Image from 'next/image'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'


type Props = {
   
 title: string
info: string
linkmessage: string
link: string
}
export default function ContactEmail({info,linkmessage,title,link}: Props) {

  return (
    
    <div style={{background: "#182337",height: '100%', width:380, borderRadius:25,marginTop: '3%' }}>
        <section style={{justifyContent: 'center'}}>

       
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',paddingTop:20}} >

                    <MdOutlineMarkEmailRead size={26} color='white'/>
        </section>
<section style={{padding:15}}>


        <h1 style={{padding: 3,color: 'white',fontFamily: 'Mazzard'}}>{title}</h1>
      <h1 style={{padding: 3,color: 'white',fontFamily: 'Mazzard'}} >
       {info}
      </h1>

        <Link  style={{padding: 3,color: '#34ebe2',fontFamily: 'Mazzard'}} href={link} >{linkmessage}</Link>
        </section>
 </section>
    </div>

    
    
  )
}
