import { createDirectus, graphql } from '@directus/sdk'


export async function load() {
  // GraphQL manier
  const client = createDirectus('https://fdnd.directus.app/').with(graphql())
   let { person } = await client.query(`
    query {
      person(filter: { id: { _eq: "150"}}) {
        id
        custom
        mugshot{
            id
            width
            height
        }
      }
    }
  `)
    const p = person[0];
    const custom = JSON.parse(p.custom);
    const opleidingen = custom["opleidingen"];
  return { person: p, opleidingen }
} 