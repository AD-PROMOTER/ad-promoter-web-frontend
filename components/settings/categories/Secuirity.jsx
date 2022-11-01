import Link from "next/link";
import { useState } from "react"
import { Button, StyledSecuirity } from "../settings.style"

const Secuirity = () => {
    const [value, setValue] = useState('alanByte003');
    const [newValue, setNewValue] = useState('depth2022');
    const [confirmValue, setConfirmValue] = useState('depth2022');

    return (
        <StyledSecuirity>
            <div className="info">
                <p> Password </p>
                <span> In order to better protect your account, make sure you set up a strong and secure password. </span>
            </div>

            <form>
                <div className="pwd current-pwd">
                    <label htmlFor="current-pwd"> Current Password </label>
                    <input type="password" name="password" value={value} onChange={(e) => setValue(e.target.value)} readOnly />
                </div>
                <div className="pwd new-pwd">
                    <label htmlFor="current-pwd"> New Password </label>
                    <input type="password" name="password" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                </div>
                <div className="pwd confirm-pwd">
                    <label htmlFor="current-pwd"> Confirm Password </label>
                    <input type="password" name="password" value={confirmValue} onChange={(e) => setConfirmValue(e.target.value)} />
                </div>

            </form>

            <div className="other email-verification">
                <div className="contents">
                    <p> Email </p>
                    <span> Please check your email and click the verification link we sent to you. Didnt get the verification email? 
                    <Link href='#'> Click Here </Link> </span>
                </div>
                <button> Not verified </button>
            </div>

            <div className="other sms-recovery">
                <div className="contents">
                    <p> SMS Recovery </p>
                    <span> We will never share your phone number  </span>
                </div>
                <button> Set up </button>
            </div>

            <div className="controls">
                <Button> Save changes </Button>
            </div>
        </StyledSecuirity>
    )
}

export default Secuirity

