import { useState } from "react";
import { Mail, Send, Twitter } from "lucide-react";
import { projects, categoryLabels, type Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

/**
 * Design Philosophy: Clean, Professional Purple Theme
 * Inspired by web3hunter.online
 * - Deep purple gradient background
 * - Cyan accent color for emphasis
 * - Dashed red border cards
 * - 3-column grid layout
 * - Ample whitespace for readability
 */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const communityProjects = projects.filter(p => p.category === "community");
  const researchProjects = projects.filter(p => p.category === "research");
  const brandingProjects = projects.filter(p => p.category === "branding");

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">RACHEL</div>
            <div className="flex gap-8">
              <a href="#projects" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                项目经历
              </a>
              <a href="#about" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                关于我
              </a>
              <a href="#contact" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                联系方式
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl">🚀</span>
              <h1 className="text-5xl font-bold text-foreground">
                Web3 项目作品集
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Rachel | 2年 Web3 行业经验 | 社区建设 · 链上投研 · 品牌运营
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="dashed-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">年行业经验</div>
            </div>
            <div className="dashed-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">项目经历</div>
            </div>
            <div className="dashed-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">核心领域</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto px-6">
          {/* Community Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">📚</span>
              <h2 className="text-3xl font-bold text-foreground">社区建设 (2018-2025)</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              从校园推广执行者到社区管理者,再到 CTO 团队负责人,体现社区侧的完整成长路径。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityProjects.map((project) => (
                <div
                  key={project.id}
                  className="dashed-card rounded-xl p-6 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-3">
                      {categoryLabels[project.category]}
                    </span>
                    <div className="text-xs text-muted-foreground mb-2">{project.period}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="text-xs text-primary">查看详情 →</div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">💎</span>
              <h2 className="text-3xl font-bold text-foreground">链上投研 (2025)</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              项目分析、收益测算、批量执行、风控管理,体现投研和交易侧的专业能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchProjects.map((project) => (
                <div
                  key={project.id}
                  className="dashed-card rounded-xl p-6 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs rounded-full mb-3">
                      {categoryLabels[project.category]}
                    </span>
                    <div className="text-xs text-muted-foreground mb-2">{project.period}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="text-xs text-accent">查看详情 →</div>
                </div>
              ))}
            </div>
          </div>

          {/* Branding Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🔥</span>
              <h2 className="text-3xl font-bold text-foreground">品牌运营 (2025)</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              多平台内容运营、品牌从 0 到 1、活动全流程执行,体现运营和市场侧的系统能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {brandingProjects.map((project) => (
                <div
                  key={project.id}
                  className="dashed-card rounded-xl p-6 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-3">
                      {categoryLabels[project.category]}
                    </span>
                    <div className="text-xs text-muted-foreground mb-2">{project.period}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="text-xs text-primary">查看详情 →</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">核心能力总结</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="dashed-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">社区建设与用户运营</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 多平台社群运营(Twitter/Telegram/Discord/微信)</li>
                  <li>• AMA/Twitter Space 策划与主持</li>
                  <li>• 用户增长与留存策略</li>
                </ul>
              </div>
              <div className="dashed-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">链上投研与交易分析</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• DeFi 挖矿/LP 收益测算</li>
                  <li>• 代币经济模型分析</li>
                  <li>• 多链交互实操与批量执行</li>
                </ul>
              </div>
              <div className="dashed-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">品牌运营与活动策划</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 品牌从 0 到 1 搭建</li>
                  <li>• 线下活动全流程策划执行</li>
                  <li>• 内容沉淀与二次传播</li>
                </ul>
              </div>
              <div className="dashed-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">团队管理与商务拓展</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 团队组建与目标制定</li>
                  <li>• 跨部门协调与资源整合</li>
                  <li>• 中英文专业翻译与跨文化沟通</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">联系方式</h2>
            <p className="text-muted-foreground mb-10">
              欢迎交流 Web3 项目合作、社区运营、投研分析等话题
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://t.me/web3rachel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                <Send className="w-5 h-5" />
                <span>Telegram: web3rachel</span>
              </a>
              <a
                href="https://twitter.com/catcat0x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                <Twitter className="w-5 h-5" />
                <span>X: catcat0x</span>
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg whitespace-nowrap">
                <Mail className="w-5 h-5" />
                <span>web3rachel@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Rachel Web3 Portfolio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
