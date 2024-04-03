"use client"
import React from 'react'
import name from "../../girlpic/scene.gltf"

const page = () => {
  return (
    <div>
      <head>

      <title>Food projection</title>
      </head>
      

     <a-scene >
     <a-assets>
      <a-asset-item id="model" src={name} ></a-asset-item>
    </a-assets> 
      <a-marker present="hiro">
      {/* <a-box position = "0 2 -1"  width = "1" height= "1" color="red"></a-box>  */}
      <a-entity gltf-model="#model" position="0 0 0" scale="1 1 1"></a-entity> 

      </a-marker>
      <a-entity camera></a-entity>
     </a-scene>
    </div>
  )
}

export default page

