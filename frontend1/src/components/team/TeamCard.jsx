import React from "react"
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
      {team.map((val,i) => (
        <div className='items shadow' key={i}>
          <div className='img'>
            <img src={val.cover} alt='name' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
