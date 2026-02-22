import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .minLength(2)
      .maxLength(16)
      .alphaNumeric({
        allowDashes: false,
        allowUnderscores: true,
        allowSpaces: false,
      }),
    password: vine
      .string()
      .minLength(8)
      .maxLength(64)
      .regex(/^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+$/),
    role: vine
      .enum(['guest', 'member', 'moderator', 'admin', 'owner'] as const),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    username: vine.string(),
    password: vine.string(),
  })
)
