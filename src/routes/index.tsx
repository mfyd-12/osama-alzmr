import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import firstEnvelopeImage from "../../WhatsApp Image 2026-06-19 at 9.19.48 AM.png";
import secondEnvelopeImage from "../../WhatsApp Image 2026-06-20 at 7.31.04 AM.png";
import invitationAudio from "../../WhatsApp Audio 2026-06-20 at 7.41.21 AM.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "دعوة زفاف أسامة و هديل" },
      { name: "description", content: "بكل الحب والفرح، نتشرف بدعوتكم لحضور حفل زفاف أسامة و هديل" },
      { property: "og:title", content: "دعوة زفاف أسامة ♥ هديل" },
      { property: "og:description", content: "12 / 7 / 2026 — قصر ذوق الرواد، حي المونسية" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: Invitation,
});

const MUSIC_URL = invitationAudio;

function Invitation() {
  const [opened, setOpened] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const inviteRef = useRef<HTMLElement | null>(null);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [opened]);

  const spawnPetals = () => {
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("div");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 5 + Math.random() * 6 + "s";
      p.style.animationDelay = Math.random() * 3 + "s";
      p.style.transform = `scale(${0.6 + Math.random() * 1.2})`;
      const hueShift = Math.random() * 30 - 15;
      p.style.filter = `hue-rotate(${hueShift}deg)`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 12000);
    }
  };

  const playAudioFromTenSeconds = async () => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = 0.5;
    if (a.currentTime < 10) {
      a.currentTime = 10;
    }

    try {
      await a.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const openEnvelope = () => {
    if (opened) return;
    setOpened(true);
    setShowSecondImage(true);
    spawnPetals();
    void playAudioFromTenSeconds();
    setInterval(spawnPetals, 6000);
    setTimeout(() => {
      inviteRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2200);
  };

  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      void playAudioFromTenSeconds();
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <main>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />

      {/* ===== Landing scene ===== */}
      <section
        className={`relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-x-hidden transition-all duration-1000 ${
          opened ? "envelope-opened" : ""
        }`}
        style={{
          backgroundImage: "url('./images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* طبقة تظليل ضبابية لضمان وضوح المحتوى فوق الصورة */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none transition-all duration-700" />

        {/* تأثيرات خلفية ذهبية خفيفة لمنح فخامة إضافية للدعوة */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* حاوية المحتوى الرئيسية لجعله فوق طبقات التظليل */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
          {/* العنوان الرئيسي للدعوة */}
          <h1 className="text-4xl md:text-6xl mb-12 text-center text-[#fdfbf7] font-display tracking-wider drop-shadow-lg animate-fade-in">
            دعوة خاصة بانتظاركم
          </h1>

          {/* حاوية الظرف - مضاف إليها تأثير حركي عند الحوم (Hover) والضغط */}
          <div
            className="envelope-wrap relative cursor-pointer select-none group max-w-md w-full aspect-[4/3] flex items-center justify-center overflow-visible transition-transform duration-500 ease-out active:scale-95"
            onClick={openEnvelope}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openEnvelope()}
            aria-label="افتح دعوة الزفاف"
          >
            <div
              className={`image-envelope relative w-full h-full transition-all duration-700 ease-in-out ${
                opened ? "transform -translate-y-4 scale-105" : "hover:scale-102 hover:-translate-y-2"
              }`}
            >
              <img
                src={showSecondImage ? secondEnvelopeImage : firstEnvelopeImage}
                alt={showSecondImage ? "تفاصيل دعوة الزواج" : "ظرف دعوة الزواج المغلق"}
                className="w-full h-full object-contain drop-shadow-2xl transition-opacity duration-500"
              />
            </div>
          </div>

          {/* تلميح للمستخدم - يختفي بسلاسة عند الفتح */}
          <div
            className={`mt-10 text-center transition-all duration-500 ${
              opened ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 animate-bounce"
            }`}
          >
            <p className="text-white/95 font-medium tracking-wide text-sm md:text-lg bg-black/20 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
              انقر على الظرف لفتح الدعوة وبدء الفرحة ✨
            </p>
          </div>
        </div>
      </section>

      {/* ===== Invitation ===== */}
      <section
        ref={inviteRef}
        className={`relative overflow-hidden transition-all duration-1000 ${
          opened ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-12"
        }`}
        style={{
          backgroundImage: "url('./images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* نجوم خلفية */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        {/* توهج ذهبي مركزي */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          {/* البطاقة الرئيسية */}
          <div
            className="reveal rounded-[2rem] border border-[#d4af37]/40 bg-[#1e1506]/80 p-8 shadow-[0_0_80px_-20px_rgba(212,175,55,0.4)] backdrop-blur-md md:p-14"
            style={{
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.15), 0 30px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212,175,55,0.2)",
            }}
          >
            <div className="text-center">
              <p className="font-display text-xl md:text-2xl tracking-widest text-[#d4af37]">
                بسم الله الرحمن الرحيم
              </p>
              {/* فاصل ذهبي */}
              <div className="mt-5 flex items-center justify-center gap-4">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37]" />
                <div className="text-[#d4af37] text-xl">✦</div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37]" />
              </div>
              <h2
                className="mt-5 text-5xl md:text-7xl font-display"
                style={{
                  background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                دعوة زفاف
              </h2>
            </div>

            <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <p className="text-lg md:text-xl text-[#c8a96e]">يتشرف بدعوتكم</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            <div className="mt-8 text-center">
              <h3
                className="text-5xl md:text-6xl font-display leading-tight"
                style={{
                  background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                أسامة <span className="mx-2 text-rose-400">♥</span> هديل
              </h3>
            </div>

            <div className="mt-10 space-y-5 text-center">
              <p
                className="text-xl md:text-2xl font-display leading-relaxed"
                style={{
                  background: "linear-gradient(135deg, #f5e09a, #c8a96e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                تتراقص النجوم فرحاً، وتتناغم القلوب في ليلة تُكتب فيها أجمل الذكريات.
              </p>
              <p className="mx-auto max-w-3xl text-base leading-8 text-[#c8a96e]/80 md:text-lg">
                بكل الحب والود، نتشرف بدعوتكم لحضور حفل زفافنا المبارك، سائلين المولى عز وجل أن يبارك لنا ولكم وأن يملأ هذا اليوم بالسعادة والبركة.
              </p>
            </div>
          </div>

          {/* بطاقات التفاصيل */}
          <div className="reveal mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: "📅", title: "التاريخ", value: "12 / 7 / 2026" },
              { icon: "🕢", title: "الوقت", value: "7:30 مساءً" },
              {
                icon: "📍",
                title: "المكان",
                value: "قصر ذوق الرواد",
                sub: "حي المونسية",
                link: "https://maps.app.goo.gl/uNPxNDxuh1sqPM6s5",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="rounded-3xl border border-[#d4af37]/30 bg-[#1e1506]/70 p-6 text-center backdrop-blur-sm"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(212,175,55,0.1), 0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.15)",
                }}
              >
                <div className="text-4xl">{d.icon}</div>
                <h4
                  className="mt-3 font-display text-2xl"
                  style={{
                    background: "linear-gradient(135deg, #f5e09a, #d4af37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {d.title}
                </h4>
                <p className="mt-2 text-base text-[#c8a96e] md:text-lg">{d.value}</p>
                {d.sub && <p className="mt-1 text-sm text-[#c8a96e]/60">{d.sub}</p>}
                {d.link && (
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-[#1a1208] shadow-lg transition-transform hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 7 11.5 7.3 11.7.2.2.5.3.7.3s.5-.1.7-.3C13 21.5 20 15.5 20 10c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    افتح الموقع
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* تنبيه الأطفال */}
          <div className="reveal mt-12 text-center">
            <div
              className="inline-flex items-center gap-3 rounded-full border border-[#d4af37]/25 bg-[#1e1506]/60 px-6 py-3"
              style={{ boxShadow: "inset 0 1px 0 rgba(212,175,55,0.1)" }}
            >
              <span className="text-xl">🌙</span>
              <span className="text-sm md:text-base text-[#c8a96e]/80">
              جنة الاطفال منازلهم
              </span>
            </div>
          </div>

          {/* الختام */}
          <div className="reveal mt-14 pb-4 text-center">
            {/* فاصل ذهبي */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="text-[#d4af37] text-lg">✦ ✦ ✦</div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <p
              className="font-display text-3xl"
              style={{
                background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              بانتظار حضوركم الكريم
            </p>
            <p className="mt-3 text-lg text-[#c8a96e]/70">
              أسامة <span className="text-rose-400">♥</span> هديل
            </p>
          </div>
        </div>
      </section>

      <button
        onClick={toggleMusic}
        className="music-btn"
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </main>
  );
}
