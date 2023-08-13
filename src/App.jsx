import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Floor from './components/Floor'
import Backdrop from './components/Backdrop'
import LightSwitch from './components/LightSwitch'
import Sphere from './components/Sphere'


export default function App() {

  const [ light, setLight ] = useState(false)
  const [ env, setEnv ] = useState(true)


  return (
    <>
      <Canvas>
        <Floor />
        <Backdrop />
        <Sphere />

        {light && <LightSwitch brightness={2} color={"blue"} />}
        {env && <Environment preset='dawn' />}
      </Canvas>

      <button onClick={() => { setLight(!light), setEnv(!env)} }>LIGHTSWITCH</button>
    </>
  )
}
