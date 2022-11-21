import Link from "next/link";
import { useState } from "react"
import { Button, StyledSecuirity } from "../settings.style"

const Secuirity = () => {
    const [value, setValue] = useState('alanByte003');
    const [newValue, setNewValue] = useState('');
    const [confirmValue, setConfirmValue] = useState('');
    const [isChangesMade, setIsChangesMade] = useState(false)
    const [inputError, setInputError] = useState(false)
    const handleSaveChanges = (e) =>{
        e.preventDefault()
        if(confirmValue !== newValue){
            setIsChangesMade(true)
            setInputError(true)
        }else{
            setIsChangesMade(false)
            setInputError(false)
        }
    }

    return (
        <StyledSecuirity>
            <div className="info">
                <p> Password </p>
                <span> In order to better protect your account, make sure you set up a strong and secure password. </span>
            </div>

            <form>
                <div className="pwd current-pwd">
                    <label htmlFor="current-pwd"> Current Password </label>
                    <input type="password" name="password" value={value} onChange={(e) => {setValue(e.target.value),setIsChangesMade(true)}} readOnly />
                </div>
                <div className="pwd new-pwd">
                    <label htmlFor="current-pwd"> New Password </label>
                    <input type="password" name="password" value={newValue} onChange={(e) => {setNewValue(e.target.value),setIsChangesMade(true)}} required />
                </div>
                <div className="pwd confirm-pwd">
                    <label htmlFor="current-pwd"> Confirm Password </label>
                    <input className={inputError ? 'input-error' : ''} type="password" name="password" value={confirmValue} onChange={(e) => {setConfirmValue(e.target.value),setIsChangesMade(true)}} required />
                </div>

            </form>

            <div className="controls">
                <Button onClick={handleSaveChanges} className={isChangesMade ? '' : 'inactive'}> Save changes </Button>
            </div>
        </StyledSecuirity>
    )
}

export default Secuirity

