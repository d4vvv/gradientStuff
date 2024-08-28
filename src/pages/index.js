import { Gradient } from '@/components/Gradient'
import { colorPairs, gradients, saturatedGradients } from '@/gradients'
import { useState } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const textStyle = isDark ? 'text-white' : 'text-black'

  return (
    <main
      style={{ background: isDark ? '#000' : '#fff' }}
      className={`flex min-h-screen flex-col items-center justify-between p-24 gap-8`}
    >
      <div
        className='p-4 bg-slate-400 cursor-pointer hover:bg-slate-500 transition-all duration-300'
        onClick={() => setIsDark(state => !state)}
      >
        Light/Dark
      </div>
      <div className={textStyle}>Delikatne</div>
      {gradients.map(([color1, color2]) => (
        <Gradient color1={color1} color2={color2} textStyle={textStyle} />
      ))}
      <div className={textStyle}>Nasycone</div>
      {saturatedGradients.map(([color1, color2]) => (
        <Gradient color1={color1} color2={color2} textStyle={textStyle} />
      ))}

      <div className={textStyle}>Wybrane</div>
      {colorPairs.map(([color1, color2]) => (
        <Gradient color1={color1} color2={color2} textStyle={textStyle} />
      ))}
    </main>
  )
}
