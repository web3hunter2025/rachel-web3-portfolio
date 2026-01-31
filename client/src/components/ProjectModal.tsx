/* Brutalist Modernism - Project detail modal with hard borders and neon accents */
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project, categoryLabels } from "@/data/projects";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-2 bg-background border-2 border-border hover:border-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider">
                {categoryLabels[project.category]}
              </span>
              <span className="text-sm text-muted-foreground font-mono">{project.period}</span>
            </div>
            <DialogTitle className="text-3xl font-bold text-foreground mb-2">
              {project.title}
            </DialogTitle>
            <p className="text-lg text-muted-foreground">{project.shortDesc}</p>
          </DialogHeader>

          <div className="space-y-6">
            <section className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-bold mb-3 text-foreground">项目背景</h3>
              <p className="text-foreground/90 leading-relaxed">{project.background}</p>
            </section>

            <section className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-bold mb-3 text-foreground">参与角色</h3>
              <p className="text-foreground/90 leading-relaxed">{project.role}</p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                核心成果
              </h3>
              <ul className="space-y-3">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="pl-6 relative text-foreground/90 leading-relaxed">
                    <span className="absolute left-0 top-2 w-3 h-3 border-2 border-primary"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>

            {project.insights.length > 0 && (
              <section className="bg-secondary p-6 border-2 border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent"></span>
                  深刻认知
                </h3>
                <div className="space-y-3">
                  {project.insights.map((insight, idx) => (
                    <p key={idx} className="text-foreground/90 leading-relaxed italic">
                      {insight}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {project.deepAnalysis && (
              <section>
                <h3 className="text-xl font-bold mb-4 text-foreground">深度分析</h3>
                <div className="space-y-4">
                  {project.deepAnalysis.map((analysis, idx) => (
                    <div key={idx} className="border-l-2 border-muted pl-4">
                      <h4 className="font-bold text-lg mb-2 text-primary">{analysis.title}</h4>
                      <p className="text-foreground/90 leading-relaxed">{analysis.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h3 className="text-xl font-bold mb-3 text-foreground">能力积累</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-foreground text-sm border border-border hover:border-primary transition-colors font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
