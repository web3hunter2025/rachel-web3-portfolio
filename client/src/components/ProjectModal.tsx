/* Clean and professional project detail modal */
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
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card/95 backdrop-blur-sm border border-primary/30 p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
        </button>
        
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                {categoryLabels[project.category]}
              </span>
              <span className="text-sm text-muted-foreground">{project.period}</span>
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-3">
              {project.title}
            </DialogTitle>
            <p className="text-base text-muted-foreground leading-relaxed">{project.shortDesc}</p>
          </DialogHeader>

          <div className="space-y-8">
            {/* 项目背景 */}
            <section>
              <h3 className="text-lg font-semibold mb-3 text-primary">项目背景</h3>
              <p className="text-foreground/90 leading-relaxed">{project.background}</p>
            </section>

            {/* 参与角色 */}
            <section>
              <h3 className="text-lg font-semibold mb-3 text-primary">参与角色</h3>
              <p className="text-foreground/90 leading-relaxed">{project.role}</p>
            </section>

            {/* 核心成果 */}
            <section>
              <h3 className="text-lg font-semibold mb-4 text-primary">核心成果</h3>
              <ul className="space-y-3">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/90 leading-relaxed">
                    <span className="text-primary mt-1.5 flex-shrink-0">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 深刻认知 */}
            {project.insights.length > 0 && (
              <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-lg font-semibold mb-4 text-primary">深刻认知</h3>
                <div className="space-y-3">
                  {project.insights.map((insight, idx) => (
                    <p key={idx} className="text-foreground/90 leading-relaxed">
                      {insight}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* 深度分析 */}
            {project.deepAnalysis && (
              <section>
                <h3 className="text-lg font-semibold mb-4 text-primary">深度分析</h3>
                <div className="space-y-5">
                  {project.deepAnalysis.map((analysis, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-base mb-2 text-foreground">{analysis.title}</h4>
                      <p className="text-foreground/80 leading-relaxed pl-4 border-l-2 border-primary/30">
                        {analysis.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 能力积累 */}
            <section>
              <h3 className="text-lg font-semibold mb-4 text-primary">能力积累</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-primary/10 text-foreground text-sm rounded-md border border-primary/20"
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
