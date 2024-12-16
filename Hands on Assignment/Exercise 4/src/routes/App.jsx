import '../App.css'
import Links from '../components/Links'
import Heading from '../components/Heading'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'

function App() {
  return (
    <Container>
      <Heading></Heading>
      <Links></Links>
      <Outlet></Outlet>
    </Container>
  )
}

export default App
