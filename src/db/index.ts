import type { Knex } from 'knex'
import knex from 'knex'
import 'dotenv/config'

const baseClient: Knex.Config<any> = {
  client: 'mysql2',
  pool: {
    min: 0,
    max: 4,
  },
}
const readerClient = knex({
  connection: {
    host: process.env.DB_READER_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'break_up',
  },
  ...baseClient,
})


const writerClient = knex({
  connection: {
    host: process.env.DB_WRITER_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'break_up',
  },
  ...baseClient,
})

export {
  readerClient,
  writerClient,
}
