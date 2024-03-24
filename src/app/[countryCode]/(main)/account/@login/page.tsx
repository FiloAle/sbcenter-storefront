import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Accesso",
  description: "Accedi al tuo account SB Center.",
}

export default function Login() {
  return <LoginTemplate />
}
