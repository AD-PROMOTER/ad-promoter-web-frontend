import { useState } from 'react';
import { StyledNotification, Button, ball } from '../settings.style';
import { Spinner, useToast } from '@chakra-ui/react';

const Notification = ({ userDetails, token }) => {
  const [browser, setBrowser] = useState(userDetails.browserNotification);
  const [email, setEmail] = useState(userDetails.emailNotification);
  const [desktop, setDesktop] = useState(userDetails.desktopNotification);
  const [others, setOthers] = useState(userDetails.NotifyOffers);
  const [isChangesMade, setIsChangesMade] = useState(false);
  const [isChangesUpdating, setIsChangesUpdating] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notificationSettings = {
      browserNotification: browser,
      emailNotification: email,
      desktopNotification: desktop,
      NotifyOffers: others,
    };

    setIsChangesUpdating(true)
    const response = await fetch('https://api.ad-promoter.com/api/v1/user/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(notificationSettings),
    });

    try {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }

      if (response.status === 500) {
        throw new Error('Could not update Notification settings please try again');
      }

      if (response.status === 200) {
        const data = await response.json();
        setIsChangesUpdating(false)
        toast({
          title: 'Notification Settings Updated',
          status: 'success',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
        window.localStorage.setItem("user-detail", JSON.stringify(data.data))
        window.location.reload();
      }
    } catch (error) {
      setIsChangesUpdating(false)
      toast({
        title: `${error.message}`,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'top-left',
      });
    }

    setIsChangesMade(false);
  };

  return (
    <StyledNotification>
      <form onSubmit={handleSubmit}>
        <ul className="notifications-selection">
          <li>
            <div className="container">
              <input
                className="checkbox"
                id="checkbox"
                type="checkbox"
                onChange={() => {
                  setBrowser(!browser), setIsChangesMade(true);
                }}
                checked={browser}
              />

              <label htmlFor="checkbox">
                <i className="one"></i>
                <i className="two"></i>
                <div
                  className="ball"
                  style={{
                    backgroundColor: browser ? 'var(--light-blue)' : '#EDEDED',
                  }}
                />
              </label>
            </div>
            <span> Browser notification </span>
          </li>

          <li key={2}>
            <div className="container">
              <input
                className="checkbox"
                id="checkbox-2"
                type="checkbox"
                onChange={() => {
                  setEmail(!email), setIsChangesMade(true);
                }}
                checked={email}
              />

              <label htmlFor="checkbox-2">
                <i className="one"></i>
                <i className="two"></i>
                <div
                  className="ball"
                  style={{
                    backgroundColor: email ? 'var(--light-blue)' : '#EDEDED',
                  }}
                />
              </label>
            </div>
            <span> Email notification </span>
          </li>

          <li key={3}>
            <div className="container">
              <input
                className="checkbox"
                type="checkbox"
                id="checkbox-3"
                onChange={() => {
                  setDesktop(!desktop), setIsChangesMade(true);
                }}
                checked={desktop}
              />

              <label htmlFor="checkbox-3">
                <i className="one"></i>
                <i className="two"></i>
                <div
                  className="ball"
                  style={{
                    backgroundColor: desktop ? 'var(--light-blue)' : '#EDEDED',
                  }}
                />
              </label>
            </div>
            <span> Dektop notification </span>
          </li>

          <li key={4}>
            <div className="container">
              <input
                className="checkbox"
                type="checkbox"
                id="checkbox-4"
                onChange={() => {
                  setOthers(!others), setIsChangesMade(true);
                }}
                checked={others}
              />

              <label htmlFor="checkbox-4">
                <i className="one"></i>
                <i className="two"></i>
                <div
                  className="ball"
                  style={{
                    backgroundColor: others ? 'var(--light-blue)' : '#EDEDED',
                  }}
                />
              </label>
            </div>
            <span> Notify me on all offers </span>
          </li>
        </ul>

        <div className="controls">
          <Button className={isChangesMade ? '' : 'inactive'}>
            {isChangesUpdating ? <Spinner /> : 'Save changes' }
          </Button>
        </div>
      </form>

    </StyledNotification>
  );
};

export default Notification;
