import { Link } from 'react-router-dom';
import { FC } from 'react';
import { createNumbers } from '../../functions/createNumbers';

const stars: number[] = createNumbers(300);

export const NotFoundBlack: FC = () => (
  <section className="not-found-black">
    <div className="text">
      <h1>ERROR 404</h1>
      <h2>Page Not Found</h2>
    </div>

    {stars.map((s) => (
      <div
        style={{
          top: `${Math.random() * (100 - 1) + 1}%`,
          left: `${Math.random() * (100 - 1) + 1}%`,
        }}
        className="star"
        key={s}
      />
    ))}

    <div className="astronaut">
      <img
        // eslint-disable-next-line max-len
        src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
        alt="404"
        className="src"
      />
    </div>

    <Link
      to="/"
      className="link-to-home-black"
    >
      Go to Home

    </Link>
  </section>
);
