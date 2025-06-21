-- Check if tables exist and have data
SELECT 'achievements' as table_name, COUNT(*) as row_count FROM public.achievements
UNION ALL
SELECT 'projects' as table_name, COUNT(*) as row_count FROM public.projects
UNION ALL
SELECT 'messages' as table_name, COUNT(*) as row_count FROM public.messages;

-- Check RLS status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('achievements', 'projects', 'messages');

-- Check existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename IN ('achievements', 'projects', 'messages');

-- Sample data check
SELECT * FROM public.achievements LIMIT 3;
SELECT * FROM public.projects LIMIT 3;

-- Fix RLS - Create public read policies
CREATE POLICY IF NOT EXISTS "Enable read access for all users" ON public.achievements
FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Enable read access for all users" ON public.projects
FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Enable read access for all users" ON public.messages
FOR SELECT USING (true);

-- OR temporarily disable RLS for testing
-- ALTER TABLE public.achievements DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.projects DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;
