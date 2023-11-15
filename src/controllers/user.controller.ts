import { FastifyReply, FastifyRequest } from "fastify"
import { IUser } from "interfaces"

const staticUsers: IUser[] = [
  {
    id: 1,
    name: 'Joyce Byers'
  },
  {
    id: 2,
    name: 'Jimmi Hopper'
  },
  {
    id: 3,
    name: 'Mike Wheeler'
  },
  {
    id: 4,
    name: 'Dustin Henderson'
  },
  {
    id: 5,
    name: 'Lucas Sinclair'
  }
]

export const listUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  console.log('listUsers')
  Promise.resolve(staticUsers)
  .then((users) => {
    reply.send({ data: users })
  })
}

export const addUser = async (request: FastifyRequest, reply: FastifyReply) => {
  // TODO: Add user
  console.log('add one user')
  Promise.resolve(staticUsers).then(
    staticUsers => {
      const body = request.body
      const name = body ["name"]
      const lastUser = staticUsers[staticUsers.length - 1];

      // Récupérez la dernière valeur de l'id
      const lastUserId = lastUser.id;
      const newUser: IUser = {
        id: lastUserId+1,
        name: name,
      };
      staticUsers.push(newUser)
      reply.send({ data: staticUsers});
    }
  )
  
}

export const getUser = async (request: FastifyRequest, reply: FastifyReply) => {
  // TODO: Return a user based on its id 
  // Access the 'id' parameter from the URL
  console.log('get one user')
  
  Promise.resolve(staticUsers).then(
    staticUsers => {
    const userId = parseInt(request.params["id"]); 
     // Check if the userId exists in the staticUsers array
    const user = staticUsers.find((user) => user.id === userId);
    if (user) {
      // If user exists, send user details
      reply.send(user);
      } 
    else {
        reply.send("error 404")
      }
    }
  )
}

export const UpdateUser = async (request: FastifyRequest, reply: FastifyReply) => {
  // TODO: Return a user based on its id 
  // Access the 'id' parameter from the URL
  console.log('update the score of one user')
  
  Promise.resolve(staticUsers).then(
    staticUsers => {
    const userId = parseInt(request.params["id"]); 
    const body = request.body
    const score = parseInt(body["score"])
    // Check if the userId exists in the staticUsers array
    const user = staticUsers.find((user) => user.id === userId);
    if (user) {
      // If user exists, update it's score
      user.score = score
      reply.send(user);
      } 
    else {
        reply.send("error 403")
      }
    }
  )
}
