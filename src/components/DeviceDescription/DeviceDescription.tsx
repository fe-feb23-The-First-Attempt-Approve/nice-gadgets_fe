import { GadgetItem } from '../../types/GadgetItem';

type Props = {
  device: GadgetItem;
};

export const DeviceDescription:React.FC<Props> = ({ device }) => {
  return (
    <section className="card-page__about about">
      <h2 className="about__title">
        About
      </h2>

      <div className="about__description">
        <h3 className="about__subtitle">
          {device.description[0].title}
        </h3>
        <p className="about__text">
          {device.description[0].text[0]}
        </p>
        <p className="about__text">
          {device.description[0].text[1]}
        </p>
      </div>

      <div className="about__description">
        <h3 className="about__subtitle">
          {device.description[1].title}
        </h3>
        <p className="about__text">
          {device.description[1].text[0]}
        </p>
      </div>

      <div className="about__description">
        <h3 className="about__subtitle">
          {device.description[2].title}
        </h3>
        <p className="about__text">
          {device.description[2].text[0]}
        </p>
      </div>
    </section>
  );
};
