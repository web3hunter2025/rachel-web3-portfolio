/* Brutalist Modernism - Project card with hard borders and hover effects */
import { Project, categoryLabels, categoryColors } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const categoryColor = categoryColors[project.category];
  
  return (
    <div
      onClick={onClick}
      className="group relative bg-card border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: categoryColor }}></div>
      
      <div className="p-6 pl-8">
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="px-2 py-1 text-xs font-mono uppercase tracking-wider text-background"
            style={{ backgroundColor: categoryColor }}
          >
            {categoryLabels[project.category]}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.shortDesc}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-primary text-sm font-mono">
          <span>查看详情</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}
