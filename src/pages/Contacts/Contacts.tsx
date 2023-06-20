// import { useEffect } from 'react';
import { Developers } from '../../components/Developers';
import { developers } from '../../utils/developers';
// import { animate } from '../../utils/matrix';

export const Contacts = () => {
  return (
    <main className="contacts">
      {/* <canvas id="canvas">.</canvas> */}
      <div className="container">
        <h2 className="contacts__title">Our Team</h2>

        <div className="contacts__content dev-content">
          {
            developers.map(({
              name,
              gh,
              linkedin,
              mail,
              photo,
              isTeamLead,
            }) => (
              <Developers
                key={name}
                name={name}
                gh={gh}
                linkedin={linkedin}
                mail={mail}
                photo={photo}
                isTeamLead={isTeamLead}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
};
