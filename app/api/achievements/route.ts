import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

import { getAchievementsData } from "@/services/achievements";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryCategory = searchParams.get("category");
    const querySearch = searchParams.get("search");

    console.log("Achievements API called with:", {
      queryCategory,
      querySearch,
    });

    let data;

    if (queryCategory && querySearch) {
      data = await getAchievementsData({
        category: queryCategory,
        search: querySearch,
      });
    } else if (queryCategory && queryCategory.trim()) {
      data = await getAchievementsData({ category: queryCategory });
    } else if (querySearch) {
      data = await getAchievementsData({ search: querySearch });
    } else {
      data = await getAchievementsData({});
    }

    console.log("Achievements data fetched:", {
      count: data?.length || 0,
      data: data?.slice(0, 2) || [], // Log first 2 items for debugging
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Achievements API error:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};
