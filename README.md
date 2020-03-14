# earth

```
# Install npm primary packages
npm install --ignore-scripts --no-optional

# Install deps packages and create symlink for cross-deps packages
npm run bootstrap
```
# Commit lint
commit messages must looks like:

`feat: Add modal to main screen`

`fix: Add custom preset and refactored disabled prese`

`refactor(impulse): Change action creator of root subject`

`feat(synapse): Change main screen loader`

### Message structure:
`type(scope?): subject`

### Rules

type: `['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'build', 'release']`

scope: `impulse, synapse` - package name

subject: `sentence-case`
