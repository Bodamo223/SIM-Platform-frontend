import { useState, useEffect } from "react";
import styles from "../css/HomePage.module.css";
import myPhoto from "../assets/Abdallah Picture.jpg";
import { useInView } from "../hooks/useInView";

export function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const [headingRef, headingVisible] = useInView();
  const [commentsHeadingRef, commentsHeadingVisible] = useInView();
  const [commentBoxRef, commentBoxVisible] = useInView();

  const services = [
    {
      icon: "fa-regular fa-calendar",
      title: "الجدول الدراسي",
      desc: "دليلك لترتيب يومك الجامعي. تابع مواعيد وأماكن المحاضرات والسكاشن بسهولة، لضمان استغلال وقتك بين المحاضرات بأفضل شكل.",
    },
    {
      icon: "fa-solid fa-file-lines",
      title: "مركز الامتحانات",
      desc: "خليك دايماً مستعد. تابع مواعيد امتحانات الميدتيرم والفاينال، واعرف أرقام اللجان وأماكنها قبلها بفترة كافية لترتيب خطة مذاكرتك.",
    },
    {
      icon: "fa-solid fa-list-check",
      title: "المهام والتكليفات",
      desc: "إدارة كاملة لكل التكاليف والمشاريع المطلوبة منك. هنتابع معاك مواعيد التسليم أول بأول عشان تنجز مهامك في وقتها ومفيش أي درجات تضيع.",
    },
    {
      icon: "fa-solid fa-book",
      title: "الملخصات",
      desc: "مكتبة رقمية شاملة لكل مواد الكلية. تقدر تحمل منها أهم الملخصات وامتحانات السنين اللي فاتت، وتذاكر أوفلاين في أي وقت ومن أي مكان.",
    },
  ];

  return (
    <>
      <section className={styles["hero-section"]}>
        <div
          className={`${styles["developer-card"]} ${styles["fade-side-left"]} ${
            heroVisible ? styles["visible"] : ""
          }`}
        >
          <div className={styles["img-container"]}>
            <img src={myPhoto} alt="Abdallah Picture" />
          </div>
          <div className={styles["developer-info"]}>
            <div className={styles["badge"]}>
              <span className={styles["status-dot"]}></span>
              <span className={styles["badge-text"]}>مطور المنصة</span>
            </div>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontWeight: "bold",
              }}
            >
              صُممت وطُورت بواسطة
            </p>
            <h2>عبدالله محمد عبدالسلام</h2>
            <strong className={styles["highlight"]}>
              Software engineer & Full Stack developer
            </strong>
            <p className={styles["about"]}>
              هذه المنصة تم تصميمها وتطويرها بعناية لتلبية احتياجات طلاب قسم SIM
              وتوفير تجربة تعليمية أفضل وأكثر سهولة.
            </p>
          </div>
        </div>

        <div
          className={`${styles["hero-text"]} ${styles["fade-side-right"]} ${
            heroVisible ? styles["visible"] : ""
          }`}
        >
          <h1 className={styles["heading"]}>
            مرحبًا بك في منصة <span>SIM</span>
          </h1>
          <p className={styles["description"]}>
            رفيقك الأكاديمي الذي ينظّم جدولك ومهامك وتحديثاتك الدراسية بدقة؛ إذ
            تجمع المنصة في مكان واحد مركز الامتحانات، والملخصات الطلابية،
            والتنبيهات الفورية لكل مستجدات القسم، لتستثمر وقتك الجامعي بأعلى
            كفاءة ممكنة.
          </p>
          <div className={styles["hero-actions"]}>
            <button className={styles["services-btn"]}>تعرف على الخدمات</button>
            <button className={styles["login-btn"]}>سجّل الآن</button>
          </div>
        </div>
      </section>

      <section className={styles["services-section"]}>
        <div
          ref={headingRef}
          className={`${styles["heading"]} ${styles["fade-up"]} ${
            headingVisible ? styles["visible"] : ""
          }`}
        >
          <h1>كل ما تحتاجه في مكان واحد</h1>
          <p>
            لا حاجة لفتح عدة مجموعات أو تطبيقات متفرقة لمعرفة مواعيدك؛ الخدمات
            الأساسية التي يحتاجها الطالب يوميًا متاحة هنا بصورة منظمة وسهلة
            الوصول.
          </p>
        </div>

        <div className={styles["services-cards"]}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={index * 200}
              styles={styles}
            />
          ))}
        </div>
      </section>

      <section className={styles["comments-section"]}>
        <div
          ref={commentsHeadingRef}
          className={`${styles["heading"]} ${styles["fade-up"]} ${
            commentsHeadingVisible ? styles["visible"] : ""
          }`}
        >
          <h1>آراء الطلاب</h1>
          <p>شارك رأيك في المنصة، وسيظهر تعليقك مباشرة لباقي الطلاب.</p>
        </div>

        <div
          ref={commentBoxRef}
          className={`${styles["add-comment-container"]} ${styles["fade-up"]} ${
            commentBoxVisible ? styles["visible"] : ""
          }`}
        >
          <h1>أضف تعليقًا</h1>
          <textarea placeholder="شاركنا رأيك في المنصة" />
          <button>إرسال التعليق</button>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service, delay, styles }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles["card"]} ${styles["fade-up"]} ${
        isVisible ? styles["visible"] : ""
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className={styles["icon-container"]}>
        <i className={`${service.icon} ${styles["cardIcon"]}`}></i>
      </div>
      <div className={styles["card-content"]}>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </div>
  );
}
