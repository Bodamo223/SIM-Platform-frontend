import { useState, useEffect, useRef } from "react";
import styles from "../css/HomePage.module.css";
import myPhoto from "../assets/Abdallah Picture.jpg";
import { useInView } from "../hooks/useInView";

export function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      !heroEl ||
      reduceMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const maxShift = 14;
        heroEl.style.setProperty("--glow-x", `${relX * maxShift * 2}px`);
        heroEl.style.setProperty("--glow-y", `${relY * maxShift * 2}px`);
        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      heroEl.style.setProperty("--glow-x", "0px");
      heroEl.style.setProperty("--glow-y", "0px");
    };

    heroEl.addEventListener("mousemove", handleMouseMove);
    heroEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
      <section className={styles["hero-section"]} ref={heroRef}>
        <svg
          className={styles["hero-circuit"]}
          viewBox="0 0 1120 460"
          preserveAspectRatio="xMidYMid slice"
        >
          <g
            className={styles["svg"]}
            stroke="#c9c9c9"
            strokeWidth="1.5"
            fill="none"
          >
            <path id="circuit-1" d="M1 80 H210 V80 H150"></path>
            <path id="circuit-2" d="M1120 90 H860 V90 H5000"></path>
            <path id="circuit-9" d="M0 120 H330 V90 H450"></path>
            <path id="circuit-10" d="M1120 140 H780 V110 H620"></path>
            <path id="circuit-3" d="M0 200 H260 V160 H480"></path>
            <path id="circuit-4" d="M1120 230 H840 V190 H600"></path>
            <path id="circuit-11" d="M0 260 H140 V290 H320"></path>
            <path id="circuit-12" d="M1120 290 H980 V260 H820"></path>
            <path id="circuit-5" d="M0 340 H220 V300 H400"></path>
            <path id="circuit-6" d="M1120 370 H900 V330 H680"></path>
            <path id="circuit-7" d="M0 430 H180 V456 H360"></path>
            <path id="circuit-8" d="M1120 450 H960 V430 H750"></path>
          </g>

          <g>
            <circle
              className={styles["node"]}
              cx="210"
              cy="80"
              r="4"
              style={{ animationDelay: "0s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="450"
              cy="90"
              r="4"
              style={{ animationDelay: ".3s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="860"
              cy="90"
              r="4"
              style={{ animationDelay: ".6s" }}
            ></circle>

            <circle
              className={styles["node"]}
              cx="300"
              cy="20"
              r="4"
              style={{ animationDelay: "1.05s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="330"
              cy="119"
              r="4"
              style={{ animationDelay: "1.2s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="780"
              cy="140"
              r="4"
              style={{ animationDelay: "1.35s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="620"
              cy="110"
              r="4"
              style={{ animationDelay: "1.5s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="260"
              cy="200"
              r="4"
              style={{ animationDelay: "1.65s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="480"
              cy="160"
              r="4"
              style={{ animationDelay: "1.8s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="840"
              cy="230"
              r="4"
              style={{ animationDelay: "1.95s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="600"
              cy="190"
              r="4"
              style={{ animationDelay: "2.1s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="140"
              cy="260"
              r="4"
              style={{ animationDelay: "2.25s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="320"
              cy="290"
              r="4"
              style={{ animationDelay: "2.4s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="980"
              cy="290"
              r="4"
              style={{ animationDelay: "2.55s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="820"
              cy="260"
              r="4"
              style={{ animationDelay: "2.7s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="220"
              cy="340"
              r="4"
              style={{ animationDelay: "2.85s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="400"
              cy="300"
              r="4"
              style={{ animationDelay: "3s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="900"
              cy="370"
              r="4"
              style={{ animationDelay: "3.15s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="680"
              cy="330"
              r="4"
              style={{ animationDelay: "3.3s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="180"
              cy="430"
              r="4"
              style={{ animationDelay: "3.45s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="360"
              cy="456"
              r="4"
              style={{ animationDelay: "3.6s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="960"
              cy="450"
              r="4"
              style={{ animationDelay: "3.75s" }}
            ></circle>
            <circle
              className={styles["node"]}
              cx="750"
              cy="430"
              r="4"
              style={{ animationDelay: "3.9s" }}
            ></circle>
          </g>

          <g className={styles["hero-particles"]}>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6s" begin="0s" repeatCount="indefinite">
                <mpath href="#circuit-1"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6.5s" begin="0.6s" repeatCount="indefinite">
                <mpath href="#circuit-2"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6.3s" begin="1.2s" repeatCount="indefinite">
                <mpath href="#circuit-9"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6.8s" begin="1.8s" repeatCount="indefinite">
                <mpath href="#circuit-10"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="7s" begin="2.4s" repeatCount="indefinite">
                <mpath href="#circuit-3"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="7.5s" begin="3s" repeatCount="indefinite">
                <mpath href="#circuit-4"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6.6s" begin="3.6s" repeatCount="indefinite">
                <mpath href="#circuit-11"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="7.1s" begin="4.2s" repeatCount="indefinite">
                <mpath href="#circuit-12"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6.2s" begin="4.8s" repeatCount="indefinite">
                <mpath href="#circuit-5"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="6.8s" begin="5.4s" repeatCount="indefinite">
                <mpath href="#circuit-6"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="7.2s" begin="6s" repeatCount="indefinite">
                <mpath href="#circuit-7"></mpath>
              </animateMotion>
            </circle>
            <circle className={styles["particle"]} r="2.6">
              <animateMotion dur="7.8s" begin="6.6s" repeatCount="indefinite">
                <mpath href="#circuit-8"></mpath>
              </animateMotion>
            </circle>
          </g>
        </svg>
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
            مرحبًا بك في منصة <span className={styles[""]}>SIM</span>
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
          <h1 className={styles[""]}>كل ما تحتاجه في مكان واحد</h1>
          <p className={styles[""]}>
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
          <h1 className={styles[""]}>آراء الطلاب</h1>
          <p className={styles[""]}>
            شارك رأيك في المنصة، وسيظهر تعليقك مباشرة لباقي الطلاب.
          </p>
        </div>

        <div
          ref={commentBoxRef}
          className={`${styles["add-comment-container"]} ${styles["fade-up"]} ${
            commentBoxVisible ? styles["visible"] : ""
          }`}
        >
          <h1 className={styles[""]}>أضف تعليقًا</h1>
          <textarea
            className={styles[""]}
            placeholder="شاركنا رأيك في المنصة"
          />
          <button className={styles[""]}>إرسال التعليق</button>
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
        <h3 className={styles[""]}>{service.title}</h3>
        <p className={styles[""]}>{service.desc}</p>
      </div>
    </div>
  );
}
