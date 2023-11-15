import { FastifyInstance } from 'fastify'
// import { loginSchema, signupSchema } from '../schema'
import * as controllers from '../controllers'

async function userRouter(fastify: FastifyInstance) {
  // fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'GET',
    url: '/',
    // schema: loginSchema,
    handler: controllers.listUsers,
  })

  fastify.route({
    method: 'POST',
    url: '/',
    // schema: signupSchema,
    handler: controllers.addUser,
  })

  fastify.route({
    method: 'GET',
    url: '/:id',
    // schema: get one user,
    handler: controllers.getUser,
  }) 

  fastify.route({
    method: 'PUT',
    url: '/:id',
    // schema: get one user,
    handler: controllers.UpdateUser,
  }) 

}

export default userRouter