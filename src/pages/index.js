import { Gradient } from '@/components/Gradient'
import { colorPairs, gradients, saturatedGradients, topOnes } from '@/gradients'
import { useState } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const textStyle = isDark ? 'text-white text-sm' : 'text-black text-sm'

  return (
    <main
      style={{ background: isDark ? '#000' : '#fff' }}
      className={`flex min-h-screen flex-col items-center justify-between p-8 gap-8`}
    >
      <div
        className='p-4 bg-slate-400 cursor-pointer hover:bg-slate-500 rounded-md transition-all duration-300'
        onClick={() => setIsDark(state => !state)}
      >
        Light/Dark
      </div>
      <div className={textStyle}>Najlepsze według mnie</div>
      {topOnes.map(([color1, color2]) => (
        <Gradient color1={color1} color2={color2} textStyle={textStyle} />
      ))}
      <div style={{ padding: '100px 0 0 0' }} className={textStyle}>
        Lista pozostałych
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>
        {gradients.map(([color1, color2]) => (
          <Gradient color1={color1} color2={color2} textStyle={textStyle} />
        ))}
        {saturatedGradients.map(([color1, color2]) => (
          <Gradient color1={color1} color2={color2} textStyle={textStyle} />
        ))}
        {colorPairs.map(([color1, color2]) => (
          <Gradient color1={color1} color2={color2} textStyle={textStyle} />
        ))}
      </div>
    </main>
  )
}
