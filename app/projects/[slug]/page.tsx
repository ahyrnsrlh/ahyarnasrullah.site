import { getProjectsDataBySlug } from "@/services/projects";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectsDataBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail {...project} />;
}
