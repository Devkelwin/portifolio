import { ReactNode } from 'react';

import { BsPatchCheckFill } from 'react-icons/bs'
type props = {
  title: string
  level: string
icon: ReactNode
}
export default function Section2() {
  return (
 
    
      <div  className='section2' style={{ justifyContent: 'center', padding: 20}}>
        <div style={{ background: "#2c2c6c", borderRadius: 40, marginTop: '3%', padding: 25,width: 380,height: '100%',margin: 10}}>
          <h1 style={{ fontFamily: 'Mazzard',textAlign: 'center',color: 'white'}}>No desenvolvimento Front end</h1>
          <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="HTML" level="Experiente" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="CSS" level="Experiente" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="STYLED-COMP" level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="JAVASCRIPT" level="Experiente" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="REACT JS" level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="NEXT JS" level="Intermediário" />
        
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="TYPESCRIPT" level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="REACT N." level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="FIGMA" level="Intermediário" />
          </div>
        </div>

        <div style={{ background: "#2c2c6c", borderRadius: 40, marginTop: '3%', padding: 25, width:380,alignItems: 'center',height: '100%',margin: 10 }}>
          <h1 style={{ fontFamily: 'Mazzard',textAlign: 'center',color: 'white'}}>No desenvolvimento Back end</h1>
          <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22}  />}title="NodeJs" level="Iniciante" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="FIREBASE" level="Iniciante" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="MONGODB" level="Estudando..." />
          </div>
        </div>
      </div>
    
   
  )
}

function SkillItem({ icon , title, level }: props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
      {icon}
      <div style={{ marginLeft: 10 }}>
        <h1 style={{  textAlign: 'left', margin: 0, fontFamily: 'Mazzard',color:'white' }}>{title}</h1>
        <h2 style={{ textAlign: 'left', margin: 0, fontFamily: 'Mazzard',color: 'white' }}>{level}</h2>
      </div>
    </div>
  )
}
