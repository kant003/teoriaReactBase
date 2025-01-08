export default function Ejem10() {

  const handleClick = () => {
    alert('Me has pulsado')
  }

  return (
    <button 
      className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-800 transition" 
      onClick={handleClick}>
      Pulsame
    </button>
  )
}
