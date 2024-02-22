import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const avatarUser = defineStyle({
    isRound: true,
    variant: "solid",
    size: "1.5rem",
})

export const IconButton = defineStyleConfig({
  variants: { avatarUser },
})
