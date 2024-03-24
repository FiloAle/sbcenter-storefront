"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi">
        Entra a far parte di SB Center!
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Crea il tuo account personale per avere vantaggi esclusivi.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nome"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Cognome"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Telefono" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Creando un account, accetterai la{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          ed i{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Termini di utilizzo
          </LocalizedClientLink>{" "}
          di SB Center.
        </span>
        <SubmitButton className="w-full mt-6">Registrati</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Hai già un account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Accedi
        </button>
        .
      </span>
    </div>
  )
}

export default Register
