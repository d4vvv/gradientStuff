export const Gradient = ({ color1, color2, textStyle }) => {
  return (
    <div className='w-full'>
      <div
        style={{
          background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%`,
        }}
        className='h-20 w-full'
      />
      <div className='flex my-4 justify-between'>
        <div className={textStyle}>{color1}</div>
        <div className={textStyle}>{color2}</div>
      </div>
    </div>
  )
}
