# Security Policy

## Supported versions

This repository is maintained as a legacy educational and portfolio project. No
released version is currently supported for security-sensitive production use.

| Version | Supported |
| --- | --- |
| `master` | Best-effort fixes |
| Published releases | No |

## Reporting a vulnerability

Use GitHub's **Report a vulnerability** feature on the repository's Security tab
when available. If private reporting is not enabled, contact the repository owner
privately through their GitHub profile. Do not include credentials, personal data,
or an exploit in a public issue.

Please include the affected component, impact, reproduction steps, and any
suggested mitigation. You should receive an acknowledgement within 14 days.

## Deployment warning

The application depends on an old ASP.NET MVC/Serenity stack and legacy browser
libraries. Before any public deployment:

1. Upgrade or replace unsupported dependencies.
2. Rotate every credential that has ever appeared in repository history.
3. Use deployment-time secrets and HTTPS-only cookies.
4. Add automated authentication, authorization, upload, and migration tests.
5. Perform a current dependency and application security review.
