import vine from '@vinejs/vine'

export const installValidator = vine.compile(
  vine.object({
    server_name: vine
      .string()
      .minLength(1)
      .maxLength(32),
    server_description: vine
      .string()
      .maxLength(255)
      .optional(),
    owner: vine.object({
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
    }),
  })
)
