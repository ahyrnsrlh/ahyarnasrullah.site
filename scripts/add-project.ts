const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://jhuovxssansylbrvvbpf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW92eHNzYW5zeWxicnZ2YnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwOTA1NzMsImV4cCI6MjA2MDY2NjU3M30.CDxOHMAqs4jlr0PkNB29jlrzPPH2_j3clToaa4HxG_A";

const supabase = createClient(supabaseUrl, supabaseKey);

const addProject = async () => {
  const newProject = {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS",
    image: "/images/projects/portfolio.jpg",
    content:
      "# Portfolio Website\n\nA modern and responsive portfolio website showcasing my projects and skills.",
    stack: ["nextjs", "react", "tailwindcss"],
    link: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
  };

  try {
    const { data, error } = await supabase
      .from("projects")
      .insert([newProject])
      .select();

    if (error) {
      console.error("Error adding project:", error);
      return;
    }

    console.log("Project added successfully:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

addProject();
