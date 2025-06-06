# Changesets

This repo uses [changesets](https://github.com/changesets/changesets) to manage versioning and publishing of the `@sfpro/sdk` package.

## Creating a Changeset

When you make changes to the SDK that should be released, create a changeset:

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages have changed (only @sfpro/sdk is published)
2. Choose the version bump type (major, minor, patch)
3. Write a summary of the changes for the changelog

## Release Process

Releases happen automatically via GitHub Actions when changes are pushed to the `main` branch:

1. When changesets are pushed to main, the action creates/updates a "Version Packages" PR
2. This PR updates package versions and changelogs based on the changesets
3. When the PR is merged, packages are automatically published to NPM

## Manual Release

If needed, you can also version and publish manually:

```bash
# Version packages based on changesets
pnpm changeset:version

# Build and publish to NPM
pnpm changeset:publish
```

## NPM Token

The GitHub Actions workflow requires an `NPM_TOKEN` secret to be set in the repository settings for publishing.