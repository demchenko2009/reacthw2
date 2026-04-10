import Greeating from './Greeating'
import Text from './Text'
import Button from './Button'
import './App.css'

function App() {
  const handleClick = () => {

  };

  return (
    <>
      <Greeating name="ivan" />   
      <Text text="ястреб" />
      <Button onClick={handleClick} />
    </>
  )
}

export default App