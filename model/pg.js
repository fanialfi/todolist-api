import pkg from "pg";
import "dotenv/config";

/*
 * postgreSQL client
 */

export default async function pgConnection(query, data) {
  return new Promise(async (resolve, reject) => {
    const client = new pkg.Client();
    try {
      await client.connect();
      const result = await client.query(query, data);
      resolve(result);
    } catch (error) {
      reject(error.message);
    } finally {
      client.end();
    }
  });
}
