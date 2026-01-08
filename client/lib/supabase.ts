import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cezdzfqaegxkhlyrtqta.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlemR6ZnFhZWd4a2hseXJ0cXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NzcwODYsImV4cCI6MjA4MzM1MzA4Nn0.qRHc3GCnCcws70lQnVo6ojdcvFYzuzPmdqe9DMbn8Fk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type InquiryType = "project" | "call" | "plan";

export interface InquiryData {
  inquiry_type: InquiryType;
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  preferred_date?: string;
  preferred_time?: string;
  status?: string;
}

export const submitInquiry = async (data: InquiryData) => {
  const { data: response, error } = await supabase
    .from("inquiries")
    .insert([data])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return response;
};
