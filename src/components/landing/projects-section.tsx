'use client';

import React, { useState } from 'react';
import ProjectCard from './project-card';
import type { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-8">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            {...project}
            onMouseEnter={() => setActiveProject(project.title)}
            onMouseLeave={() => setActiveProject(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;