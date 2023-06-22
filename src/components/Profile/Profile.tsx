import {
  FC,
  FormEvent,
  memo,
  useEffect,
  useState,
} from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import countryList from 'react-select-country-list';
import ReactFlagsSelect from 'react-flags-select';
import { useAuth } from '../../providers/AuthContext';
import NotificationMessage from '../Notification/Notification';
import { IconPerson } from '../Icons/_IconKit';

export const Profile: FC = memo(() => {
  const { user, setUser } = useAuth();
  const [phone, setPhone] = useState<any>(user?.phone || '');
  const [userName, setUserName] = useState(user?.userName || '');
  const [city, setCity] = useState(user?.city || '');
  const [address, setAddress] = useState(user?.address || '');
  const [country, setCountry] = useState(user?.country || 'UA');
  const onSelectCountry = (code: any) => setCountry(code);
  const countryOptions = countryList().getData().map(c => c.value);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setPhone(parsedUser.phone || '');
      setUserName(parsedUser.userName || '');
      setCity(parsedUser.city || '');
      setAddress(parsedUser.address || '');
      setCountry(parsedUser.country || 'UA');
    }
  }, []);

  const saveChangesMessage = NotificationMessage({
    message: 'Changes have been saved',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedUser = {
      ...user,
      userName,
      city,
      address,
      phone,
      country,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);

    saveChangesMessage();
  };

  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__avatar">
          {userName
            ? userName.slice(0, 1)
            : <IconPerson />}
        </div>
        <div className="profile__user-data">
          <div className="profile__name">{user?.userName}</div>
          <div className="profile__email">{user?.email}</div>
        </div>
      </div>

      <form
        id="profileForm"
        className="profile__form"
        onSubmit={handleSubmit}
      >
        <div className="profile__form-side">
          <div className="profile__input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <label htmlFor="phone">
            Phone:
            <PhoneInput
              id="phone"
              name="phone"
              className="profile__input profile__input--flex"
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
            />
          </label>

        </div>

        <div className="profile__form-side">
          <div className="profile__input">
            <label htmlFor="country">Country:</label>
            <div className="Profile__flags-elect">

              <ReactFlagsSelect
                id="country"
                selected={country}
                onSelect={onSelectCountry}
                countries={countryOptions}
              />

              <div className="react-tel-input flag us" />
            </div>
          </div>

          <div className="profile__input">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="profile__input">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
      </form>

      <button
        type="submit"
        form="profileForm"
        className="profile__action"
      >
        Save Changes
      </button>
    </div>
  );
});
