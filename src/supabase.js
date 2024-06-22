import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xpsuuecqydbyptbaexzx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwc3V1ZWNxeWRieXB0YmFleHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzMyMTcsImV4cCI6MjAzNDY0OTIxN30.KpGhfdDcWYt-Ec4ENFzG8FPqpDQwfzCOwvBiV7PdgAw";
export const supabase = createClient(supabaseUrl, supabaseKey);
//export를 하면 다른 컴포넌트에 간편하게 import 할 수 있다.
