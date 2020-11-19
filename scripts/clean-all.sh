#!/bin/bash
set -o errexit

printf "\n\e[92m[*] Clean all builds\e[0m\n"
npm run clean:builds

printf "\n\e[92m[*] Remove the node_modules directory from all packages\e[0m\n"
npm run clean

printf "\n\e[92m[*] Clean root node_modules\e[0m\n"
rm -rf ./node_modules

printf "\n\e[92m[*] Clean leaf package-lock\e[0m\n"
npm run clean:leaf-package-lock