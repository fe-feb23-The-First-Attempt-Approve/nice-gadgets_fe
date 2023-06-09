import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const IconBar = () => {
  return (
    <ul className="icon-bar">
      <li className="icon-bar__item">
        <button type="button" className="icon-bar__link">
          <svg
            className="icon-bar__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" /> {/* eslint-disable-line */}
          </svg>
        </button>
      </li>

      <li className="icon-bar__item">
        <button type="button" className="icon-bar__link">
          <svg
            className="icon-bar__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m475-80 181-480h82L924-80h-87l-41-126H604L557-80h-82Zm151-196h142l-70-194h-2l-70 194Zm-466 76-55-55 204-204q-38-44-67.5-88.5T190-640h87q17 33 37.5 62.5T361-517q45-47 75-97.5T487-720H40v-80h280v-80h80v80h280v80H567q-22 69-58.5 135.5T419-458l98 99-30 81-127-122-200 200Z" /> {/* eslint-disable-line */}
          </svg>
        </button>
      </li>

      <li className="icon-bar__item">
        <button type="button" className="icon-bar__link">
          <svg
            className="icon-bar__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M450-770v-150h60v150h-60Zm256 106-42-42 106-107 42 43-106 106Zm64 214v-60h150v60H770ZM450-40v-150h60v150h-60ZM253-665 148-770l42-42 106 106-43 41Zm518 517L664-254l41-41 108 104-42 43ZM40-450v-60h150v60H40Zm151 302-43-42 105-105 22 20 22 21-106 106Zm289-92q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-180Z" /> {/* eslint-disable-line */}
          </svg>
        </button>
      </li>

      <li className="icon-bar__item">
        <Link
          to="/favorites"
          className={cn('icon-bar__link', {
            'icon-bar__link--active': useLocation().pathname === '/favorites',
          })}
        >
          <svg
            className="icon-bar__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" /> {/* eslint-disable-line */}
          </svg>
        </Link>
      </li>

      <li className="icon-bar__item">
        <Link
          to="/cart"
          className={cn('icon-bar__link', {
            'icon-bar__link--active': useLocation().pathname === '/cart',
          })}
        >
          <svg
            className="icon-bar__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M180-80q-24 0-42-18t-18-42v-530q0-24 18-42t42-18h110q0-79 53-134.5T475-920q79 0 137 55.575T670-730h110q24 0 42 18t18 42v530q0 24-18 42t-42 18H180Zm0-60h600v-530H180v530Zm300-290q79 0 137-58t58-137h-60q0 55-40 95t-95 40q-55 0-95-40t-40-95h-60q0 79 58 137t137 58ZM350-730h260q0-55-37.5-92.5T480-860q-55 0-92.5 37.5T350-730ZM180-140v-530 530Z" /> {/* eslint-disable-line */}
          </svg>
        </Link>
      </li>
    </ul>
  );
};
