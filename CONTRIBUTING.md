# Contribution Guidelines

Thank you for your interest in contributing to our game! We welcome contributions from the community to help make the game even better. Please take a moment to review the guidelines below before getting started.

## Getting Started

To contribute to the game, you'll need to have the following installed on your machine:

- [Node.js](https://nodejs.org) (v18.19.0)
- [MySQL](https://www.mysql.com) (v8.0 or higher)

## Setting Up the Development Environment

1. Clone the repository:

    ```bash
    git clone https://github.com/geraldohomero/WorstGameEver.git
    ```

2. Install the dependencies:

    ```bash
    cd WorstGameEver
    npm install
    ```

3. Set up the MySQL database:

    - Create a new MySQL database.
    - Update the database configuration in `config.js` with your MySQL credentials.

4. Start the development server:

    ```bash
    npm run dev
    ```

## Contributing

We use the following branching strategy:

- `main` branch: Represents the latest stable release.
- `develop` branch: Represents the latest development version 
>**Still to be created**.

To contribute to the game, follow these steps:

1. Create a new branch from the `develop` branch:

    ```bash
    git checkout develop
    git checkout -b feature/your-feature-name
    ```

2. Make your changes and commit them:

    ```bash
    git add .
    git commit -m "Add your commit message here"
    ```

3. Push your branch to the remote repository:

    ```bash
    git push origin feature/your-feature-name
    ```

4. Open a pull request on GitHub and provide a detailed description of your changes.

## Code Style

We follow the [JavaScript Standard Style](https://standardjs.com) for our codebase. Please make sure your code adheres to this style.

## Testing

We will have a suite of automated tests in place to ensure the stability of the game. Before submitting a pull request, please make sure that your code passes all tests.

## License

By contributing to the game, you agree that your contributions will be licensed under its [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Code of Conduct

We expect all contributors to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Questions

If you have any questions, please open an issue on GitHub and we will get back to you as soon as possible.

## Acknowledgements

- [Contributor Covenant](https://www.contributor-covenant.org) for the Code of Conduct
- [GitHub](https://github.com) for the [Open Source Guide](https://opensource.guide)
- [PurpleBooth](https://gist.github.com/PurpleBooth) for the [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
