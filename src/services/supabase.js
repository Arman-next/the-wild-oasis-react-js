import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://otiiqywtjclhxgnxqwpg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aWlxeXd0amNsaHhnbnhxd3BnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NjQ0MzMsImV4cCI6MjA2NTU0MDQzM30.4nFd-oZHEmfNKIU8FI9yUdjoFBPYbK_aZkddrQMcK-w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
