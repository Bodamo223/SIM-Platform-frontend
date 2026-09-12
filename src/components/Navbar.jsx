import styles from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

export function Navbar() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <nav>
      <div className={styles["logo-container"]}>
        <svg
          width="38"
          height="38"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 4 L91 27 V73 L50 96 L9 73 V27 Z"
            stroke="var(--color-primary)"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="21"
            stroke="var(--color-primary)"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M50 29 V42 M50 58 V71 M29 50 H42 M58 50 H71"
            stroke="var(--color-primary)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="5" fill="var(--color-primary)" />
        </svg>
        <div className={styles["logo-text"]}>
          <strong>SIM</strong>
          <span>SOFTWARE INDUSTRY & MULTIMEDIA</span>
        </div>
      </div>

      <ul className={styles["links"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles["active-link"] : styles["link"]
            }
          >
            الرئيسية
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? styles["active-link"] : styles["link"]
            }
          >
            الجدول الدراسي
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/assignments"
            className={({ isActive }) =>
              isActive ? styles["active-link"] : styles["link"]
            }
          >
            مهامي والتكليفات
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exams"
            className={({ isActive }) =>
              isActive ? styles["active-link"] : styles["link"]
            }
          >
            مركز الإمتحانات
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/summaries"
            className={({ isActive }) =>
              isActive ? styles["active-link"] : styles["link"]
            }
          >
            الملخصات
          </NavLink>
        </li>
        <li>
          <NavLink
            to="updates"
            className={({ isActive }) =>
              isActive ? styles["active-link"] : styles["link"]
            }
          >
            التحديثات
          </NavLink>
        </li>
      </ul>

      <div className={styles["nav-actions"]}>
        <div className={styles["dark-mode-btn"]}>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={styles["theme-toggle"]}
          >
            <svg
              className={`${styles.icon} ${styles.sun} ${
                isDark ? styles["visible-icon"] : styles["hidden-icon"]
              }`}
              viewBox="0 0 24 24"
              fill="yellow"
            >
              <circle cx="12" cy="12" r="5" />
              <rect x="11" y="1" width="2" height="3.5" rx="1" />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(45 12 12)"
              />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(90 12 12)"
              />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(135 12 12)"
              />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(180 12 12)"
              />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(225 12 12)"
              />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(270 12 12)"
              />
              <rect
                x="11"
                y="1"
                width="2"
                height="3.5"
                rx="1"
                transform="rotate(315 12 12)"
              />
            </svg>

            <svg
              className={`${styles.icon} ${styles.moon} ${
                isDark ? styles["hidden-icon"] : styles["visible-icon"]
              }`}
              viewBox="0 0 24 24"
              fill="darkblue"
            >
              <path d="M21.75 15.5A9.75 9.75 0 0 1 8.5 2.25A10.25 10.25 0 1 0 21.75 15.5Z" />
            </svg>
          </button>
        </div>
        <div className={styles["login"]}>تسجيل الدخول</div>
      </div>
    </nav>
  );
}
