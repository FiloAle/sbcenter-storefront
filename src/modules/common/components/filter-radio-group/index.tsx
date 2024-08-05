import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"
import { ChangeEvent } from "react"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex gap-x-3 flex-col gap-y-3">
      <Text className="txt-compact-small-plus text-ui-fg-muted">{title}</Text>
      <RadioGroup>
        {items?.map((i) => (
          <div
            key={i.value}
            className={clx("flex gap-x-2 items-center font-sans", {
              "ml-[-1.75rem]": i.value === value,
            })}
          >
            {i.value === value && <EllipseMiniSolid />}
            <RadioGroup.Item
              checked={i.value === value}
              onClick={(e) =>
                handleChange(
                  e as unknown as ChangeEvent<HTMLButtonElement>,
                  i.value
                )
              }
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <Label
              placeholder={i.label}
              htmlFor={i.value}
              className={clx(
                "!text-sm !transform-none text-ui-fg-subtle hover:text-ui-fg-base hover:cursor-pointer transition-all duration-300",
                {
                  "text-ui-fg-base": i.value === value,
                }
              )}
            >
              {i.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
