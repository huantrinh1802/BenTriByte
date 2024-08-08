import type { PageServerLoad } from './$types';
import { request, gql } from 'graphql-request';
import { GH_TOKEN } from '$env/static/private';
type StorageRepo = {
  repository: {
    object: {
      entries: Array<{
        name: string;
        type: string;
        object: {
          byteSize: number;
          text: string;
        };
      }>;
    };
  };
};
export const load = (async () => {
  const query = gql`
    query RepoFiles($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        object(expression: "main:bentribyte/resumes") {
          ... on Tree {
            entries {
              name
              type
              object {
                ... on Blob {
                  byteSize
                  text
                }
              }
            }
          }
        }
      }
    }
  `;
  const repositories: StorageRepo = await request(
    'https://api.github.com/graphql',
    query,
    { owner: 'huantrinh1802', name: 'file_storage' },
    { Authorization: `Bearer ${GH_TOKEN}` }
  );
  return {
    resume: JSON.parse(
      repositories.repository.object.entries.find((entry) => {
        if (entry.name == 'ben_resume.json') {
          return entry;
        }
      }).object.text
    ),
  };
}) satisfies PageServerLoad;
