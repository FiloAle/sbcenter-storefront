"use client"

import React, { useEffect, useState } from "react"
import { PencilSquare as Edit, Trash } from "@medusajs/icons"
import { Button, Heading, Text, clx } from "@medusajs/ui"
import { Address, Region } from "@medusajs/medusa"

import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import {
  deleteCustomerShippingAddress,
  updateCustomerShippingAddress,
} from "@modules/account/actions"
import Spinner from "@modules/common/icons/spinner"
import { useFormState } from "react-dom"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type EditAddressProps = {
  region: Region
  address: Address
  isActive?: boolean
}

const EditAddress: React.FC<EditAddressProps> = ({
  region,
  address,
  isActive = false,
}) => {
  const [removing, setRemoving] = useState(false)
  const [successState, setSuccessState] = useState(false)
  const { state, open, close: closeModal } = useToggleState(false)

  const [formState, formAction] = useFormState(updateCustomerShippingAddress, {
    success: false,
    error: null,
    addressId: address.id,
  })

  const close = () => {
    setSuccessState(false)
    closeModal()
  }

  useEffect(() => {
    if (successState) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successState])

  useEffect(() => {
    if (formState.success) {
      setSuccessState(true)
    }
  }, [formState])

  const removeAddress = async () => {
    setRemoving(true)
    await deleteCustomerShippingAddress(address.id)
    setRemoving(false)
  }

  return (
    <>
      <div
        className={clx(
          "border rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between transition-colors",
          {
            "border-gray-900": isActive,
          }
        )}
      >
        <div className="flex flex-col">
          <Heading className="text-left text-base-semi">
            {address.first_name} {address.last_name}
          </Heading>
          {address.company && (
            <Text className="text-sm text-ui-fg-base">
              {address.company}
            </Text>
          )}
          <Text className="flex flex-col text-left text-base-regular mt-2">
            <span>
              {address.address_1}
              {address.address_2 && <span>, {address.address_2}</span>}
            </span>
            <span>
              {address.postal_code}, {address.city}
              {address.province && ` (${address.province})`}
            </span>
            <span className="uppercase">
              {address.country_code}
            </span>
          </Text>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            className="text-small-regular text-ui-fg-base flex items-center gap-x-2"
            onClick={open}
          >
            <Edit />
            Modifica
          </button>
          <button
            className="text-small-regular text-red-500 hover:text-red-700 flex items-center gap-x-2"
            onClick={removeAddress}
          >
            {removing ? <Spinner /> : <Trash />}
            Rimuovi
          </button>
        </div>
      </div>

      <Modal isOpen={state} close={close}>
        <Modal.Title>
          <Heading className="mb-2">Modifica indirizzo</Heading>
        </Modal.Title>
        <form action={formAction}>
          <Modal.Body>
            <div className="grid grid-cols-1 gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
                <Input
                  label="Nome"
                  name="first_name"
                  required
                  autoComplete="given-name"
                  defaultValue={address.first_name || undefined}
                />
                <Input
                  label="Cognome"
                  name="last_name"
                  required
                  autoComplete="family-name"
                  defaultValue={address.last_name || undefined}
                />
              </div>
              <Input
                label="Indirizzo"
                name="address_1"
                required
                autoComplete="address-line1"
                defaultValue={address.address_1 || undefined}
              />
              <Input
                label="Appartamento, interno, ecc."
                name="address_2"
                autoComplete="address-line2"
                defaultValue={address.address_2 || undefined}
              />
              <div className="grid grid-cols-[144px_1fr] gap-x-2">
                <Input
                  label="CAP"
                  name="postal_code"
                  required
                  autoComplete="postal-code"
                  defaultValue={address.postal_code || undefined}
                />
                <Input
                  label="Città"
                  name="city"
                  required
                  autoComplete="locality"
                  defaultValue={address.city || undefined}
                />
              </div>
              <Input
                label="Provincia"
                name="province"
                required
                autoComplete="address-level1"
                defaultValue={address.province || undefined}
              />
              <Input
                label="Telefono"
                name="phone"
                autoComplete="phone"
                defaultValue={address.phone || undefined}
              />
            </div>
            {formState.error && (
              <div className="text-rose-500 text-small-regular py-2">
                {formState.error}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="flex gap-3 mt-6">
              <Button
                type="reset"
                variant="secondary"
                onClick={close}
                className="h-10"
              >
                Annulla
              </Button>
              <SubmitButton>Salva</SubmitButton>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default EditAddress
