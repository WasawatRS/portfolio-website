"use client";

import React, { useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
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
    role: "AI Solution Architect & Vibe Coder",
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
      { src: "/images/IV02.png", caption: "แบบจำลองการกระจายตัวของราคา (Distribution) และเส้นทางราคาสังเคราะห์" },
      { src: "/images/IV03.png", caption: "การเปรียบเทียบราคาความผันผวนในอดีตเปรียบเทียบกับอนาคต" },
      { src: "/images/IV04.png", caption: "คลังอ้างอิงคำศัพท์หลักและแผนที่เส้นทางการเรียนรู้จากเอกสาร 23 ฉบับ" },
    ],
  },
  {
    id: "video-ai",
    title: "AI Video Automation Pipeline & HomeLab Infrastructure",
    subtitle: "ระบบผลิตวิดีโอรีวิวสินค้า E-commerce อัตโนมัติบนเซิร์ฟเวอร์จำลอง",
    role: "System & Automation Developer",
    tags: ["Python", "Gemini API", "ElevenLabs", "Proxmox VE", "Automation"],
    problem:
      "การผลิตวิดีโอรีวิวสินค้าจำนวนมาก ตั้งแต่การเขียนสคริปต์ พากย์เสียง ใส่ซับไตเติล ไปจนถึงการจับคู่ลิงก์สินค้า มีขั้นตอนซ้ำซ้อนและใช้เวลานาน",
    solution:
      "วางโครงสร้างเซิร์ฟเวอร์จำลองด้วย Proxmox VE และพัฒนาเว็บควบคุมการผลิต (Batch Matching) เชื่อมต่อ Gemini API สำหรับสร้างบทพากย์และแคปชัน ร่วมกับระบบสังเคราะห์เสียงจากElevenLabs",
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
    role: "Requirement Analyst & Frontend Developer (Intern)",
    tags: ["Angular 19", "Tailwind CSS", "Requirement Gathering", "System Flow"],
    problem:
      "ระบบจัดการคลังสินค้าเดิมมีความซับซ้อนในการใช้งาน ขั้นตอนการเบิกจ่าย (Picking) และการจัดซื้อ (Purchase) ขาดความคล่องตัวสำหรับผู้ปฏิบัติงานหน้างาน",
    solution:
      "ลงพื้นที่เก็บความต้องการผู้ใช้งาน (Requirement Gathering) วิเคราะห์ปรับปรุง UX/UI ใหม่ทั้งหมดด้วย Angular 19 และ Tailwind CSS เพื่อเชื่อมต่อกับ API และฐานข้อมูลเดิมขององค์กร",
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

  const handleSelectImg = (projectId: string, idx: number) => {
    setActiveImgIdx((prev) => ({ ...prev, [projectId]: idx }));
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
            <span className="font-bold tracking-tight text-zinc-950">WASAWAT.R</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-800">
            <a href="#projects" className="hover:text-orange-500 transition-colors">ผลงาน (Projects)</a>
            <a href="#skills" className="hover:text-orange-500 transition-colors">ทักษะ (Skills)</a>
            <a href="#experience" className="hover:text-orange-500 transition-colors">ประสบการณ์</a>
            <a
              href="mailto:wasawatrs@gmail.com"
              className="bg-zinc-950 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ติดต่อสัมภาษณ์
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14 space-y-24">
        {/* 1. Hero Section */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Available for Opportunity • AI, Data & Digital Solutions
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
              วสวัตติ์ รัตนรังษี
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-orange-500">
              AI & Digital Solutions Advisor | Business Intelligence & System Analyst
            </p>
          </div>

          <p className="text-zinc-800 max-w-3xl text-base sm:text-lg leading-relaxed">
            บัณฑิตวิศวกรรมคอมพิวเตอร์ที่มุ่งเน้นการเชื่อมโยง <strong className="text-zinc-900">โจทย์ธุรกิจและข้อมูล</strong> เข้ากับเทคโนโลยี{" "}
            <strong className="text-zinc-900">Generative AI, Automation และ Data Analytics</strong> ถนัดการเก็บความต้องการ (Requirement Analysis) 
            ออกแบบเวิร์กโฟลว์ และพัฒนาต้นแบบโซลูชันที่ใช้งานได้จริงเพื่อแก้ปัญหาหน้างาน
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:wasawatrs@gmail.com"
              className="bg-orange-500 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              ส่งอีเมลติดต่อ (wasawatrs@gmail.com)
            </a>
            <div className="px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-medium">
              โทร: 095-261-0788 / 085-825-7724
            </div>
          </div>
        </section>

        {/* 2. Featured Projects */}
        <section id="projects" className="space-y-10 scroll-mt-24">
          <div className="border-b-2 border-zinc-950 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500">Portfolio Showcase</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">ผลงานและโซลูชันที่พัฒนาจริง</h2>
            </div>
            <p className="text-sm text-zinc-500">คลิกที่รูปภาพเพื่อขยายดูรายละเอียดขนาดเต็ม</p>
          </div>

          <div className="space-y-12">
            {PROJECTS.map((project, index) => {
              const currentIdx = activeImgIdx[project.id] || 0;
              const currentImage = project.images[currentIdx];

              return (
                <article
                  key={project.id}
                  className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-orange-300 transition-all"
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-8 bg-white border-b border-zinc-200 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-md bg-zinc-950 text-white">
                        PROJECT 0{index + 1} • {project.role}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">{project.title}</h3>
                      <p className="text-zinc-800 text-sm sm:text-base mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Media Showcase Area (รองรับทั้งแบบมีวิดีโอแนวตั้งคู่กับภาพ และแบบภาพอย่างเดียว) */}
                  <div className="p-6 sm:p-8 bg-zinc-900 text-white">
                    {project.video ? (
                      <div className="grid lg:grid-cols-12 gap-6 items-start">
                        {/* ฝั่งซ้าย (8 คอลัมน์): แกลเลอรีภาพหน้าจอระบบ */}
                        <div className="lg:col-span-8 space-y-4">
                          <div
                            onClick={() => setLightbox(currentImage)}
                            className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 aspect-video flex items-center justify-center"
                          >
                            <img
                              src={currentImage.src}
                              alt={currentImage.caption}
                              className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-300"
                            />
                            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg border border-zinc-700 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                              คลิกเพื่อขยายภาพเต็มจอ
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <p className="text-sm text-zinc-300">
                              <span className="text-orange-400 font-semibold">ภาพที่ {currentIdx + 1}/{project.images.length}:</span>{" "}
                              {currentImage.caption}
                            </p>
                            <div className="flex items-center gap-2 shrink-0">
                              {project.images.map((img, i) => (
                                <button
                                  key={img.src}
                                  onClick={() => handleSelectImg(project.id, i)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    currentIdx === i
                                      ? "bg-orange-500 text-white shadow-sm"
                                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                                  }`}
                                >
                                  0{i + 1}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* ฝั่งขวา (4 คอลัมน์): วิดีโอตัวอย่างแนวตั้ง 9:16 */}
                        <div className="lg:col-span-4 flex flex-col items-center space-y-3 bg-zinc-950/70 p-4 rounded-xl border border-zinc-800">
                          <div className="w-full flex items-center justify-between text-xs">
                            <span className="font-bold text-orange-400 uppercase tracking-wider">Output Video Demo</span>
                            <span className="text-zinc-400">9:16 Vertical</span>
                          </div>
                          <div className="w-full max-w-[230px] aspect-[9/16] rounded-xl overflow-hidden border-2 border-zinc-700 bg-black shadow-lg">
                            <video
                              src={project.video.src}
                              controls
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-xs text-zinc-400 text-center leading-relaxed">
                            {project.video.caption}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* กรณีโปรเจกต์ทั่วไปที่มีเฉพาะภาพหน้าจอ */
                      <div className="space-y-4">
                        <div
                          onClick={() => setLightbox(currentImage)}
                          className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950 aspect-video flex items-center justify-center"
                        >
                          <img
                            src={currentImage.src}
                            alt={currentImage.caption}
                            className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-300"
                          />
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg border border-zinc-700 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                            คลิกเพื่อขยายภาพเต็มจอ
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                          <p className="text-sm text-zinc-300">
                            <span className="text-orange-400 font-semibold">ภาพที่ {currentIdx + 1}/{project.images.length}:</span>{" "}
                            {currentImage.caption}
                          </p>

                          <div className="flex items-center gap-2 shrink-0">
                            {project.images.map((img, i) => (
                              <button
                                key={img.src}
                                onClick={() => handleSelectImg(project.id, i)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                  currentIdx === i
                                    ? "bg-orange-500 text-white shadow-sm"
                                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"
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

                  {/* Case Study Details (Problem -> Solution -> Impact) */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-zinc-200 space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">01. โจทย์และปัญหา (Problem)</p>
                        <p className="text-sm text-zinc-800 leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-orange-200 space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-600">02. แนวทางแก้ไข (Solution)</p>
                        <p className="text-sm text-zinc-800 leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-zinc-200 space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-950">03. ผลลัพธ์ที่ได้ (Impact)</p>
                        <p className="text-sm text-zinc-800 leading-relaxed">{project.impact}</p>
                      </div>
                    </div>

                    {project.liveUrl && (
                      <div className="pt-1 flex justify-end">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
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

        {/* 3. Core Skills */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="border-b-2 border-zinc-950 pb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-500">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">ทักษะและเครื่องมือ (Core Skills)</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                AI
              </div>
              <h3 className="font-bold text-lg text-zinc-950">AI & Automation</h3>
              <ul className="text-sm text-zinc-800 space-y-2">
                <li>• Generative AI (Gemini, ChatGPT, Claude)</li>
                <li>• AI-Assisted Development (Vibe Coding)</li>
                <li>• Python Workflow Automation & API Integration</li>
                <li>• Knowledge Extraction & Prompt Engineering</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 text-orange-400 flex items-center justify-center font-bold">
                DA
              </div>
              <h3 className="font-bold text-lg text-zinc-950">Data & Business Analysis</h3>
              <ul className="text-sm text-zinc-800 space-y-2">
                <li>• Requirement Gathering & System Workflow</li>
                <li>• SQL Query & Relational Database Logic</li>
                <li>• Data Preparation & Spreadsheets Analytics</li>
                <li>• Quantitative & Financial Data Visualization</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                IT
              </div>
              <h3 className="font-bold text-lg text-zinc-950">System & Web Stack</h3>
              <ul className="text-sm text-zinc-800 space-y-2">
                <li>• Proxmox VE & Docker Container (HomeLab)</li>
                <li>• On-site Server & Network Infrastructure</li>
                <li>• Next.js, Angular 19, Tailwind CSS</li>
                <li>• Git & Cloud Deployment (Vercel)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Experience & Education */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="border-b-2 border-zinc-950 pb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-500">Background</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">ประสบการณ์ฝึกงานและการศึกษา</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3">
              <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">
                สหกิจศึกษา (4 เดือน)
              </span>
              <h3 className="font-bold text-lg text-zinc-950">DMS Isolutions Pte. Ltd.</h3>
              <p className="text-sm font-medium text-zinc-500">Web Development & System Implementation (Intern)</p>
              <p className="text-sm text-zinc-800 leading-relaxed">
                วิเคราะห์ความต้องการและออกแบบหน้าเว็บระบบจัดการคลังสินค้า (DMS OneApp) ด้วย Angular 19 รวมถึงร่วมลงพื้นที่ติดตั้งระบบเซิร์ฟเวอร์ Proxmox VE สนับสนุนเครื่องจ่ายยาอัตโนมัติ ณ โรงพยาบาล
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3">
              <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2.5 py-1 rounded-md">
                ฝึกงาน (2 เดือน)
              </span>
              <h3 className="font-bold text-lg text-zinc-950">24 Communication Co., Ltd.</h3>
              <p className="text-sm font-medium text-zinc-800">Network & Infrastructure (Intern)</p>
              <p className="text-sm text-zinc-800 leading-relaxed">
                สนับสนุนทีมวิศวกรลงพื้นที่ติดตั้งระบบเครือข่าย Switch, Access Point, ระบบกล้องวงจรปิด และตั้งค่าห้อง Server Room ในหน่วยงานภาครัฐและโรงพยาบาล
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-orange-400 font-semibold uppercase">Education & Continuous Learning</p>
              <h3 className="text-lg font-bold mt-1">ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)</h3>
              <p className="text-sm text-zinc-400">มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย (2565 – 2568) • เกรดเฉลี่ย 3.09</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-xl text-sm">
              <p className="text-orange-400 font-semibold">กำลังศึกษาเพิ่มเติม:</p>
              <p className="text-zinc-300">Data Analytics: From Zero to Confident (SkillLane)</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 mt-20 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span className="text-white font-bold">วสวัตติ์ รัตนรังษี</span> • Computer Engineer & AI Solutions Builder
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:wasawatrs@gmail.com" className="hover:text-orange-400 transition-colors">
              wasawatrs@gmail.com
            </a>
            <span>095-261-0788</span>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal สำหรับดูรูปขยายเต็มจอ */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="max-w-5xl w-full space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center text-white text-sm">
              <p className="font-medium">{lightbox.caption}</p>
              <button
                onClick={() => setLightbox(null)}
                className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-bold"
              >
                ปิดหน้าต่าง [X]
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full max-h-[82vh] object-contain rounded-xl border border-zinc-800 bg-zinc-950"
            />
          </div>
        </div>
      )}
    </div>
  );
}