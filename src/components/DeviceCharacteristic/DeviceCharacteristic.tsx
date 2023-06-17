import { GadgetItem } from '../../types/GadgetItem';

type Props = {
  device: GadgetItem;
};

export const DeviceCharacteristic:React.FC<Props> = ({ device }) => {
  return (
    <section className="card-page__tech-specs tech-specs">
      <h2 className="about__title">
        Tech specs
      </h2>

      <div className="settings__parameters tech-specs-parameters">
        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Screen
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.screen}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Resolution
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.resolution}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Processor
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.processor}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          RAM
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.ram}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Built in memory
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.capacityAvailable.join(', ')}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Camera
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.camera}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Zoom
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.zoom}
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_key"
        >
          Cell
        </p>

        <p className="tech-specs-parameters__description
                tech-specs-parameters__description_value"
        >
          {device.cell.join(', ')}
        </p>
      </div>
    </section>
  );
};
