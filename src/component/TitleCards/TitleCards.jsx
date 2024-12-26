import React, { useEffect, useRef } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
// import cards_data_vertical from '../../assets/cards_vertical/Cards_Vertical'




const TitleCards = ({title, category}) => {
    //scroll list effect
    const cardsRef =useRef();

    const handleWheel = (event)=>{
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{
        cardsRef.current.addEventListener('wheel', handleWheel)
    },[])
    
    return (
        <div className='titlecards'>
            <h2>{title?title:"Melanjutkan Tonton Film"}</h2>
            <div className="card-list" ref={cardsRef}>
                {cards_data.map((card, index)=>{
                    return <div className="card" key={index}>
                        <img src={card.image} alt="" />
                        <p>{card.name}</p>
                    </div>
                })}
            </div>

        </div>
    )
}

export default TitleCards
