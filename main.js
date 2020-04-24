const { getInput } = require('@actions/core');
const { GitHub } = require('@actions/github');

const TOKEN = getInput('GITHUB_TOKEN');
const api = new GitHub(TOKEN);
api.issues.createComment({ body: 'doing the testing thing now', issue_number: 1, owner: 'mgwalker', repo: '_stale-test' })
