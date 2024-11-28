import S from "./style.module.css"

import React from 'react'

export default function Slider() {
  return (
    <div className={S.container_slider}>
      <div id={S.container_slide} style={{backgroundImage: `url("./logo.png")` }}>

      </div>
    </div>
  )
}
