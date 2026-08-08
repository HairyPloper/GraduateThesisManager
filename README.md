# Graduate Thesis Manager

An ASP.NET MVC portal for managing the graduate-thesis workflow—from course and
module administration to thesis publication, student registration, status
tracking, messaging, and reporting.

> [!IMPORTANT]
> This is a legacy educational project originally built in 2018 with Serenity
> 3.7.7 and ASP.NET MVC 5. It is useful as a portfolio and reference project, but
> its dependencies are no longer suitable for an internet-facing production
> deployment without a planned framework and dependency upgrade.

## Features

- Role- and permission-based administration
- Course, module, and lecturer management
- Thesis-pool publishing with document uploads
- Student thesis registration and status tracking
- Internal messaging, Excel export, PDF reporting, and email pickup
- FluentMigrator-based database initialization

## Technology

| Area | Technology |
| --- | --- |
| Server | C#, ASP.NET MVC 5, .NET Framework 4.7.2 |
| UI | Serenity 3.7.7, TypeScript 2.8, Bootstrap 3, jQuery |
| Data | SQL Server, Dapper, FluentMigrator |
| Reports | EPPlus, jsPDF, wkhtmltopdf |

## Repository layout

```text
.
|-- GraduateThesisManager.sln
|-- GraduateThesisManager/
|   `-- GraduateThesisManager.Web/
|       |-- App_Start/       # application startup and migrations
|       |-- Migrations/      # database schema and seed data
|       |-- Modules/         # MVC/Serenity feature modules
|       |-- Imports/         # generated client and MVC typings
|       `-- Scripts/Content/ # legacy front-end assets
`-- .github/                 # CI and contribution templates
```

## Local development

### Prerequisites

- Windows 10 or later
- Visual Studio 2022 with **ASP.NET and web development** and the .NET Framework
  4.7.2 targeting pack
- SQL Server Express LocalDB (installed by the Visual Studio workload)
- Node.js 18 or later
- NuGet CLI, or Visual Studio package restore

### Run the application

1. Clone the repository.
2. Restore NuGet packages:

   ```powershell
   nuget restore GraduateThesisManager.sln
   ```

3. Restore the TypeScript declaration packages:

   ```powershell
   npm ci --prefix GraduateThesisManager/GraduateThesisManager.Web
   ```

4. Open `GraduateThesisManager.sln` in Visual Studio.
5. Set `GraduateThesisManager.Web` as the startup project and run it with IIS
   Express.

The default connection uses `(LocalDB)\MSSQLLocalDB`. On first start, the app
creates `GraduateThesisManagerDB` and applies all migrations. To use another SQL
Server, override the `GraduateThesisManager` connection string locally; never
commit credentials.

The original Serenity seed creates an `admin` account for local bootstrap. Treat
it as a development-only account and change its password immediately after first
login.

## Configuration and runtime data

- Development email is written to `App_Data/Mail` instead of being sent.
- Uploaded files, emails, logs, and local database files under `App_Data` are
  runtime data and are intentionally ignored by Git.
- The release transform disables debug output, uses remote-only error pages, and
  requires secure authentication cookies. Deploy behind HTTPS.
- Keep production connection strings and SMTP credentials in deployment-time
  configuration, not in `Web.config` or `Serenity.CodeGenerator.config`.

## Quality checks

Pull requests are built by GitHub Actions on Windows. The workflow restores both
NuGet and npm dependencies and compiles the solution in Release configuration.

This repository currently has no automated test suite. Adding integration tests
around authentication, message ownership, registrations, and migrations is the
highest-value next engineering step.

## Security status

The repository includes targeted fixes for the most serious issues found during
its cleanup: committed credentials and runtime data, unauthenticated file access,
message batch SQL injection, and cross-user message operations. The dependency
stack is still legacy. Read [SECURITY.md](SECURITY.md) before deploying or
reporting a vulnerability.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow. By
participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Licensed under the [MIT License](LICENSE).
