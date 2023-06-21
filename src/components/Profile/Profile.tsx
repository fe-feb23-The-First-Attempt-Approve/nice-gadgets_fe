import {
  FC,
  FormEvent,
  memo,
  useState,
} from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
// import Select from 'react-select';

import countryList from 'react-select-country-list';
import ReactFlagsSelect from 'react-flags-select';
import { useAuth } from '../../providers/AuthContext';

export default function CountryDropdown() {
  const [select, setSelect] = useState('');
  const onSelect = (code: any) => setSelect(code);
  const countryOptions = countryList().getData().map(country => country.value);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br />

      <ReactFlagsSelect
        selected={select}
        onSelect={onSelect}
        countries={countryOptions}
      />
      <br />

      <div className="react-tel-input flag us" />
    </div>
  );
}

export const Profile: FC = memo(() => {
  const { user, setUser } = useAuth();
  const [phone, setPhone] = useState<any>(user?.phone || '');
  const [userName, setUserName] = useState(user?.userName || '');
  const [city, setCity] = useState(user?.city || '');
  const [country, setCountry] = useState(user?.country || '');
  const [address, setAddress] = useState(user?.address || '');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedUser = {
      ...user,
      userName,
      city,
      country,
      address,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__avatar">{user?.userName?.slice(0, 1)}</div>
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
        <div>
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

          <label htmlFor="phone">Phone</label>
          <PhoneInput
            id="phone"
            name="phone"
            className="profile__input"
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
          />
        </div>

        <div>
          <div className="profile__input">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="profile__input">
            <label htmlFor="city">City</label>
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
            <label htmlFor="address">Address</label>
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

      <CountryDropdown />
    </div>
  );
});
