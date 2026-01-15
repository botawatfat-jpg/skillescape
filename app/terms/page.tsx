import { redirect } from "next/navigation";

export default function TermsRedirect() {
  redirect("/terms/terms-and-conditions");
}
