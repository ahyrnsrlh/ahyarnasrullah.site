import { createClient } from "@/common/utils/server";
import { ProjectItem } from "@/common/types/projects";

export const getProjectsData = async () => {
  const supabase = await createClient();

  let { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_show", true)
    .order("is_featured", { ascending: false });

  if (error) throw error;
  return data;
};

export const getProjectsDataBySlug = async (
  slug: string,
): Promise<ProjectItem | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching project:", error);
    return null;
  }

  return data;
};
