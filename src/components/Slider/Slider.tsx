interface Props {
  title: string;
}

export const Slider: React.FC<Props> = ({ title }) => {
  return (
    <div className="slider">
      <h2 className="slider__title">
        {title}
      </h2>
    </div>
  );
};
