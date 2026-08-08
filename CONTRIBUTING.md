# Contributing

Thank you for helping improve Graduate Thesis Manager. This is a legacy project,
so prefer small, reviewable changes that preserve compatibility unless an issue
explicitly proposes a broader modernization.

## Development workflow

1. Open an issue for substantial behavior or schema changes.
2. Create a focused branch from the default branch.
3. Restore dependencies and build the solution in Release configuration.
4. Add or update tests when a test harness exists for the affected area.
5. Update documentation when setup, configuration, or behavior changes.
6. Open a pull request using the repository template.

## Pull-request checklist

- No credentials, personal data, uploads, email files, or local database files
  are included.
- Database changes use a new FluentMigrator migration and have a safe rollback.
- Endpoints enforce authentication, authorization, ownership, and input
  validation as appropriate.
- Generated TypeScript artifacts are kept consistent with their C# sources.
- The Release build passes locally.

## Style

Follow `.editorconfig` and the conventions in the surrounding module. Avoid
unrelated formatting changes in vendored or generated legacy assets.

## Reporting security issues

Do not open a public issue for a vulnerability. Follow the private reporting
instructions in [SECURITY.md](SECURITY.md).
