"use client";

import React, { useState, useRef } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string;
  liveUrl?: string;
  video?: { src: string; caption: string };
  images: { src: string; caption: string }[];
}

const PROJECTS: Project[] = [
  {
    id: "iv101",
    title: "CME-101: Quantitative Gold & Volatility Research Visualizer",
    subtitle: "เว็บแอปพลิเคชันสรุปงานวิจัย CME Vol2Vol และจำลองกรอบราคาทองคำ/อนุพันธ์",
    category: "Data & AI Web Application",
    tags: ["Generative AI", "Financial Data", "Interactive Simulation", "Vercel"],
    problem:
      "เอกสารงานวิจัยด้านความผันผวน (CME Vol2Vol) และกรอบราคาทองคำ/Options จำนวน 23 ไฟล์ มีเนื้อหาเชิงปริมาณและสูตรคณิตศาสตร์ที่ซับซ้อน ทำความเข้าใจได้ยาก",
    solution:
      "ใช้ AI สกัดองค์ความรู้ จัดหมวดหมู่เส้นทางการเรียนรู้ 5 ระดับ และพัฒนาห้องทดลองอินเทอร์แอกทีฟ (Expected Move & Monte Carlo Simulation) ให้ผู้เรียนปรับค่าพารามิเตอร์และเห็นภาพการกระจายตัวของราคาได้ทันที",
    impact:
      "เปลี่ยนงานวิจัย 23 ฉบับให้กลายเป็นสื่อการเรียนรู้เชิงโต้ตอบที่ใช้งานได้จริงบน Cloud ช่วยลดเวลาทำความเข้าใจและเห็นภาพความเสี่ยงของกรอบราคาได้อย่างชัดเจน",
    liveUrl: "https://iv-101.vercel.app/",
    images: [
      { src: "/images/IV01.png", caption: "ห้องทดลองคำนวณ Expected Move และกรอบความผันผวน ±1 SD / ±2 SD" },
      { src: "/images/IV02.jpg", caption: "แบบจำลองการกระจายตัวของราคา (Distribution) และเส้นทางราคาสังเคราะห์" },
      { src: "/images/IV03.png", caption: "คลังอ้างอิงคำศัพท์หลักและแผนที่เส้นทางการเรียนรู้จากเอกสาร 23 ฉบับ" },
      { src: "/images/IV04.jpg", caption: "ระบบจัดหมวดหมู่และเข้าถึงเอกสารงานวิจัยต้นฉบับทั้ง 23 ฉบับ" },
    ],
  },
  {
    id: "video-ai",
    title: "AI Video Automation Pipeline & HomeLab Infrastructure",
    subtitle: "ระบบผลิตวิดีโอรีวิวสินค้า E-commerce อัตโนมัติบนเซิร์ฟเวอร์จำลอง",
    category: "Automation & Infrastructure",
    tags: ["Python", "Gemini API", "ElevenLabs", "Proxmox VE", "Automation"],
    problem:
      "การผลิตวิดีโอรีวิวสินค้าจำนวนมาก ตั้งแต่การเขียนสคริปต์ พากย์เสียง ใส่ซับไตเติล ไปจนถึงการจับคู่ลิงก์สินค้า มีขั้นตอนซ้ำซ้อนและใช้เวลานาน",
    solution:
      "วางโครงสร้างเซิร์ฟเวอร์จำลองด้วย Proxmox VE และพัฒนาเว็บควบคุมการผลิต (Batch Matching) เชื่อมต่อ Gemini API สำหรับสร้างบทพากย์และแคปชัน ร่วมกับระบบสังเคราะห์เสียงและตัดต่ออัตโนมัติ",
    impact:
      "ลดภาระงานซ้ำซ้อนในการผลิตคอนเทนต์ สามารถจัดการคิววิดีโอหลายรายการพร้อมกันได้อย่างเป็นระบบและควบคุมทรัพยากรเซิร์ฟเวอร์ได้เอง",
    video: {
      src: "/videos/VideoAiDemo.mp4",
      caption: "ตัวอย่างผลลัพธ์วิดีโอแนวตั้ง (9:16) ที่ AI เขียนบท พากย์เสียง และฝังซับไตเติลอัตโนมัติ",
    },
    images: [
      { src: "/images/VideoAi01.png", caption: "โครงสร้างเซิร์ฟเวอร์จำลอง Proxmox VE สำหรับรันระบบ Automation" },
      { src: "/images/VideoAi02.png", caption: "หน้าจอจัดคิวและจับคู่สินค้าอัตโนมัติ (Batch Matching) สำหรับผลิตวิดีโอ" },
      { src: "/images/VideoAi03.png", caption: "ระบบจัดการและเชื่อมต่อ API Key (Gemini & ElevenLabs)" },
    ],
  },
  {
    id: "dms-oneapp",
    title: "DMS OneApp: Enterprise Store & Warehouse Web Application",
    subtitle: "ออกแบบและพัฒนาระบบบริหารจัดการคลังสินค้าและจัดซื้อ (ผลงานสหกิจศึกษา)",
    category: "Web App & System Analysis",
    tags: ["Angular 19", "Tailwind CSS", "DaisyUI", "Requirement Gathering"],
    problem:
      "ระบบจัดการคลังสินค้าเดิมมีความซับซ้อนในการใช้งาน ขั้นตอนการเบิกจ่าย (Picking) และการจัดซื้อ (Purchase) ขาดความคล่องตัวสำหรับผู้ปฏิบัติงานหน้างาน",
    solution:
      "รวบรวมและวิเคราะห์ความต้องการ (Requirement Gathering) เพื่อปรับปรุง Flow การทำงาน และพัฒนาหน้าเว็บ UI ใหม่ด้วย Angular 19, Tailwind CSS และ DaisyUI เชื่อมต่อกับฐานข้อมูลและ API ของทีม",
    impact:
      "ได้ระบบหน้าบ้านที่ทันสมัย ใช้งานง่าย ลดความผิดพลาดในการเบิกจ่ายอุปกรณ์และจัดการรายการงานในคลังสินค้าได้อย่างมีประสิทธิภาพ",
    images: [
      { src: "/images/DMS01.png", caption: "หน้าจอเข้าสู่ระบบ (Authentication) ของ DMS Business One Application" },
      { src: "/images/DMS02.png", caption: "หน้าหลักรวมโมดูลการทำงาน (Store, Project Management, Purchase, HR)" },
      { src: "/images/DMS03.png", caption: "หน้าจอจัดการรายการเบิกจ่ายคลังสินค้า (Store Picking & Data Table)" },
    ],
  },
];

