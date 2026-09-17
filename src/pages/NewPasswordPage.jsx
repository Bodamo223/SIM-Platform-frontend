import { useState } from "react";
import styles from "../css/NewPasswordPage.module.css";
export function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmendPassword, setShowConfirmedPassword] = useState(false);
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
          <div className={styles["new-password-container"]}>
            <div className={styles["icon-container"]}>
              <i class="fa-solid fa-lock"></i>
            </div>
            <div className={styles["heading"]}>
              <h1>كلمة مرور جديدة</h1>
              <p>
                لحساب{" "}
                <span style={{ color: "var(--color-text)" }}>
                  bodamo223@gmail.com
                </span>{" "}
                اختر كلمة مرور قوية ولا تستخدمها في حسابات أخرى.
              </p>
            </div>
            <div className={styles["input-container"]}>
              <input
                type={showConfirmendPassword ? "text" : "password"}
                placeholder="  "
              />
              <label>تاكيد كلمة المرور</label>
              <i
                id={styles["eye"]}
                className={`fa-solid ${showConfirmendPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowConfirmedPassword((prev) => !prev)}
              ></i>
            </div>
            <div className={styles["input-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="  "
              />
              <label>كلمة المرور</label>
              <i
                id={styles["eye"]}
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword((prev) => !prev)}
              ></i>
            </div>
            <button>تحديث كلمة المرور</button>
          </div>
          <p>سيتم تسجيل خروجك من جميع الأجهزة الأخرى بعد تحديث كلمة المرور.</p>
        </div>
      </div>
    </>
  );
}
