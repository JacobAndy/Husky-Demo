# Demo Presentation Repository: Git Hooks with npm Husky

This repository serves as a demonstration of how to utilize Git hooks with npm Husky to automate tasks and enforce code quality standards in your projects.

## Purpose

The purpose of this repository is to showcase how Git hooks, managed by npm Husky, can enhance your development workflow by automating tasks such as testing, linting, and formatting code. By setting up Git hooks locally, you can ensure that certain checks are run automatically before committing or pushing code, thereby improving code quality and preventing bad commits.

## Features

This repository is set up to handle the following checks using Git hooks:

- **Branch Protection Locally**: Ensure that certain branches are protected locally, preventing accidental changes or pushes to critical branches.
- **Test Coverage and Passing Tests**: Automatically run tests and check test coverage before allowing code to be committed.
- **Linting and Formatting**: Enforce coding standards by running linting and code formatting checks on all staged files.

## Getting Started

To get started with this demo repository, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Configure Git hooks using npm Husky. See [this guide](https://dev.to/maithanhdanh/configuration-for-husky-pre-commit-1fo5) for reference.
4. Start making changes to the codebase and observe how Git hooks enforce the configured checks before allowing commits or pushes.

## References

- [Configuration for Husky Pre-Commit](https://dev.to/maithanhdanh/configuration-for-husky-pre-commit-1fo5): Reference guide for setting up pre-commit hooks with npm Husky.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or new features to add to this demo repository, feel free to open a pull request.

## License

This demo repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
