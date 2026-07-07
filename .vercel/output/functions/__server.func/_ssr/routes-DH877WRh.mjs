import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DH877WRh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WhatsApp_Image_2026_06_19_at_9_19_48_AM_default = "/assets/WhatsApp%20Image%202026-06-19%20at%209.19.48%20AM-Cgs3OXNO.png";
var WhatsApp_Image_2026_06_20_at_7_31_04_AM_default = "/assets/WhatsApp%20Image%202026-06-20%20at%207.31.04%20AM-0qylJVeQ.png";
var MUSIC_URL = "/assets/WhatsApp%20Audio%202026-06-20%20at%207.41.21%20AM-BuYrNQVQ.mp4";
function Invitation() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [showSecondImage, setShowSecondImage] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const audioRef = (0, import_react.useRef)(null);
	const inviteRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .15 });
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
			p.style.transform = `scale(${.6 + Math.random() * 1.2})`;
			const hueShift = Math.random() * 30 - 15;
			p.style.filter = `hue-rotate(${hueShift}deg)`;
			document.body.appendChild(p);
			setTimeout(() => p.remove(), 12e3);
		}
	};
	const playAudioFromTenSeconds = async () => {
		const a = audioRef.current;
		if (!a) return;
		a.volume = .5;
		if (a.currentTime < 10) a.currentTime = 10;
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
		playAudioFromTenSeconds();
		setInterval(spawnPetals, 6e3);
		setTimeout(() => {
			inviteRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 2200);
	};
	const toggleMusic = () => {
		const a = audioRef.current;
		if (!a) return;
		if (a.paused) playAudioFromTenSeconds();
		else {
			a.pause();
			setPlaying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: MUSIC_URL,
			loop: true,
			preload: "auto"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-x-hidden transition-all duration-1000 ${opened ? "envelope-opened" : ""}`,
			style: {
				backgroundImage: "url('/images.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none transition-all duration-700" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl md:text-6xl mb-12 text-center text-[#fdfbf7] font-display tracking-wider drop-shadow-lg animate-fade-in",
							children: "دعوة الزفاف بانتظاركم"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "envelope-wrap relative cursor-pointer select-none group max-w-md w-full aspect-[4/3] flex items-center justify-center overflow-visible transition-transform duration-500 ease-out active:scale-95",
							onClick: openEnvelope,
							role: "button",
							tabIndex: 0,
							onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && openEnvelope(),
							"aria-label": "افتح دعوة الزفاف",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `image-envelope relative w-full h-full transition-all duration-700 ease-in-out ${opened ? "transform -translate-y-4 scale-105" : "hover:scale-102 hover:-translate-y-2"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: showSecondImage ? WhatsApp_Image_2026_06_20_at_7_31_04_AM_default : WhatsApp_Image_2026_06_19_at_9_19_48_AM_default,
									alt: showSecondImage ? "تفاصيل دعوة الزواج" : "ظرف دعوة الزواج المغلق",
									className: "w-full h-full object-contain drop-shadow-2xl transition-opacity duration-500"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mt-10 text-center transition-all duration-500 ${opened ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 animate-bounce"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/95 font-medium tracking-wide text-sm md:text-lg bg-black/20 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-xl",
								children: "انقر على الظرف لفتح الدعوة وبدء الفرحة ✨"
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: inviteRef,
			className: `relative overflow-hidden transition-all duration-1000 ${opened ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-12"}`,
			style: {
				backgroundImage: "url('/images.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal rounded-[2rem] border border-[#d4af37]/40 bg-[#1e1506]/80 p-8 shadow-[0_0_80px_-20px_rgba(212,175,55,0.4)] backdrop-blur-md md:p-14",
							style: { boxShadow: "0 0 0 1px rgba(212,175,55,0.15), 0 30px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212,175,55,0.2)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-5xl md:text-7xl font-display",
											style: {
												background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent"
											},
											children: "دعوة زفاف"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex items-center justify-center gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[#d4af37] text-xl",
													children: "✦"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37]" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 font-display text-xl md:text-2xl tracking-widest text-[#d4af37]",
											children: "بسم الله الرحمن الرحيم"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg md:text-xl text-[#c8a96e]",
											children: "يتشرف بدعوتكم لحضور حفل زفافنا المبارك"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-5xl md:text-6xl font-display leading-tight",
										style: {
											background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent"
										},
										children: [
											"أسامة ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mx-2 text-rose-400",
												children: "♥"
											}),
											" هديل"
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 space-y-5 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl md:text-2xl font-display leading-relaxed",
										style: {
											background: "linear-gradient(135deg, #f5e09a, #c8a96e)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent"
										},
										children: "تتراقص النجوم فرحاً، وتتناغم القلوب في ليلة تُكتب فيها أجمل الذكريات."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto max-w-3xl text-base leading-8 text-[#c8a96e]/80 md:text-lg",
										children: "بكل الحب والود، نتشرف بدعوتكم لحضور حفل زفافنا المبارك، سائلين المولى عز وجل أن يبارك لنا ولكم وأن يملأ هذا اليوم بالسعادة والبركة."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reveal mt-12 grid gap-6 md:grid-cols-3",
							children: [
								{
									icon: "📅",
									title: "التاريخ",
									value: "12 / 7 / 2026"
								},
								{
									icon: "🕢",
									title: "الوقت",
									value: "7:30 مساءً"
								},
								{
									icon: "📍",
									title: "المكان",
									value: "قصر ذوق الرواد",
									sub: "حي المونسية",
									link: "https://maps.app.goo.gl/uNPxNDxuh1sqPM6s5"
								}
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-[#d4af37]/30 bg-[#1e1506]/70 p-6 text-center backdrop-blur-sm",
								style: { boxShadow: "0 0 0 1px rgba(212,175,55,0.1), 0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.15)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-4xl",
										children: d.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-3 font-display text-2xl",
										style: {
											background: "linear-gradient(135deg, #f5e09a, #d4af37)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent"
										},
										children: d.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-base text-[#c8a96e] md:text-lg",
										children: d.value
									}),
									d.sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-[#c8a96e]/60",
										children: d.sub
									}),
									d.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: d.link,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-[#1a1208] shadow-lg transition-transform hover:scale-105",
										style: { background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C7.6 2 4 5.6 4 10c0 5.5 7 11.5 7.3 11.7.2.2.5.3.7.3s.5-.1.7-.3C13 21.5 20 15.5 20 10c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" })
										}), "افتح الموقع"]
									})
								]
							}, d.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reveal mt-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-3 rounded-full border border-[#d4af37]/25 bg-[#1e1506]/60 px-6 py-3",
								style: { boxShadow: "inset 0 1px 0 rgba(212,175,55,0.1)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: "🌙"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl md:text-3xl font-display text-[#c8a96e]",
									children: "جنة الاطفال منازلهم"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal mt-14 pb-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-6 flex items-center justify-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[#d4af37] text-lg",
											children: "✦ ✦ ✦"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl",
									style: {
										background: "linear-gradient(135deg, #f5e09a, #d4af37, #aa771c)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent"
									},
									children: "بانتظار حضوركم الكريم"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-lg text-[#c8a96e]/70",
									children: [
										"أسامة ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-rose-400",
											children: "♥"
										}),
										" هديل"
									]
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: toggleMusic,
			className: "music-btn",
			"aria-label": playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى",
			children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: "22",
				height: "22",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "6",
					y: "5",
					width: "4",
					height: "14",
					rx: "1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "5",
					width: "4",
					height: "14",
					rx: "1"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "22",
				height: "22",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" })
			})
		})
	] });
}
//#endregion
export { Invitation as component };
