/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Epic Search</p>
            <img src={assets.user_icon} alt="" />
        </div>
     <div className="main-container">

        {!showResult
        ?<>
        <div className="greet">
            <p><span>Hello, User</span></p>
            <p>How can I help you Today?</p>
        </div>
        <div className="cards">
            <div onClick={()=>onSent("Suggest some beautiful places to see on upcoming trip")} className="card">
                <p>Suggest some beautiful places to see on upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div onClick={()=>onSent("Summarize the concept of Urban planning briefly")} className="card">
                <p>Summarize the concept of Urban planning briefly </p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div onClick={()=>onSent("Brainstorm team Bonding activities for our work retreat")} className="card">
                <p>Brainstorm team Bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div onClick={()=>onSent("Improve the readability of the following code")}
             className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        : <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.epic_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr /> 
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData
                }}></p>
                }
                
            </div>

        </div>
        }

        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt Here' />
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
            <p className="bottom-info">
            Made with ❤️ by <a href='https://www.linkedin.com/in/aaryan-upadhyay/' target='_blank'>Aryan</a>
        </p>
        </div>
     </div>
    </div>
  )
}

export default Main