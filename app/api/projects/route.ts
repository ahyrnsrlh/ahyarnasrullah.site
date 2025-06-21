import { NextResponse } from "next/server";

import { getProjectsData } from "@/services/projects";

export const GET = async () => {
  try {
    console.log("Projects API called");
    const data = await getProjectsData();
    console.log("Projects data fetched:", data?.length || 0, "items");
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Projects API error:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};
