import { Link } from 'react-router-dom';
import cn from 'classnames';
import { VscGithub } from 'react-icons/vsc';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

type Props = {
  name: string;
  gh: string;
  linkedin: string;
  mail: string;
  photo?: string;
  isTeamLead?: boolean;
};

export const Developers: React.FC<Props> = (
  {
    name,
    gh,
    linkedin,
    mail,
    photo,
    isTeamLead,
  },
) => {
  return (
    <figure className="dev-content__developer">
      <img
        src={photo}
        alt={name}
        className="dev-content__background"
      />

      <img
        src={photo}
        alt={name}
        className={cn(
          'dev-content__dev-photo', { 'dev-active': isTeamLead },
        )}
      />
      <figcaption className="dev-content__info">
        <h3 className="dev-content__dev-name">
          {name}
          <span className="dev-content__dev-position">
            developer
          </span>
        </h3>

        <div className="dev-content__media-icons">
          <Link
            to={gh}
            className="dev-content__icon-item"
            target="_blank"
          >
            <VscGithub size="22px" />
          </Link>

          <Link
            to={linkedin}
            className="dev-content__icon-item"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>

          <Link
            to={mail}
            className="dev-content__icon-item"
            target="_blank"
            title={mail}
          >
            <AiOutlineMail />
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};
