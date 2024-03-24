"use client"

import { Customer } from "@medusajs/medusa"
import React, { useEffect } from "react"

import Input from "@modules/common/components/input"

import AccountInfo from "../account-info"
import { updateCustomerPassword } from "@modules/account/actions"
import { useFormState } from "react-dom"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [successState, setSuccessState] = React.useState(false)

  const [state, formAction] = useFormState(updateCustomerPassword, {
    customer,
    success: false,
    error: false,
  })

  const clearState = () => {
    setSuccessState(false)
  }

  useEffect(() => {
    setSuccessState(state.success)
  }, [state])

  return (
    <form action={formAction} onReset={() => clearState()} className="w-full text-semibold">
      <AccountInfo
        label="Password"
        currentInfo={
          <span>La password è nascosta per ragioni di sicurezza</span>
        }
        isSuccess={successState}
        isError={!!state.error}
        errorMessage={state.error}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Vecchia password"
            name="old_password"
            required
            type="password"
          />
          <Input
            label="Nuova password"
            type="password"
            name="new_password"
            required
          />
          <Input
            label="Conferma password"
            type="password"
            name="confirm_password"
            required
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileName
