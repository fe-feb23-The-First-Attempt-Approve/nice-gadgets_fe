import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';

// eslint-disable-next-line
type SectionId = 'main' | 'cart' | 'viewed' | 'favorites' | 'settings' | 'support';

export const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('main');

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <div className="profile-page">
      <div className="profile-page__navigation">
        <nav>
          <Link to="/" className="logo">
            <Logo />
          </Link>

          <ul>
            <li>
              <Link to="/" className="logo">
                Back to Shop
              </Link>
            </li>

            <li>
              <a
                href="#/profile/#main"
                onClick={() => handleSectionClick('main')}
              >
                My Profile
              </a>
            </li>

            <li>
              <a
                href="#/profile/#viewed"
                onClick={() => handleSectionClick('viewed')}
              >
                Last Viewed
              </a>
            </li>

            <li>
              <a
                href="#/profile/#cart"
                onClick={() => handleSectionClick('cart')}
              >
                Cart
              </a>
            </li>

            <li>
              <a
                href="#/profile/#favorites"
                onClick={() => handleSectionClick('favorites')}
              >
                Favorites
              </a>
            </li>

            <li>
              <a
                href="#/profile/#settings"
                onClick={() => handleSectionClick('settings')}
              >
                Settings
              </a>
            </li>

            <li>
              <a
                href="#/profile/#support"
                onClick={() => handleSectionClick('support')}
              >
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="profile-page__content">
        {activeSection === 'main' && (
          <div id="main">
            <h2>My Profile</h2>
            <p>Content of profile</p>
          </div>
        )}

        {activeSection === 'cart' && (
          <div id="cart">
            <h2>My Cart</h2>

            <p>Content of Cart + recent purchases?</p>
          </div>
        )}

        {activeSection === 'viewed' && (
          <div id="viewed">
            <h2>Last Viewed</h2>

            <p>Content of last viewed</p>
          </div>
        )}

        {activeSection === 'favorites' && (
          <div id="favorites">
            <h2>Favorites</h2>

            <p>Content of last Favorites</p>
          </div>
        )}

        {activeSection === 'settings' && (
          <div id="settings">
            <h2>Settings</h2>

            <p>Change personal data, password...</p>
            <p>Toogle theme</p>
            <img
              // eslint-disable-next-line max-len
              src="https://uidesigndaily.fra1.digitaloceanspaces.com/uploads/1388/day_1388.png"
              alt="example"
            />
          </div>
        )}

        {activeSection === 'support' && (
          <div id="support">
            <h2>Support</h2>

            <p>Form for sending letter</p>
            <p>** Have some questions? Text Us...</p>
            <p>**name & email - by default (but can be changed as well)</p>
            <p>fields: name, emain, question, text</p>
            <img
              // eslint-disable-next-line max-len
              src="https://cdn.dribbble.com/users/4983384/screenshots/11118849/airslate_contact0.png?resize=400x0"
              alt="example"
            />
          </div>
        )}
      </div>
    </div>
  );
};
