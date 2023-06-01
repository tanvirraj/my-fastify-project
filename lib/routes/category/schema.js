const S = require('fluent-schema')

const forget = {
  response: {
    201: S.null()
  }
}

// const refresh = {
//   response: {
//     200: S.object().prop('token', S.string().required())
//   }
// }

// const register = {
//   response: {
//     200: S.object().prop('nonce', S.string().required())
//   }
// }

// const verify = {
//   body: S.object()
//     .prop('nonce', S.string().required())
//     .prop(
//       'platform',
//       S.string().enum(['android', 'ios', 'recaptcha', 'test']).required()
//     )
//     .prop('deviceVerificationPayload', S.string().required())
//     .prop('timestamp', S.number()),
//   response: {
//     200: S.object()
//       .prop('refreshToken', S.string().required())
//       .prop('token', S.string().required())
//   }
// }

module.exports = { forget }

// import { z } from 'zod'
// import { buildJsonSchemas } from 'fastify-zod'

// const productInput = {
//   title: z.string(),
//   price: z.number(),
//   content: z.string().optional()
// }

// const productGenerated = {
//   id: z.number(),
//   createdAt: z.string(),
//   updatedAt: z.string()
// }

// const createProductSchema = z.object({
//   ...productInput
// })

// const productResponseSchema = z.object({
//   ...productInput,
//   ...productGenerated
// })

// const productsResponseSchema = z.array(productResponseSchema)

// export type CreateProductInput = z.infer<typeof createProductSchema>

// export const { schemas: productSchemas, $ref } = buildJsonSchemas({
//   createProductSchema,
//   productResponseSchema,
//   productsResponseSchema
// })
