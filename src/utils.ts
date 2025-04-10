import { Client } from "pg";
import * as dotenv from "dotenv";
dotenv.config();

export async function getClient() {
  const client = new Client({ connectionString: process.env.PG_URL });
  await client.connect();
  return client;
}
