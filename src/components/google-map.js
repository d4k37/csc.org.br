import React from "react"

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.6315015046493!2d-44.91618568452566!3d-20.19106295169569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0a41031bdf593%3A0x315d96cc7391bf!2sComunidade%20Servos%20da%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1619937299247!5m2!1spt-BR!2sbr"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default GoogleMap
