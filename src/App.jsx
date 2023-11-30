import Button from "./components/Button"
import TextComponent from "./components/Text"
import Title from "./components/Title"

function App() {

  return (
    <>
     <Button />
     <TextComponent>Soy un texto estilado</TextComponent>
     <TextComponent>Soy otro texto estilado</TextComponent>
     <Title primary>Styled Components</Title>
    </>
  )
}

export default App
