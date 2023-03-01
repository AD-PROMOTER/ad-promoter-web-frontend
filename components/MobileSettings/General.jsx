import React, {useState} from 'react'
import Image from 'next/image'
import back from '@/public/assets/back-icon.svg'
import { GeneralContainer } from './mobileSettings.style'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'

const General = ({handleBack}) => {
  const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(true);
    const [deactivate, setDeactivate] = useState(false);
    // const [deactivationReason, setDeactivationReason] = useState('I need to change my username');
    const [userInput, setUserInput] = useState('');
    const [listValue, setListValue] = useState('English ( Default )')
    const [deactivationListValue, setDeactivationListValue] = useState('I want to change my username')
    const [showDropdown, setShowDropdown] = useState(false)
    const [showDeactivationDropdown, setShowDeactivationDropdown] = useState(false)
    const [isChangesMade, setIsChangesMade] = useState(false)
    const ClickedList = (e) =>{
        setListValue(e.target.innerText)
        setIsChangesMade(true)
    }

    const ClickedDeactivationList = (e) =>{
        setDeactivationListValue(e.target.innerText)
    }

    const handleSaveChanges = (e) =>{
        e.preventDefault()
        setIsChangesMade(false)
    }

    const handleClick = () => {
        setSelected(false);
        setClicked(true);
        setIsChangesMade(true)
        
    }
    const handleSelected = () => {
        setClicked(false);
        setSelected(true);
        setIsChangesMade(true)
    }
  return (
    <GeneralContainer>
      <div className='general'>
        <div onClick={handleBack}>
            <Image src={back} alt="back"/>
        </div>
        <h3>General</h3>
      </div>
      <div className="dropdownContainer">
        <h3>Language</h3>
        <div className='dropdown' onClick={() => setShowDropdown(!showDropdown)}>
          <p className='inputText'>{listValue}</p>
          {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
        </div>
        {showDropdown && (
          <ul className="">
            <li onClick={ClickedList}>English ( Default )</li>
            <li onClick={ClickedList}>Spanish</li>
            <li onClick={ClickedList}>Greek</li>
            <li onClick={ClickedList}>Yoruba</li>
          </ul>
        )}
      </div>
      <div className='timezone'>
        <p> Timezone </p>
        <div>
          <div id='select' onClick={handleSelected} style={{ border: selected ? '0.2rem solid var(--light-blue)' : '0.145rem solid #E1E1E1', boxShadow: selected && 'var(--shadow-6)' }}>
            <label> 24 Hours </label>
            <span style={{ height: '20px', width: '20px', borderRadius: '50%', border: selected ? '6px solid var(--light-blue)' : '5.5px solid #E1E1E1' }}></span>
          </div>
          <div id='select' onClick={handleClick}  style={{ border: clicked ? '0.2rem solid var(--light-blue)' : '0.145rem solid #E1E1E1', boxShadow: clicked && 'var(--shadow-6)'}}>
            <label> 12 Hours </label>
            <span style={{ height: '20px', width: '20px', borderRadius: '50%', border: clicked ? '6px solid var(--light-blue)' : '5.5px solid #E1E1E1' }}></span>
          </div>
        </div>
      </div>
      <div className='deactivate'>Deactivate account</div>
      <div className='delete' onClick={() => setDeactivate(true)}>Delete account permanently</div>
      {deactivate && <div className="modal-backdrop" onClick={() =>setDeactivate(false)}></div>}
      {deactivate && (
        <div className="deactivate-modal" onClick={e => e.stopPropagation()} >
            <div className="text-head">
              <h3>Account Deactivation</h3>
              <p>What happens when you deactivate your account?</p>
            </div>
            <div className='unordered-list'>
              <li>Your profile and Progress won’t be shown on AD-Promoter anymore.</li>
              <li>Pending withdrawals will be cancelled</li>
              <li>You will lose all your revenues. Withdraw your revenue before deactivating your account.</li>
            </div>
            <div className="text-select">
                <h3>I’m leaving because....</h3>
                <div className="dropdown" onClick={() => setShowDeactivationDropdown(!showDeactivationDropdown)}>
                    <p>{deactivationListValue}</p>
                    {showDeactivationDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
                </div>
                {showDeactivationDropdown && (
                    <ul className="list-dropdown">
                        <li onClick={ClickedDeactivationList}>I want to change my username</li>
                        <li onClick={ClickedDeactivationList}>It has gory images</li>
                        <li onClick={ClickedDeactivationList}>Nothing</li>
                        <li onClick={ClickedDeactivationList}>Other</li>
                    </ul>
                )}
            </div>
            <div className="message">
                <h3>Tell us more (Optional)</h3>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Help us become better"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </div>
          <div className="modal-btn">Delete account permanently</div>
        </div>
      )}

    </GeneralContainer>
  )
}

export default General
