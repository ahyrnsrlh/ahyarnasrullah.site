import { createClient } from "@/common/utils/server";

interface GetAchievementsDataProps {
  category?: string;
  search?: string;
}

export const getAchievementsData = async ({
  category,
  search,
}: GetAchievementsDataProps) => {
  try {
    const supabase = await createClient();

    let query = supabase.from("achievements").select("*");

    if (category) {
      query = query.eq("category", category);
    }

    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    console.log("Querying achievements with filters:", { category, search });

    const { data, error } = await query;

    if (error) {
      console.error("Supabase query error:", error);
      throw new Error(error.message);
    }

    console.log("Achievements query result:", {
      count: data?.length || 0,
      hasData: !!data && data.length > 0,
    });

    return data || [];
  } catch (error) {
    console.error("getAchievementsData error:", error);
    throw error;
  }
};
