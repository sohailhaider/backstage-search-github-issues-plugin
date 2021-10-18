/*
 * Copyright 2021 The Backstage Authors
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

import { Entity, EntityName, Location } from '@backstage/catalog-model';

/** @public */
export const CATALOG_FILTER_EXISTS = Symbol('CATALOG_FILTER_EXISTS');

/** @public */
export type CatalogEntitiesRequest = {
  filter?:
    | Record<string, string | symbol | (string | symbol)[]>[]
    | Record<string, string | symbol | (string | symbol)[]>
    | undefined;
  fields?: string[] | undefined;
};

/** @public */
export type CatalogEntityAncestorsRequest = {
  entityRef: string;
};

/** @public */
export type CatalogEntityAncestorsResponse = {
  root: EntityName;
  items: { entity: Entity; parents: EntityName[] }[];
};

/** @public */
export type CatalogListResponse<T> = {
  items: T[];
};

/** @public */
export type CatalogRequestOptions = {
  token?: string;
};

/** @public */
export interface CatalogApi {
  // Entities
  getEntities(
    request?: CatalogEntitiesRequest,
    options?: CatalogRequestOptions,
  ): Promise<CatalogListResponse<Entity>>;
  getEntityAncestors(
    request: CatalogEntityAncestorsRequest,
    options?: CatalogRequestOptions,
  ): Promise<CatalogEntityAncestorsResponse>;
  getEntityByName(
    name: EntityName,
    options?: CatalogRequestOptions,
  ): Promise<Entity | undefined>;
  removeEntityByUid(
    uid: string,
    options?: CatalogRequestOptions,
  ): Promise<void>;
  refreshEntity(
    entityRef: string,
    options?: CatalogRequestOptions,
  ): Promise<void>;

  // Locations
  getLocationById(
    id: string,
    options?: CatalogRequestOptions,
  ): Promise<Location | undefined>;
  getOriginLocationByEntity(
    entity: Entity,
    options?: CatalogRequestOptions,
  ): Promise<Location | undefined>;
  getLocationByEntity(
    entity: Entity,
    options?: CatalogRequestOptions,
  ): Promise<Location | undefined>;
  addLocation(
    location: AddLocationRequest,
    options?: CatalogRequestOptions,
  ): Promise<AddLocationResponse>;
  removeLocationById(
    id: string,
    options?: CatalogRequestOptions,
  ): Promise<void>;
}

/** @public */
export type AddLocationRequest = {
  type?: string;
  target: string;
  dryRun?: boolean;
  presence?: 'optional' | 'required';
};

/** @public */
export type AddLocationResponse = {
  location: Location;
  entities: Entity[];
  // Exists is only set in DryRun mode.
  exists?: boolean;
};
