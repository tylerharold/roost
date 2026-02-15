import vine from '@vinejs/vine'

export const installValidator = vine.compile(
  vine.object({
    server: vine.object({
      name: vine
        .string()
        .minLength(1)
        .maxLength(32),
      description: vine
        .string()
        .maxLength(255)
        .optional(),
      icon: vine
        .file({
          size: '5mb',
          extnames: ['png', 'jpg', 'jpeg', 'gif'],
        })
        .optional(),
    }),
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
