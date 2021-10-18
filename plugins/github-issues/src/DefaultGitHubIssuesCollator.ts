import { IndexableDocument, DocumentCollator } from '@backstage/search-common';
import { Config } from '@backstage/config';

import { CatalogEntitiesRequest } from '@backstage/catalog-client';
import { Logger } from 'winston';
import { GitHubIssueApi, GitHubIssueApiEntity } from './types/api';
import { GitHubIssuesClient } from './utilities/GitHubIssuesClient';

export interface GitHubIssueEntityDocument extends IndexableDocument {
  user: string;
  image: string;
}

export class DefaultGitHubIssuesCollator implements DocumentCollator {
  protected filter?: CatalogEntitiesRequest['filter'];
  public readonly type: string = 'github-issue';
  protected readonly githubIssuesClient: GitHubIssueApi;
  protected logger: Logger;

  static fromConfig(
    _config: Config,
    options: {
      filter?: CatalogEntitiesRequest['filter']; //just keeping the filters
      logger: Logger;
    },
  ) {
    return new DefaultGitHubIssuesCollator({
      ...options,
    });
  }

  constructor({
    filter,
    logger,
    githubIssuesClient,
  }: {
    filter?: CatalogEntitiesRequest['filter']; //just keeping the filters
    logger: Logger;
    githubIssuesClient?: GitHubIssueApi;
  }) {
    this.filter = filter;
    this.logger = logger;
    this.githubIssuesClient = githubIssuesClient || new GitHubIssuesClient();
  }

  async execute() {
    // this.logger.warn(JSON.stringify(await this.githubIssuesClient.getIssues('backstage')));
    return (await this.githubIssuesClient.getIssues('backstage/backstage')).map(
      (ghIssue: GitHubIssueApiEntity): GitHubIssueEntityDocument => {
        return {
          location: ghIssue.html_url,
          text: ghIssue.body,
          title: ghIssue.title,
          user: ghIssue.user.login,
          image: ghIssue.user.avatar_url,
        };
      },
    );
  }
}
