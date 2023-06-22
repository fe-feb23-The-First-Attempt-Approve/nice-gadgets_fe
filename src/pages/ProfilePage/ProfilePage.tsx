import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LastViewed } from '../../components/LastViewed';
import { Logo } from '../../components/Logo';
import { SupportPage } from '../SupportPage';
import { Profile } from '../../components/Profile';

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
            <li className="profile-page__item">
              <Link to="/">
                Back to Shop
              </Link>
            </li>

            <li className="profile-page__item">
              <a
                href="#/profile/#main"
                onClick={() => handleSectionClick('main')}
              >
                My Profile
              </a>
            </li>

            <li className="profile-page__item">
              <a
                href="#/profile/#viewed"
                onClick={() => handleSectionClick('viewed')}
              >
                Last Viewed
              </a>
            </li>

            <li className="profile-page__item">
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
          <div id="main" className="profile-page__main">
            <Profile />
          </div>
        )}

        {activeSection === 'viewed' && (
          <div id="viewed">
            <LastViewed />
          </div>
        )}

        {activeSection === 'support' && (
          <div id="support">
            <h1 className="support-title">Have some questions? Ask us!</h1>

            <SupportPage />
          </div>
        )}
      </div>
    </div>
  );
};
