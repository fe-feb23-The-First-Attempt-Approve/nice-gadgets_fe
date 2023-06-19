import { Developers } from '../../components/Developers';
import { developers } from '../../utils/developers';

export const Contacts = () => {
  return (
    <main className="contacts">
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
            }) => (
              <Developers
                name={name}
                gh={gh}
                linkedin={linkedin}
                mail={mail}
                photo={photo}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
};