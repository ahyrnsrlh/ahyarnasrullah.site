import { getProjectsData } from "@/services/projects";

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects &&
          projects.map((p: any) => (
            <li key={p.id}>
              <strong>{p.title || p.name}</strong>: {p.description}
            </li>
          ))}
      </ul>
    </div>
  );
}
