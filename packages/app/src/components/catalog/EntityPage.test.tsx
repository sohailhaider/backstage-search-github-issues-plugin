/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ApiProvider, ApiRegistry } from '@backstage/core-app-api';
import { EntityLayout } from '@backstage/plugin-catalog';
import {
  DefaultStarredEntitiesApi,
  EntityProvider,
  starredEntitiesApiRef,
} from '@backstage/plugin-catalog-react';
import { githubActionsApiRef } from '@backstage/plugin-github-actions';
import { MockStorageApi, renderInTestApp } from '@backstage/test-utils';
import React from 'react';
import { cicdContent } from './EntityPage';

describe('EntityPage Test', () => {
  const entity = {
    apiVersion: 'v1',
    kind: 'Component',
    metadata: {
      name: 'ExampleComponent',
      annotations: {
        'github.com/project-slug': 'example/project',
      },
    },
    spec: {
      owner: 'guest',
      type: 'service',
      lifecycle: 'production',
    },
  };

  const mockedApi = {
    listWorkflowRuns: jest.fn().mockResolvedValue([]),
    getWorkflow: jest.fn(),
    getWorkflowRun: jest.fn(),
    reRunWorkflow: jest.fn(),
    listJobsForWorkflowRun: jest.fn(),
    downloadJobLogsForWorkflowRun: jest.fn(),
  } as jest.Mocked<typeof githubActionsApiRef.T>;

  const apis = ApiRegistry.with(githubActionsApiRef, mockedApi).with(
    starredEntitiesApiRef,
    new DefaultStarredEntitiesApi({ storageApi: MockStorageApi.create() }),
  );

  describe('cicdContent', () => {
    it('Should render GitHub Actions View', async () => {
      const rendered = await renderInTestApp(
        <ApiProvider apis={apis}>
          <EntityProvider entity={entity}>
            <EntityLayout>
              <EntityLayout.Route path="/ci-cd" title="CI-CD">
                {cicdContent}
              </EntityLayout.Route>
            </EntityLayout>
          </EntityProvider>
        </ApiProvider>,
      );

      expect(rendered.getByText('ExampleComponent')).toBeInTheDocument();

      await expect(
        rendered.findByText('No Workflow Data'),
      ).resolves.toBeInTheDocument();
      expect(rendered.getByText('Create new Workflow')).toBeInTheDocument();
    });
  });
});
