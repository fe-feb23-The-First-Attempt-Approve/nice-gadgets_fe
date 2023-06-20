import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundWhite: FC = () => (
  <section className="page_404">
    <div className="container">
      <h1 className="text-block">404</h1>
      <div className="gif" />

      <div className="contant_box_404 text-block">
        <h2>
          Look like you&apos;re lost
        </h2>

        <p>the page you are looking for not avaible!</p>

        <Link
          to="/"
          className="link_404"
        >
          Go to Home
        </Link>
      </div>
    </div>
  </section>
);
