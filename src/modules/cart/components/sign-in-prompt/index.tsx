import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="text-xl">
          Hai già un account?
        </Heading>
        <Text className="text-md text-ui-fg-subtle mt-2">
          Accedi per un'esperienza migliore.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10">
            Accedi
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
