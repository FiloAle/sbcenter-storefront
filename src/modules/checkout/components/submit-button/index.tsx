"use client"

import { Button, clx } from "@medusajs/ui"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      size="large"
      className={clx("rounded-full bg-black text-white shadow-md hover:bg-slate-900 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-slate-50", className)}
      type="submit"
      isLoading={pending}
      variant={variant}
    >
      {children}
    </Button>
  )
}
