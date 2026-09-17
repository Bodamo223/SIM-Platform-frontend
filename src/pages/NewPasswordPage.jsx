import styles from "../css/NewPasswordPage.module.css";
export function NewPasswordPage() {
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
                لحساب bodamo223@gmail.com اختر كلمة مرور قوية ولا تستخدمها في
                حسابات أخرى.
              </p>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="new-password">كلمة المرور الجديدة</label>
              <input type="password" id="new-password" />
              <p>
                يجب أن تتكون من ٨ أحرف على الأقل، وأن تحتوي على رقم وحرف كبير.
              </p>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="confirm-new-password">تأكيد كلمة المرور</label>
              <input type="password" id="confirm-new-password" />
            </div>
            <button>تحديث كلمة المرور</button>
          </div>
          <p>سيتم تسجيل خروجك من جميع الأجهزة الأخرى بعد تحديث كلمة المرور.</p>
        </div>
      </div>
    </>
  );
}
