const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://jhuovxssansylbrvvbpf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW92eHNzYW5zeWxicnZ2YnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwOTA1NzMsImV4cCI6MjA2MDY2NjU3M30.CDxOHMAqs4jlr0PkNB29jlrzPPH2_j3clToaa4HxG_A";

const supabase = createClient(supabaseUrl, supabaseKey);

const checkTable = async () => {
  try {
    // Cek struktur tabel
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .limit(1);

    if (error) {
      console.error("Error checking table:", error);
      return;
    }

    console.log("Table structure:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

checkTable();
