export default function Ejem6() {

  const formato = {
    backgroundColor: 'blue',
    marging: '4px'
  }

  return (
    <>
    <button className="red">pulsame 1</button>
    <button style={formato}>pulsame 2</button>
    <button style={{ color: 'blue'  }}>pulsame 2</button>
    </>
  )
}
