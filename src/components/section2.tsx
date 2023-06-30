import { ReactNode } from 'react';

import { BsPatchCheckFill } from 'react-icons/bs'
type props = {
  title: string
  level: string
icon: ReactNode
}
export default function Section2() {
  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 20, }}>
        <div style={{ background: "#182337", borderRadius: 40, marginTop: '3%', padding: 25,width: '35%', marginRight: '4%'}}>
          <h1 style={{ fontFamily: 'Mazzard', fontSize: 24,textAlign: 'center' }}>Desenvolvimento Front end</h1>
          <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="HTML" level="Experiente" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="JAVASCRIPT" level="Experiente" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="REACT JS" level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="CSS" level="Experiente" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="TYPESCRIPT" level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="REACT N." level="Intermediário" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="FIGMA" level="Intermediário" />
          </div>
        </div>

        <div style={{ background: "#182337", borderRadius: 40, marginTop: '3%', padding: 25, width:'35%' }}>
          <h1 style={{ fontFamily: 'Mazzard', fontSize: 24,textAlign: 'center' }}>Desenvolvimento Back end</h1>
          <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22}  />}title="NodeJs" level="Iniciante" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="FIREBASE" level="Iniciante" />
            <SkillItem icon={<BsPatchCheckFill color='#fff' size={22} />} title="MONGODB" level="Estudando..." />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillItem({ icon , title, level }: props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
      {icon}
      <div style={{ marginLeft: 10 }}>
        <h1 style={{ fontSize: 25, textAlign: 'left', margin: 0, fontFamily: 'Mazzard' }}>{title}</h1>
        <h2 style={{ textAlign: 'left', margin: 0, fontFamily: 'Mazzard' }}>{level}</h2>
      </div>
    </div>
  )
}
