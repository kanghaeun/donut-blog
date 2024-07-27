import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xpsuuecqydbyptbaexzx.supabase.co";
const supabaseKey = import.meta.env.VITE_ERROR_API;
export const supabase = createClient(supabaseUrl, supabaseKey);
