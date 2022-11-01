import { useState } from "react";
import { StyledSettings, Plain, Danger } from "./settings.style";
import { categories } from "./settingsCategories";
import { General, Notification, Secuirity, Payment, Profile, Policy } from'./categories';
import { TbLogout } from 'react-icons/tb';
import { VscClose } from 'react-icons/vsc';


const Settings = () => {
    const [selected, setSelected] = useState('General');
    const [logoutModal, setLogoutModal] = useState(false);

    const displayLogoutModal = () => {
        setLogoutModal(true)
    }
    
    return (
        <StyledSettings>
            <main>
                <ul className='categories'>
                    {categories.map(category => (
                        <li 
                            key={category.id} 
                            onClick={() => setSelected(category.category)}
                            style={{ color: selected == category.category ? 'var(--black)' : '#9e82bd', fontSize: selected == category.category ? '1.5rem' : '', fontWeight: selected == category.category ? '500' : '400', borderBottom: category.category == selected ? '2.5px solid var(--primary)' : ''}}
                        >
                            { category.category } 
                        </li>
                    ))}
                </ul>

                <div className='contents'>
                    { 
                        selected == 'General' ? <General /> : selected == 'Notification' ? <Notification /> : selected == 'Secuirity' ? <Secuirity /> : selected == 'Payment' ? < Payment /> : selected == 'Profile' ? <Profile /> : selected == 'Privacy policy' ? <Policy /> : ''
                    }
                </div>

            </main>
            { logoutModal && <div className="blurred" onClick={() => setLogoutModal(false)} />}

            { logoutModal && <div className="modal">
                <div className="close-modal" onClick={() => setLogoutModal(false)}>
                    <VscClose style={{ height: '19px', width: '19px', color: 'var(--dark-gray)' }} />
                </div>

                <div className="contents">
                    <TbLogout style={{ height: '27px', width: '27px', color: 'red' }} />
                    <p> Are you sure you want to logout? </p>
                    <span> This is not a reversible action and you might need to log back in to gain access to your account </span>

                    <div className="btn-controls">
                        <Plain onClick={() => setLogoutModal(false)}> Cancel </Plain>
                        <Danger> Logout </Danger>
                    </div>
                </div>
            </div>}

            <div className='logout' style={{ display: logoutModal && 'none' }}  onClick={displayLogoutModal}>
                <TbLogout style={{ height: '27px', width: '27px', color: 'red' }} />
                <p> Log Out </p>
            </div>
        </StyledSettings>
    )
}

export default Settings



