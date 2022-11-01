import { useState } from "react"
import { StyledGeneral, Button, DangerButton, Danger } from "../settings.style"


const General = () => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(true);
    const [deactivate, setDeactivate] = useState(false);
    const [userInput, setUserInput] = useState('');

    const handleClick = () => {
        setSelected(false);
        setClicked(true);
    }
    const handleSelected = () => {
        setClicked(false);
        setSelected(true);
    }

    return (
        <StyledGeneral style={{ alignItems: deactivate && 'center' }}>
            <div className='languages'>
                <p> Languages </p>
                <select className='dropdown'>
                    <option> English ( Default ) </option>
                    <option> Spanish </option>
                    <option> Greek </option>
                    <option> Arabic </option>
                    <option> Yoruba </option>
                </select>
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
            { deactivate && <div className="blurred" onClick={() => setDeactivate(false)} />}

            { deactivate && <div className="modal">
                <div className="top">
                    <h2> Account Deactivation </h2> 
                    <p> What happens when you deactivate your account? </p>  
                </div>
                <ul>
                    <li> Your profile and Progress won’t be shown on AD-Promoter anymore. </li>
                    <li> Pending withdrawals will be cancelled. </li>
                    <li> You will lose all your revenues. Withdraw your revenue before deactivating your account. </li>
                </ul>

                <div className="others">
                    <p className="reason"> I'm leaving because... </p>
                    <select className='dropdown'>
                        <option> I need to change my username </option>
                        <option> The charges are getting higher </option>
                        <option> --- Nothing </option>
                        <option> Can't disclose my reason </option>
                    </select>

                    <div className="more">
                        <p className="reason"> Tell us more ( Optional ) </p>
                        <textarea
                            rows={10}
                            placeholder='Help us become better'
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                    </div>
                </div>

                <div className="control">
                    <Danger>
                        Delete account
                    </Danger>
                </div>
                
            </div> }

            <div className="controls">
                <Button> Save changes </Button>
                <DangerButton onClick={(e) => {
                    e.preventDefault();
                    setDeactivate(true)
                }}>
                     Delete account permanently 
                </DangerButton>

            </div>
            
        </StyledGeneral>
    )
}

export default General

