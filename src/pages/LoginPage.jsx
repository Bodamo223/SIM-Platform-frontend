import { useState, useRef, useLayoutEffect } from "react";
import styles from "../css/LoginPage.module.css";
import { Link } from "react-router-dom";

// دالة القياس — بتقيس ارتفاع عنصر حتى لو display:none حاليًا
// من غير ما تسبب أي ومضة بصرية للمستخدم
function measureHeight(ref) {
  const el = ref.current;
  if (!el) return 0;

  const prevDisplay = el.style.display;
  const prevVisibility = el.style.visibility;
  const prevPosition = el.style.position;

  el.style.visibility = "hidden"; // مش ظاهر
  el.style.position = "absolute"; // مش بياخد مساحة من الصفحة
  el.style.display = "flex"; // نجبره ياخد أبعاده الحقيقية

  const height = el.offsetHeight; // القياس الفعلي

  // رجّعه لحالته الأصلية فورًا (قبل أي رسم بصري)
  el.style.display = prevDisplay;
  el.style.visibility = prevVisibility;
  el.style.position = prevPosition;

  return height;
}

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmendPassword, setShowConfirmedPassword] = useState(false);

  const [loginToRegister, setLoginToRegister] = useState(false);
  const [registerToLogin, setRegisterToLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const isAnimatingRef = useRef(false);
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);

  const [containerHeight, setContainerHeight] = useState(null);

  useLayoutEffect(() => {
    if (loginFormRef.current) {
      setContainerHeight(loginFormRef.current.offsetHeight);
    }
  }, []);

  function switchToRegister(e) {
    e.preventDefault();
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const targetHeight = measureHeight(registerFormRef);
    setContainerHeight(targetHeight);

    setLoginToRegister(true);
    setRegisterToLogin(false);

    setTimeout(() => {
      setShowLogin(false);
    }, 2000);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 4000);
  }

  function switchToLogin(e) {
    e.preventDefault();
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const targetHeight = measureHeight(loginFormRef);
    setContainerHeight(targetHeight);

    setRegisterToLogin(true);
    setLoginToRegister(false);

    setTimeout(() => {
      setShowLogin(true);
    }, 2000);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 4000);
  }

  return (
    <>
      <div className={styles["wrapper"]}>
        <div
          className={styles["container"]}
          style={containerHeight ? { height: containerHeight } : undefined}
        >
          <form
            ref={loginFormRef}
            style={{ display: showLogin ? "flex" : "none" }}
            className={`${styles["login-form"]} ${loginToRegister ? styles["loginToRegisterAnimation"] : ""} ${registerToLogin ? styles["registerToLoginAnimation"] : ""}`}
          >
            <h1 className={styles["heading"]}>تسجيل دخول</h1>
            <div className={styles["input-container"]}>
              <input type="text" placeholder="  " />
              <label>الرقم الجامعي</label>
              <i className="fa-solid fa-id-card"></i>
            </div>
            <div
              className={styles["input-container"]}
              style={{ marginBottom: "20px" }}
            >
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
              <Link to="/forgot-password" className={styles["forgot-password"]}>
                هل نسيت كلمة المرور؟
              </Link>
            </div>

            <button type="submit">سجّل الآن</button>
            <p style={{ fontSize: "14px", color: "var(--color-text)" }}>
              ليس لديك حساب؟{" "}
              <Link
                to="/register"
                onClick={switchToRegister}
                style={{ color: "var(--color-text)" }}
              >
                أنشئ حسابك الآن
              </Link>
            </p>
          </form>

          <form
            ref={registerFormRef}
            style={{ display: showLogin ? "none" : "flex" }}
            className={`${styles["register-form"]} ${loginToRegister ? styles["loginToRegisterAnimation"] : ""} ${registerToLogin ? styles["registerToLoginAnimation"] : ""}`}
          >
            <h1 className={styles["heading"]}>إنشاء حساب</h1>
            <div className={styles["row"]}>
              <div className={styles["input-container"]}>
                <input type="text" placeholder="  " />
                <label>الرقم الجامعي</label>
                <i className="fa-solid fa-id-card"></i>
              </div>
              <div className={styles["input-container"]}>
                <input type="text" placeholder="  " />
                <label> اسم الطالب (ثلاثي)</label>
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div className={styles["row"]}>
              <div className={styles["input-container"]}>
                <input type="tel" placeholder="  " />
                <label>رقم الهاتف</label>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles["input-container"]}>
                <input type="email" placeholder="  " />
                <label>البريد الإلكتروني</label>
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div className={styles["row"]}>
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
            </div>
            <select>
              <option>الفرقة الأولى</option>
              <option>الفرقة الثانية</option>
              <option>الفرقة الثالثة</option>
              <option>الفرقة الرابعة</option>
            </select>
            <select>
              <option>G1</option>
              <option>G2</option>
              <option>G3</option>
              <option>G4</option>
              <option>G5</option>
              <option>G6</option>
              <option>G7</option>
              <option>G8</option>
              <option>G9</option>
              <option>G10</option>
              <option>G11</option>
              <option>G12</option>
            </select>

            <button type="submit">أنشئ حسابك</button>
            <p style={{ color: "var(--color-text)", fontSize: "14px" }}>
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                onClick={switchToLogin}
                style={{ color: "var(--color-text)" }}
              >
                سجّل الآن
              </Link>
            </p>
          </form>

          <div
            className={`${styles["panel"]} ${loginToRegister ? styles["loginToRegisterAnimation"] : ""} ${registerToLogin ? styles["registerToLoginAnimation"] : ""}`}
          ></div>

          <div
            style={{ display: showLogin ? "flex" : "none" }}
            className={`${styles["login-panel"]} ${loginToRegister ? styles["loginToRegisterAnimation"] : ""} ${registerToLogin ? styles["registerToLoginAnimation"] : ""}`}
          >
            <h1>كل شيء يبدأ من هنا</h1>
            <p>
              سجّل دخولك للوصول إلى جدولك ومحاضراتك وواجباتك وامتحاناتك، وابقَ
              على اطلاع بكل ما يخص دراستك.
            </p>
          </div>

          <div
            style={{ display: showLogin ? "none" : "flex" }}
            className={`${styles["register-panel"]} ${loginToRegister ? styles["loginToRegisterAnimation"] : ""} ${registerToLogin ? styles["registerToLoginAnimation"] : ""}`}
          >
            <h1>ابدأ رحلتك الجامعية</h1>
            <p>
              أنشئ حسابك واجعل حياتك الدراسية أكثر تنظيمًا، وتابع كل ما يخص
              دراستك من مكان واحد.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
