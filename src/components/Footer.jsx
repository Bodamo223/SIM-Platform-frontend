import styles from "../css/Footer.module.css";
export function Footer() {
  return (
    <>
      <footer>
        <div className={styles["wrapper"]}>
          <div
            className={`${styles["platform-description"]} ${styles["container"]}`}
          >
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
            <p>
              منصة SIM منصة إلكترونية تهدف إلى تنظيم الحياة الأكاديمية لطلاب قسم
              هندسة النظم والوسائط المتعددة، من خلال توحيد الجدول الدراسي
              والامتحانات والمهام والملخصات في مكان واحد.
            </p>
          </div>
          <div className={`${styles["services"]} ${styles["container"]}`}>
            <h2>الخدمات</h2>
            <ul>
              <li>
                <p>الجدول الدراسي</p>
              </li>
              <li>
                <p>مركز الإمتحانات</p>
              </li>
              <li>
                <p>مهامي والتكليفات</p>
              </li>
              <li>
                <p>الملخصات</p>
              </li>
            </ul>
          </div>
          <div className={`${styles["department"]} ${styles["container"]}`}>
            <h2>القسم</h2>
            <ul>
              <li>
                <p>التحديثات</p>
              </li>
              <li>
                <p>دليل الفرقة الأولى</p>
              </li>
              <li>
                <p>فرص التدريب</p>
              </li>
            </ul>
          </div>
          <div className={`${styles["contact"]} ${styles["container"]}`}>
            <h2>التواصل</h2>
            <ul>
              <li>
                <p>مجموعات الواتساب الرسمية</p>
              </li>
              <li>
                <p>تابعنا على فيسبوك</p>
              </li>
              <li>
                <p>الإبلاغ عن مشكلة</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["footer-bar"]}>
          <p>تصميم وتطوير: عبدالله محمد عبدالسلام</p>
          <p>© 2026 منصة SIM. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </>
  );
}
