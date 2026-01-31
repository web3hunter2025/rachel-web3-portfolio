/* Brutalist Modernism Design - Rachel Web3 Portfolio Homepage
   - Deep charcoal background with neon accents
   - Asymmetric layout with geometric shapes
   - Hard borders and no rounded corners
*/
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/data/projects";
import { Mail, Send, Twitter } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const communityProjects = projects.filter(p => p.category === "community");
  const researchProjects = projects.filter(p => p.category === "research");
  const brandingProjects = projects.filter(p => p.category === "branding");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b-2 border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-xl font-bold font-mono">RACHEL.WEB3</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#projects" className="text-sm font-mono hover:text-primary transition-colors">PROJECTS</a>
              <a href="#about" className="text-sm font-mono hover:text-primary transition-colors">ABOUT</a>
              <a href="#contact" className="text-sm font-mono hover:text-primary transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-16 h-1 bg-primary"></div>
              <span className="text-sm font-mono text-primary uppercase tracking-widest">Web3 Professional</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Rachel
              <br />
              <span className="text-primary">Web3 项目作品集</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              2年 Web3 行业经验,横跨<span className="text-primary font-semibold">社区建设</span>、
              <span className="text-accent font-semibold">链上投研</span>、
              <span className="text-destructive font-semibold">品牌运营</span>三大领域。
              从执行者到管理者的完整成长路径。
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-2xl">
              <div className="border-2 border-primary p-4 bg-card">
                <div className="text-3xl font-bold text-primary font-mono mb-1">2+</div>
                <div className="text-sm text-muted-foreground">年行业经验</div>
              </div>
              <div className="border-2 border-accent p-4 bg-card">
                <div className="text-3xl font-bold text-accent font-mono mb-1">10+</div>
                <div className="text-sm text-muted-foreground">项目经历</div>
              </div>
              <div className="border-2 border-destructive p-4 bg-card">
                <div className="text-3xl font-bold text-destructive font-mono mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">社群管理</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary font-mono uppercase tracking-wider"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                查看项目
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-border hover:border-primary font-mono uppercase tracking-wider"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                联系我
              </Button>
            </div>
          </div>
        </div>
        
        {/* Geometric accent */}
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-primary opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-accent opacity-10"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-sm font-mono text-primary uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">项目经历</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              从社区建设到链上投研,从品牌运营到团队管理,全方位的 Web3 实战经验。
            </p>
          </div>

          {/* Community Building */}
          <div 
            className="mb-20 relative"
            style={{
              backgroundImage: 'url(/images/community-section.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-background/90"></div>
            <div className="relative z-10 py-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <span className="text-background font-bold font-mono">01</span>
                </div>
                <h3 className="text-3xl font-bold">社区建设与项目推广</h3>
                <div className="flex-1 h-0.5 bg-primary"></div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                从校园推广执行者到社区管理者,再到 CTO 团队负责人,体现社区侧的完整成长路径。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityProjects.map(project => (
                  <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                ))}
              </div>
            </div>
          </div>

          {/* Research & Trading */}
          <div 
            className="mb-20 relative"
            style={{
              backgroundImage: 'url(/images/research-section.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-background/90"></div>
            <div className="relative z-10 py-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-accent flex items-center justify-center">
                  <span className="text-background font-bold font-mono">02</span>
                </div>
                <h3 className="text-3xl font-bold">链上投研与策略执行</h3>
                <div className="flex-1 h-0.5 bg-accent"></div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                项目分析、收益测算、批量执行、风控管理,体现投研和交易侧的专业能力。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchProjects.map(project => (
                  <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                ))}
              </div>
            </div>
          </div>

          {/* Branding & Operations */}
          <div 
            className="mb-20 relative"
            style={{
              backgroundImage: 'url(/images/branding-section.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-background/90"></div>
            <div className="relative z-10 py-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-destructive flex items-center justify-center">
                  <span className="text-background font-bold font-mono">03</span>
                </div>
                <h3 className="text-3xl font-bold">品牌运营与活动策划</h3>
                <div className="flex-1 h-0.5 bg-destructive"></div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                多平台内容运营、品牌从 0 到 1、活动全流程执行,体现运营和市场侧的系统能力。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandingProjects.map(project => (
                  <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/profile-accent.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-sm font-mono text-primary uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="text-5xl font-bold mb-8">核心能力总结</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border-2 border-primary p-6 bg-background">
                <h3 className="text-xl font-bold mb-4 text-primary">社区建设与用户运营</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 多平台社群运营(Twitter/Telegram/Discord/微信)</li>
                  <li>• AMA/Twitter Space 策划与主持</li>
                  <li>• 用户增长与留存策略</li>
                </ul>
              </div>
              
              <div className="border-2 border-accent p-6 bg-background">
                <h3 className="text-xl font-bold mb-4 text-accent">链上投研与交易分析</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• DeFi 挖矿/LP 收益测算</li>
                  <li>• 代币经济模型分析</li>
                  <li>• 多链交互实操与批量执行</li>
                </ul>
              </div>
              
              <div className="border-2 border-destructive p-6 bg-background">
                <h3 className="text-xl font-bold mb-4 text-destructive">品牌运营与活动策划</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 品牌从 0 到 1 搭建</li>
                  <li>• 线下活动全流程策划执行</li>
                  <li>• 内容沉淀与二次传播</li>
                </ul>
              </div>
              
              <div className="border-2 border-border p-6 bg-background">
                <h3 className="text-xl font-bold mb-4">团队管理与商务拓展</h3>
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
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-sm font-mono text-primary uppercase tracking-widest">Get In Touch</span>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <h2 className="text-5xl font-bold mb-6">联系方式</h2>
            <p className="text-xl text-muted-foreground mb-12">
              欢迎交流 Web3 项目合作、社区运营、投研分析等话题
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://t.me/web3rachel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 transition-colors font-mono"
              >
                <Send className="w-5 h-5" />
                <span>Telegram: web3rachel</span>
              </a>
              
              <a 
                href="https://twitter.com/catcat0x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-card text-foreground border-2 border-border hover:border-primary transition-colors font-mono"
              >
                <Twitter className="w-5 h-5" />
                <span>X: catcat0x</span>
              </a>
              
              <a 
                href="mailto:web3rachel@outlook.com"
                className="flex items-center gap-3 px-6 py-3 bg-card text-foreground border-2 border-border hover:border-primary transition-colors font-mono"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t-2 border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground">© 2026 Rachel Web3 Portfolio</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://t.me/web3rachel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/catcat0x" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:web3rachel@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}
