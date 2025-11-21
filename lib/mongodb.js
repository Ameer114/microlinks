import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // Use global for dev to prevent multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)  // <-- remove options
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // Production
  client = new MongoClient(uri)  // <-- remove options
  clientPromise = client.connect()
}

export default clientPromise
