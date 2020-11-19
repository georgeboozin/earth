
#!/bin/bash
set -o errexit

printf "\n\e[92m[*] Install npm primary packages\e[0m\n"
npm ci --no-progress --no-optional --ignore-scripts

printf "\n\e[92m[*] Install deps packages and create symlink for cross-deps packages\e[0m\n"
npm run bootstrap