export default function PortfolioPage() {
  const [activeImgIdx, setActiveImgIdx] = useState<{ [key: string]: number }>({
    iv101: 0,
    "video-ai": 0,
    "dms-oneapp": 0,
  });

  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleSelectImg = (projectId: string, idx: number, total: number) => {
    const normalizedIdx = (idx + total) % total;
    setActiveImgIdx((prev) => ({ ...prev, [projectId]: normalizedIdx }));
  };

  const handleCopyText = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FF7518] selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-black">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 bg-[#FF7518] inline-block"></span>
            <span className="font-extrabold tracking-tight text-black text-lg">WASAWAT.R</span>
          </a>

          <nav className="flex items-center gap-5 sm:gap-7 text-sm font-bold text-black">
            <a href="#projects" className="hover:text-[#FF7518] transition-colors">
              ผลงาน
            </a>
            <a href="#experience" className="hover:text-[#FF7518] transition-colors">
              ประสบการณ์
            </a>
            <a href="#skills" className="hidden sm:inline hover:text-[#FF7518] transition-colors">
              ทักษะ
            </a>
            <a
              href="#contact"
              className="bg-black hover:bg-[#FF7518] text-white px-4 py-2 rounded-lg transition-colors"
            >
              ช่องทางติดต่อ
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14 space-y-24">
        {/* 1. Hero Section */}
        <section className="space-y-6 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF7518]"></span>
            PORTFOLIO & PROJECT ARCHIVE
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">
              วสวัตติ์ รัตนรังษี
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#FF7518]">
              Computer Engineering • Systems, Data & AI Solutions
            </p>
          </div>

          <p className="text-black max-w-3xl text-base sm:text-lg leading-relaxed font-medium">
            พื้นที่รวบรวมผลงานและโปรเจกต์ที่พัฒนาขึ้นจริง ครอบคลุมตั้งแต่การวิเคราะห์ความต้องการและการออกแบบเว็บแอปพลิเคชัน 
            การวางโครงสร้างเซิร์ฟเวอร์และเครือข่ายหน้างาน ไปจนถึงการประยุกต์ใช้ AI และ Automation เพื่อแก้ปัญหาและเพิ่มประสิทธิภาพการทำงาน
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="bg-[#FF7518] hover:bg-black text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              ดูผลงานทั้งหมด ↓
            </a>
            <button
              type="button"
              onClick={() => handleCopyText("wasawatrs@gmail.com", "email")}
              className="border-2 border-black bg-white hover:bg-black hover:text-white text-black font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              {copiedType === "email" ? "✓ คัดลอกอีเมลแล้ว!" : "คัดลอกอีเมล: wasawatrs@gmail.com"}
            </button>
          </div>
        </section>

        {/* 2. Featured Projects */}
        <section id="projects" className="space-y-10 scroll-mt-24">
          <div className="border-b-2 border-black pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF7518]">
                Selected Works
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                ผลงานและโปรเจกต์ที่พัฒนา
              </h2>
            </div>
            <p className="text-sm font-bold text-black">
              กดลูกศรซ้าย-ขวาเพื่อเลื่อนดูภาพ หรือคลิกที่ภาพเพื่อขยายเต็มจอ
            </p>
          </div>

          <div className="space-y-14">
            {PROJECTS.map((project, index) => {
              const currentIdx = activeImgIdx[project.id] || 0;
              const totalImgs = project.images.length;
              const currentImage = project.images[currentIdx];

              return (
                <article
                  key={project.id}
                  className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#000000]"
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-8 bg-white border-b-2 border-black space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-extrabold px-3 py-1 rounded-md bg-black text-white">
                        PROJECT 0{index + 1} • {project.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FF7518] text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black">{project.title}</h3>
                      <p className="text-black font-medium text-sm sm:text-base mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Media Showcase Area (Slider + Optional Video) */}
                  <div className="p-6 sm:p-8 bg-black text-white">
                    {project.video ? (
                      <div className="grid lg:grid-cols-12 gap-6 items-start">
                        {/* Left: Image Carousel */}
                        <div className="lg:col-span-8 space-y-4">
                          <div
                            onTouchStart={(e) => {
                              touchStartX.current = e.touches[0].clientX;
                            }}
                            onTouchEnd={(e) => {
                              if (touchStartX.current === null) return;
                              const diff = touchStartX.current - e.changedTouches[0].clientX;
                              if (Math.abs(diff) > 40) {
                                handleSelectImg(project.id, diff > 0 ? currentIdx + 1 : currentIdx - 1, totalImgs);
                              }
                              touchStartX.current = null;
                            }}
                            className="relative group rounded-xl overflow-hidden border-2 border-white bg-black aspect-video flex items-center justify-center"
                          >
                            <img
                              src={currentImage.src}
                              alt={currentImage.caption}
                              onClick={() => setLightbox(currentImage)}
                              className="w-full h-full object-contain cursor-zoom-in"
                            />

                            {/* ปุ่มเลื่อนซ้าย */}
                            <button
                              type="button"
                              aria-label="ภาพก่อนหน้า"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectImg(project.id, currentIdx - 1, totalImgs);
                              }}
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 hover:bg-[#FF7518] text-white border border-white flex items-center justify-center font-extrabold transition-colors cursor-pointer"
                            >
                              ◀
                            </button>

                            {/* ปุ่มเลื่อนขวา */}
                            <button
                              type="button"
                              aria-label="ภาพถัดไป"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectImg(project.id, currentIdx + 1, totalImgs);
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 hover:bg-[#FF7518] text-white border border-white flex items-center justify-center font-extrabold transition-colors cursor-pointer"
                            >
                              ▶
                            </button>

                            <button
                              type="button"
                              onClick={() => setLightbox(currentImage)}
                              className="absolute bottom-3 right-3 bg-[#FF7518] hover:bg-white hover:text-black text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              ขยายเต็มจอ
                            </button>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <p className="text-sm font-medium text-white">
                              <span className="text-[#FF7518] font-extrabold">
                                ภาพที่ {currentIdx + 1}/{totalImgs}:
                              </span>{" "}
                              {currentImage.caption}
                            </p>
                            <div className="flex items-center gap-2 shrink-0">
                              {project.images.map((img, i) => (
                                <button
                                  key={img.src}
                                  type="button"
                                  onClick={() => handleSelectImg(project.id, i, totalImgs)}
                                  className={`px-3 py-1 rounded-md text-xs font-extrabold transition-colors cursor-pointer ${
                                    currentIdx === i
                                      ? "bg-[#FF7518] text-white"
                                      : "bg-white text-black hover:bg-[#FF7518] hover:text-white"
                                  }`}
                                >
                                  0{i + 1}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Vertical Video Demo */}
                        <div className="lg:col-span-4 flex flex-col items-center space-y-3 bg-black p-4 rounded-xl border-2 border-[#FF7518]">
                          <div className="w-full flex items-center justify-between text-xs font-extrabold">
                            <span className="text-[#FF7518] uppercase">Output Video Demo</span>
                            <span className="text-white">9:16</span>
                          </div>
                          <div className="w-full max-w-[230px] aspect-[9/16] rounded-xl overflow-hidden border-2 border-white bg-black">
                            <video
                              src={project.video.src}
                              controls
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-xs font-medium text-white text-center leading-relaxed">
                            {project.video.caption}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Standard Full-Width Image Carousel */
                      <div className="space-y-4">
                        <div
                          onTouchStart={(e) => {
                            touchStartX.current = e.touches[0].clientX;
                          }}
                          onTouchEnd={(e) => {
                            if (touchStartX.current === null) return;
                            const diff = touchStartX.current - e.changedTouches[0].clientX;
                            if (Math.abs(diff) > 40) {
                              handleSelectImg(project.id, diff > 0 ? currentIdx + 1 : currentIdx - 1, totalImgs);
                            }
                            touchStartX.current = null;
                          }}
                          className="relative group rounded-xl overflow-hidden border-2 border-white bg-black aspect-video flex items-center justify-center"
                        >
                          <img
                            src={currentImage.src}
                            alt={currentImage.caption}
                            onClick={() => setLightbox(currentImage)}
                            className="w-full h-full object-contain cursor-zoom-in"
                          />

                          {/* ปุ่มเลื่อนซ้าย */}
                          <button
                            type="button"
                            aria-label="ภาพก่อนหน้า"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectImg(project.id, currentIdx - 1, totalImgs);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 hover:bg-[#FF7518] text-white border border-white flex items-center justify-center font-extrabold transition-colors cursor-pointer"
                          >
                            ◀
                          </button>

                          {/* ปุ่มเลื่อนขวา */}
                          <button
                            type="button"
                            aria-label="ภาพถัดไป"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectImg(project.id, currentIdx + 1, totalImgs);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 hover:bg-[#FF7518] text-white border border-white flex items-center justify-center font-extrabold transition-colors cursor-pointer"
                          >
                            ▶
                          </button>

                          <button
                            type="button"
                            onClick={() => setLightbox(currentImage)}
                            className="absolute bottom-3 right-3 bg-[#FF7518] hover:bg-white hover:text-black text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            ขยายเต็มจอ
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                          <p className="text-sm font-medium text-white">
                            <span className="text-[#FF7518] font-extrabold">
                              ภาพที่ {currentIdx + 1}/{totalImgs}:
                            </span>{" "}
                            {currentImage.caption}
                          </p>

                          <div className="flex items-center gap-2 shrink-0">
                            {project.images.map((img, i) => (
                              <button
                                key={img.src}
                                type="button"
                                onClick={() => handleSelectImg(project.id, i, totalImgs)}
                                className={`px-3 py-1 rounded-md text-xs font-extrabold transition-colors cursor-pointer ${
                                  currentIdx === i
                                    ? "bg-[#FF7518] text-white"
                                    : "bg-white text-black hover:bg-[#FF7518] hover:text-white"
                                }`}
                              >
                                0{i + 1}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Case Study Details */}
                  <div className="p-6 sm:p-8 bg-white space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl border-2 border-black space-y-1.5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-black">
                          01. โจทย์และปัญหา (Problem)
                        </p>
                        <p className="text-sm text-black leading-relaxed font-medium">{project.problem}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border-2 border-[#FF7518] space-y-1.5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF7518]">
                          02. แนวทางแก้ไข (Solution)
                        </p>
                        <p className="text-sm text-black leading-relaxed font-medium">{project.solution}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border-2 border-black space-y-1.5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-black">
                          03. ผลลัพธ์ที่ได้ (Impact)
                        </p>
                        <p className="text-sm text-black leading-relaxed font-medium">{project.impact}</p>
                      </div>
                    </div>

                    {project.liveUrl && (
                      <div className="pt-1 flex justify-end">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-black hover:bg-[#FF7518] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
                        >
                          เปิดทดลองใช้งานเว็บจริง (Live Demo)
                          <span>↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 3. Work Experience & Education */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="border-b-2 border-black pb-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF7518]">Experience</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">ประวัติการฝึกงานและสหกิจศึกษา</h2>
          </div>

          <div className="space-y-6">
            {/* DMS Isolutions */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-black bg-white space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-4">
                <div>
                  <h3 className="font-extrabold text-xl text-black">DMS Isolutions Pte. Ltd.</h3>
                  <p className="text-sm font-bold text-[#FF7518]">
                    Web Development & System Implementation (Intern)
                  </p>
                </div>
                <span className="text-xs font-extrabold text-white bg-black px-3 py-1.5 rounded-lg">
                  ระยะเวลา 4 เดือน
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-black">
                <div className="space-y-2.5">
                  <h4 className="font-extrabold text-base text-black border-l-4 border-[#FF7518] pl-3">
                    งานออกแบบและพัฒนา Web Application
                  </h4>
                  <ul className="space-y-2 font-medium leading-relaxed">
                    <li>
                      • รวบรวมและวิเคราะห์ความต้องการ (Requirement Gathering) สำหรับระบบจัดการคลังสินค้า เพื่อปรับปรุง Flow การทำงานให้ตอบโจทย์ผู้ใช้งานจริง
                    </li>
                    <li>
                      • ออกแบบและพัฒนาหน้าเว็บ User Interface (UI) ด้วย Angular 19, Tailwind CSS และ DaisyUI เพื่อเชื่อมต่อกับระบบฐานข้อมูลและ API ของทีม
                    </li>
                    <li>
                      • ประสานงานร่วมกับทีมพัฒนาเพื่อให้โปรเจกต์ส่งมอบได้ตามเป้าหมาย
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h4 className="font-extrabold text-base text-black border-l-4 border-black pl-3">
                    งานติดตั้งและวางระบบเซิร์ฟเวอร์หน้างาน (On-site Implementation)
                  </h4>
                  <ul className="space-y-2 font-medium leading-relaxed">
                    <li>
                      • ร่วมลงพื้นที่ติดตั้งอุปกรณ์ Server Rack และระบบคอมพิวเตอร์สนับสนุนเครื่องจ่ายยาอัตโนมัติ ณ โรงพยาบาล (จังหวัดจันทบุรี)
                    </li>
                    <li>
                      • ติดตั้งและกำหนดค่าระบบจำลองเครื่องเสมือนด้วย Proxmox VE เพื่อเตรียมความพร้อมของโครงสร้างระบบเซิร์ฟเวอร์
                    </li>
                    <li>
                      • ประสานงานทางเทคนิคเพื่อเชื่อมโยงสภาพแวดล้อมระบบเครือข่ายและเซิร์ฟเวอร์เข้ากับระบบเครื่องจักรอัตโนมัติหน้างาน
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 24 Communication */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-black bg-white space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-4">
                <div>
                  <h3 className="font-extrabold text-xl text-black">24 Communication Co., Ltd.</h3>
                  <p className="text-sm font-bold text-[#FF7518]">Network & Infrastructure (Intern)</p>
                </div>
                <span className="text-xs font-extrabold text-white bg-black px-3 py-1.5 rounded-lg">
                  ระยะเวลา 2 เดือน
                </span>
              </div>

              <ul className="space-y-2 text-sm text-black font-medium leading-relaxed">
                <li>
                  • สังเกตการณ์และสนับสนุนทีมวิศวกรระบบเครือข่ายในการลงพื้นที่ติดตั้งระบบ IT Infrastructure ในหน่วยงานรัฐและโรงพยาบาล (สงขลา, ชุมพร, กระบี่)
                </li>
                <li>
                  • เรียนรู้ขั้นตอนการติดตั้ง จัดวางตำแหน่ง และการตั้งค่าพื้นฐานของอุปกรณ์เครือข่าย เช่น Switch, Access Point และระบบกล้องวงจรปิด (IP Camera / NVR)
                </li>
                <li>
                  • ศึกษาแนวทางการขนย้ายและกระบวนการตั้งค่าระบบ Server Room ณ สำนักงานสาธารณสุขจังหวัด (สสจ.จังหวัดกระบี่)
                </li>
                <li>
                  • ทำความเข้าใจมาตรฐานการเดินสายสัญญาณ (Structured Cabling), การจัดเก็บสายในตู้ Rack และข้อกำหนดความปลอดภัยในการปฏิบัติงานหน้างานจริง
                </li>
              </ul>
            </div>
          </div>

          {/* Education Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs text-[#FF7518] font-extrabold uppercase tracking-wider">Education</p>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)
              </h3>
              <p className="text-sm font-medium text-white">
                มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย (2565 – 2568) • เกรดเฉลี่ย 3.09
              </p>
            </div>
            <div className="bg-[#FF7518] text-white px-4 py-3 rounded-xl text-sm font-bold shrink-0">
              <p className="text-xs uppercase font-extrabold">กำลังศึกษาเพิ่มเติม</p>
              <p>Data Analytics: From Zero to Confident (SkillLane)</p>
            </div>
          </div>
        </section>

        {/* 4. Core Skills */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="border-b-2 border-black pb-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF7518]">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">ทักษะและเครื่องมือ (Core Skills)</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-black space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF7518] text-white flex items-center justify-center font-extrabold">
                AI
              </div>
              <h3 className="font-extrabold text-lg text-black">AI & Automation</h3>
              <ul className="text-sm text-black font-medium space-y-2">
                <li>• Generative AI (Gemini, ChatGPT, Claude)</li>
                <li>• AI-Assisted Development (Vibe Coding)</li>
                <li>• Python Workflow Automation & API</li>
                <li>• Knowledge Extraction & Prompt Design</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-black space-y-3">
              <div className="w-10 h-10 rounded-xl bg-black text-[#FF7518] flex items-center justify-center font-extrabold">
                DA
              </div>
              <h3 className="font-extrabold text-lg text-black">Data & System Analysis</h3>
              <ul className="text-sm text-black font-medium space-y-2">
                <li>• Requirement Gathering & System Flow</li>
                <li>• SQL Query & Relational Database Logic</li>
                <li>• Data Preparation & Analytics</li>
                <li>• Financial & Quantitative Visualization</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-black space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF7518] text-white flex items-center justify-center font-extrabold">
                IT
              </div>
              <h3 className="font-extrabold text-lg text-black">Web & Infrastructure</h3>
              <ul className="text-sm text-black font-medium space-y-2">
                <li>• Next.js, Angular 19, Tailwind CSS</li>
                <li>• Proxmox VE & Docker Container</li>
                <li>• Server Rack & Network Infrastructure</li>
                <li>• Git & Cloud Deployment (Vercel)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="p-8 sm:p-10 rounded-2xl bg-black text-white border-2 border-black space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF7518]">Contact</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ช่องทางติดต่อ</h2>
              <p className="text-sm sm:text-base text-white font-medium">
                สามารถกดคัดลอกอีเมลหรือเบอร์โทรศัพท์ด้านล่าง เพื่อติดต่อสอบถามข้อมูลเพิ่มเติมหรือนัดหมายสัมภาษณ์ได้ทันทีครับ
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="p-5 rounded-xl bg-white text-black space-y-3">
                <p className="text-xs font-extrabold uppercase text-[#FF7518]">Email</p>
                <p className="text-lg font-extrabold text-black break-all">wasawatrs@gmail.com</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleCopyText("wasawatrs@gmail.com", "email")}
                    className="bg-black hover:bg-[#FF7518] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedType === "email" ? "✓ คัดลอกอีเมลแล้ว" : "คัดลอกอีเมล"}
                  </button>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=wasawatrs@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black hover:bg-[#FF7518] hover:border-[#FF7518] hover:text-white text-black text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
                  >
                    เปิดผ่าน Gmail ↗
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-xl bg-white text-black space-y-3">
                <p className="text-xs font-extrabold uppercase text-[#FF7518]">Telephone</p>
                <p className="text-lg font-extrabold text-black">095-261-0788 / 085-825-7724</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleCopyText("095-261-0788", "phone")}
                    className="bg-black hover:bg-[#FF7518] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedType === "phone" ? "✓ คัดลอกเบอร์โทรแล้ว" : "คัดลอกเบอร์ 095-261-0788"}
                  </button>
                  <a
                    href="tel:0952610788"
                    className="border-2 border-black hover:bg-[#FF7518] hover:border-[#FF7518] hover:text-white text-black text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
                  >
                    โทรออก (มือถือ)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-8 border-t-2 border-black">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-bold">
          <span>วสวัตติ์ รัตนรังษี — Portfolio</span>
          <span>wasawatrs@gmail.com • 095-261-0788</span>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="max-w-5xl w-full space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center text-white text-sm">
              <p className="font-bold">{lightbox.caption}</p>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="bg-[#FF7518] hover:bg-white hover:text-black text-white px-4 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer"
              >
                ปิดหน้าต่าง [X]
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full max-h-[82vh] object-contain rounded-xl border-2 border-white bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}