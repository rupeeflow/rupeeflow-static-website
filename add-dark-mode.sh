#!/bin/bash

# Script to add dark mode classes to all components
# This adds dark: variants to common Tailwind classes

find src -name "*.tsx" -type f -exec sed -i '' \
  -e 's/className="\([^"]*\)bg-white\([^"]*\)"/className="\1bg-white dark:bg-gray-900\2"/g' \
  -e 's/className="\([^"]*\)text-gray-900\([^"]*\)"/className="\1text-gray-900 dark:text-gray-100\2"/g' \
  -e 's/className="\([^"]*\)text-gray-800\([^"]*\)"/className="\1text-gray-800 dark:text-gray-200\2"/g' \
  -e 's/className="\([^"]*\)text-gray-700\([^"]*\)"/className="\1text-gray-700 dark:text-gray-300\2"/g' \
  -e 's/className="\([^"]*\)text-gray-600\([^"]*\)"/className="\1text-gray-600 dark:text-gray-400\2"/g' \
  -e 's/className="\([^"]*\)border-gray-200\([^"]*\)"/className="\1border-gray-200 dark:border-gray-700\2"/g' \
  -e 's/className="\([^"]*\)border-gray-300\([^"]*\)"/className="\1border-gray-300 dark:border-gray-600\2"/g' \
  {} \;

echo "Dark mode classes added to all components!"
