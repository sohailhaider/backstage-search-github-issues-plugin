import { GitHubIssueApi, GitHubIssueApiEntity } from '../types/api';
import fetch from 'cross-fetch';

export class GitHubIssuesClient implements GitHubIssueApi {
  async getIssues(repoName: String): Promise<GitHubIssueApiEntity[]> {
    let response = await fetch(`https://api.github.com/repos/${repoName}/issues`);
    return response.json();
  }
}
