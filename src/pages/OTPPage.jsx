import styles from "../css/OTPPage.module.css";
import { useRef, useState, useEffect } from "react";

export function OTPPage() {
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleInput = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    e.target.value = value;
    if (value && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !e.target.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
          <div className={styles["icon-container"]}>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className={styles["heading"]}>
            <h1>تأكيد تسجيل الدخول</h1>
            <p>سيصلك كود مكون من ٦ أرقام على بريدك الإلكتروني </p>
            <span style={{ color: "var(--color-text)" }}>
              bodamo223@gmail.com
            </span>
          </div>
          <div className={styles["OTP-input"]}>
            {[...Array(6)].map((_, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                maxLength={1}
                pattern="[0-9]"
                ref={(el) => (inputsRef.current[idx] = el)}
                onInput={(e) => handleInput(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              />
            ))}
          </div>
          <div className={styles["timer"]}>
            <p>
              {timer > 0
                ? ` الكود صالح لمدة ${timer} ثانية`
                : "انتهت صلاحية الكود"}
            </p>
          </div>
          <button>تأكيد الوصول</button>
          <p className={styles["resend-code"]}>
            لم يصلك الكود؟ <span>إعادة الأرسال</span>
          </p>
        </div>
      </div>
    </>
  );
}
