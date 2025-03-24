import type { LayoutServerLoad } from './$types';
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
  return repositories.repository.object.entries.reduce((current, entry) => {
    if (entry.name == 'ben_resume.json') {
      return { ...current, 'ben-trinh': JSON.parse(entry.object.text) };
    }
    if (entry.name == 'amber_resume.json') {
      return { ...current, 'amber-duong': JSON.parse(entry.object.text) };
    }
  }, {});
}) satisfies LayoutServerLoad;
