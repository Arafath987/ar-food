"use client"
import React from 'react'

const ar = () => {
  return (
    <div>
      <head>
      <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
      <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js"></script> 
      <title>My AR App</title>
      </head>
      <body>
        <a-scene></a-scene>
      </body>

    </div>
  )
}

export default ar


