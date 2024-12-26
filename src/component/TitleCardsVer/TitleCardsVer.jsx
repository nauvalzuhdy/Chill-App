
import React, { useState, useEffect, useRef } from 'react';
import './Titlecardsver.css';
import cards_data_vertical from '../../assets/cards_vertical/Cards_Vertical';
import cards_data_hover from '../../assets/cards_hover/cards_hover';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';


const TitleCardsVer = ({ title, category }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className='titlecardsver'>
      <h2>{title}</h2>
      <div className="card-list-ver" ref={cardsRef}>
        {cards_data_vertical.map((card, index) => {
          return (
            <div
              className="card-ver"
              key={index}
              onMouseOver={() => setHoverIndex(index)}
              onMouseOut={() => setHoverIndex(null)}
            >
              {hoverIndex === index ? (
                <>
                    
                    <img src={cards_data_hover[index].image_hover} alt="" />
                    <div className='btn-icon'>
                        <div className='left-btn'>
                           {/* <PlayCircleIcon/>
                           <CheckCircleOutlineIcon/> */}
                        </div>
                        <div className='right-btn'>
                           {/* <ArrowDropDownCircleOutlinedIcon/> */}
                        </div>
                    </div>
                    <div className='item-Info-Hover'>
                        <span className='limit-age'>13+</span>
                        <span>16 Episode</span>
                    </div>
                    <div className='Genre'>
                        <p>misteri</p>
                        <p>kriminal</p>
                        <p>fantasi</p>
                    </div>
                </>
              ) : (
                <img src={card.image} alt="" />
              )}
              {/* <p>{card.name}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCardsVer;



