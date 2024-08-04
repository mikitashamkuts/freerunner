# Docplanner Tech Task

This is my [Docplanner Task](https://drive.google.com/file/d/1b0kTnUdeRzSaSsTrISawP4Px0ANRbCjN/view?usp=sharing), which itself is [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli), enjected with several friquently used tools and integrated with [**ide.frostminded**](https://ide.frostminded.com).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install JS Dependencies

First, you need to install the dependencies:

```bash
# using Yarn
yarn install
```

## Step 2: (macOS only) Install Native iOS Pod Dependencies

First, you need to install the dependencies:

```bash
# change directory to ios
cd ios
# initialize pod instalation
pod install
```

## Step 3: Create .env file in the root directory

The required enironment variables to your .env file are listed in [env.d.ts](./env.d.ts), feel free to take the reference from there and fill the values with empty strings if you wish, alternatively request the file content from the repository maintainer.

### Extra Not Mandatory Step:

Add your auth.token and defaults.org to sentry.properties files of ios and android folders to use Sentry Service.

## Step 4: Start the Metro Server

Second, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

## Step 5: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using Yarn
yarn android
```

### in case android building issue of sdk context:

in android folder create a file with the name: local.properties
in that file put the following content: sdk.dir = /Users/userName/Library/Android/sdk
substitute userName with your's PC profile name

then

```bash
# using Yarn
yarn android
```

### For iOS

```bash
# using Yarn
yarn ios
```

### in case ios building issue of hermes & pod context:

execute the following list of commands

```
cd ios
rm -rf ~/Library/Caches/CocoaPods
rm -rf ~/Library/Developer/Xcode/DerivedData/*
rm -rf Pods
rm -rf Podfile.lock
rm -rf Pods.xcodeproj
rm -rf .xcode.env.local
rm -rf .xcode.env
echo export NODE_BINARY=$(command -v node) > .xcode.env
pod deintegrate
pod setup
pod install
```

then

```bash
# using Yarn
yarn ios
```

### in case ios building issue of haptic feedback context:

reinreintegrate the ios native package using Manual Setup Guide - iOS from the link bellow, proviously removing the old linked module from 'Libraries' and from 'Targets-> Build Phases -> Link Binary with Libraries'
https://www.npmjs.com/package/react-native-haptic-feedback

In case any other issue, please, feel free to refer it to the repository maintainer.

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 6: Install Visual Studio Code Extensions (if applicable)

Navigate to Extension Marketplace and check if you have all the recommended extensions installed.

# Available Scripts

- **`yarn start`**: Resets the Watchman server and starts the React Native development server with cache reset.
- **`yarn start-debug`**: Resets the Watchman server and starts the React Native development server with cache reset and experimental debugger enabled.
- **`yarn android`**: Builds and runs the app on an Android device or emulator.
- **`yarn ios`**: Builds and runs the app on an iOS device or simulator.
- **`yarn lint`**: Runs ESLint to find and fix linting issues.
- **`yarn test`**: Runs the Jest test suite to ensure code correctness. Ignores transformations for specific node_modules as configured.
- **`yarn generate`**: Uses Plop to generate code templates and formats the generated files using Prettier.
- **`yarn install-npm-packages`**: Installs all npm packages listed in the package.json file.
- **`yarn watchman-reset`**: Shuts down the Watchman server.
- **`yarn link-assets`**: Uses react-native-asset to link assets.
- **`yarn type-check`**: Runs TypeScript compiler checks to ensure type safety without emitting output files.
- **`yarn macos:open:ios`**: Opens the iOS project workspace in Xcode.
- **`yarn macos:open:android`**: Opens the Android project in Android Studio.
- **`yarn pod-install`**: Installs CocoaPods dependencies for the iOS project.

## Detailed Descriptions

- **`yarn start`**:

  - **Purpose**: Starts the development server with a clean cache.
  - **Usage**: Useful for ensuring no stale cache issues affect development.

- **`yarn start-debug`**:

  - **Purpose**: Starts the development server with a clean cache and enables experimental debugging features.
  - **Usage**: Ideal for debugging complex issues with enhanced debug capabilities.

- **`yarn android`**:

  - **Purpose**: Compiles and runs the React Native app on an Android emulator or connected device.
  - **Usage**: Used for testing and debugging the app on Android platforms.

- **`yarn ios`**:

  - **Purpose**: Compiles and runs the React Native app on an iOS simulator or connected device.
  - **Usage**: Used for testing and debugging the app on iOS platforms.

- **`yarn lint`**:

  - **Purpose**: Analyzes the codebase for potential errors and stylistic issues.
  - **Usage**: Ensures code quality and consistency across the codebase.

- **`yarn test`**:

  - **Purpose**: Runs all unit tests using Jest to verify the correctness of the codebase.
  - **Usage**: Ensures the application behaves as expected and helps catch regressions.

- **`yarn generate`**:

  - **Purpose**: Generates code templates using Plop and formats them with Prettier.
  - **Usage**: Speeds up development by automating repetitive coding tasks.

- **`yarn install-npm-packages`**:

  - **Purpose**: Installs all dependencies listed in the package.json file.
  - **Usage**: Ensures all necessary packages are installed for the project to run.

- **`yarn watchman-reset`**:

  - **Purpose**: Resets the Watchman server.
  - **Usage**: Useful for resolving issues related to file watching in React Native projects.

- **`yarn link-assets`**:

  - **Purpose**: Links assets using the react-native-asset command.
  - **Usage**: Ensures that assets like images and fonts are properly linked in the project.

- **`yarn type-check`**:

  - **Purpose**: Runs the TypeScript compiler to check for type errors without emitting output files.
  - **Usage**: Ensures type safety across the codebase.

- **`yarn macos:open:ios`**:

  - **Purpose**: Opens the iOS project workspace in Xcode.
  - **Usage**: Convenient shortcut for opening the project in the appropriate development environment on macOS.

- **`yarn macos:open:android`**:

  - **Purpose**: Opens the Android project in Android Studio.
  - **Usage**: Convenient shortcut for opening the project in the appropriate development environment on macOS.

- **`yarn pod-install`**:

  - **Purpose**: Installs CocoaPods dependencies for the iOS project.
  - **Usage**: Ensures that all native iOS dependencies are correctly installed. Run this command whenever the iOS dependencies in the `Podfile` are changed.

- **`yarn postinstall`**:

  - **Purpose**: The script is executed automatically after the dependencies are installed via `yarn install`. This script is often used to run additional setup steps that are required for the project to function correctly, such as running custom build scripts, linking native dependencies, or performing clean-up tasks.
  - **Usage**: This script runs automatically after `yarn install`. No manual intervention is typically required.

# Debugging

[How to debug state with logger and experemental debugger](https://reactnative.dev/docs/0.73/debugging)

# Phisical Device Engaging

[Instruction](https://reactnative.dev/docs/0.73/running-on-device?platform=ios)

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More About This Project

This React Native application designed with modern technologies and best practices to ensure a high-performance, scalable, and maintainable codebase. This README provides an overview of how the Model-View-ViewModel (MVVM) architecture is implemented in this project using various technologies.

## MVVM Architecture Overview

MVVM (Model-View-ViewModel) is an architectural pattern used to separate the development of the graphical user interface from the business logic or back-end logic. This separation of concerns allows for more modular, testable, and maintainable code. In the context of React Native, the MVVM architecture can be implemented using a combination of state management, hooks, and other supporting libraries.

### Model

The **Model** represents the data and business logic of the application. It is responsible for retrieving data from APIs, databases, or other sources, and performing any necessary transformations or calculations.

- **State Management**: The state of the application is managed using **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**. Asynchronous operations and side effects, such as API calls, are handled using **[Redux-Saga](https://redux-saga.js.org/)**.
- **Network Requests**: Data is fetched from APIs using **[Axios](https://axios-http.com/)**.

### ViewModel

The **ViewModel** acts as an intermediary between the View and the Model. It retrieves data from the Model and prepares it for display in the View. It also handles user interactions and updates the Model accordingly.

- **React Hooks**: The ViewModel is implemented using **[React Hooks](https://reactjs.org/docs/hooks-intro.html)**. Hooks like `useSelector` and `useDispatch` from **[React-Redux](https://react-redux.js.org/)** are used to connect the React components (View) to the Redux store (Model).
- **State Persistence**: The application state is persisted across sessions using **[redux-persist](https://github.com/rt2zz/redux-persist)**.

### View

The **View** is the UI of the application. It displays the data and interacts with the user.

- **React Native**: The UI is built using **[React Native](https://reactnative.dev/)**, which allows for building cross-platform mobile applications.
- **Navigation**: Navigation between different screens is handled using **[@react-navigation/native](https://reactnavigation.org/)**, **[@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)**, and **[@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)**.

# Extended Project Configuration List

### State Management

#### @reduxjs/toolkit and Redux-Saga

**[@reduxjs/toolkit](https://redux-toolkit.js.org/)** is used for managing application state, providing a set of tools to simplify the setup of Redux. It helps in writing more readable and maintainable code with less boilerplate.

**[Redux-Saga](https://redux-saga.js.org/)** is used for handling complex asynchronous flows in a more manageable way by leveraging ES6 generators. This choice allows for more predictable and easier-to-test side effects compared to other solutions like `redux-thunk`.

**Tradeoff:** While Redux-Saga introduces an additional learning curve due to the usage of generators, it provides better control over complex asynchronous logic.

### Navigation

#### @react-navigation

**[@react-navigation/native](https://reactnavigation.org/)**, **[@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)**, and **[@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)** are used for navigating between screens. This library is highly customizable and provides a smooth user experience with features like stack navigation, tab navigation, and deep linking.

**Tradeoff:** Customizing navigation transitions and handling nested navigators can sometimes be challenging, but the benefits of a robust navigation system outweigh these challenges.

### Network Requests

#### Axios

**[Axios](https://axios-http.com/)** is used for making network requests due to its simplicity and ease of use compared to the native `fetch` API. It supports request and response interceptors, making it easier to handle errors and perform actions before requests or after responses.

**Tradeoff:** Although Axios adds an extra dependency, its features and ease of use make it a worthwhile inclusion.

### Localization

#### i18next and react-i18next

**[i18next](https://www.i18next.com/)** and **[react-i18next](https://react.i18next.com/)** are used for internationalization, allowing the application to support multiple languages and providing a seamless experience for global users.

**Tradeoff:** Implementing and managing translations can be time-consuming, but it's essential for reaching a wider audience.

### Animation

#### react-native-reanimated and react-native-animatable

**[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)** and **[react-native-animatable](https://github.com/oblador/react-native-animatable)** are used for creating animations. These libraries offer performant and easy-to-use APIs for adding animations to the app, enhancing the user experience.

**Tradeoff:** There is a learning curve associated with mastering these libraries, but the ability to create smooth and performant animations makes them valuable tools.

### State Persistence

#### redux-persist

**[redux-persist](https://github.com/rt2zz/redux-persist)** is used to persist the Redux state across app launches. This ensures that the user's data and app state are saved and restored, providing a seamless user experience.

**Tradeoff:** It adds complexity in managing the persistence logic, but the benefit of maintaining state across sessions is significant.

### Haptic Feedback

#### react-native-haptic-feedback

**[react-native-haptic-feedback](https://github.com/mkuczera/react-native-haptic-feedback)** is used to provide haptic feedback, enhancing user interaction by providing tactile responses to certain actions.

**Tradeoff:** This adds a dependency, but improves the overall user experience by making interactions more engaging.

### TypeScript

**[TypeScript](https://www.typescriptlang.org/)** is used to add static typing to the JavaScript code, helping to catch errors early in the development process and improving code readability and maintainability.

**Tradeoff:** There is an initial time investment in setting up and learning TypeScript, but the benefits of type safety and improved developer experience are substantial.

### Code Quality Tools

#### ESLint, Prettier, and Husky

**[ESLint](https://eslint.org/)** is used for linting the code to maintain consistent code quality and style.

**[Prettier](https://prettier.io/)** is used for code formatting, ensuring that the codebase remains clean and readable.

**[Husky](https://typicode.github.io/husky/)** is used for running pre-commit hooks to enforce code quality checks before committing changes.

**Tradeoff:** Setting up these tools requires initial configuration, but they significantly improve code quality and team collaboration.

### Testing

#### Jest

**[Jest](https://jestjs.io/)** is used for testing the application. It provides a comprehensive testing framework with a focus on simplicity and support for testing React components.

**Tradeoff:** Writing and maintaining tests require additional effort, but they are crucial for ensuring the reliability and stability of the application.

### Environment Variables

#### react-native-dotenv

**[react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)** is used for managing environment variables, allowing the configuration of the application to be adjusted based on the environment (development, production, etc.).

**Tradeoff:** It adds a layer of complexity in managing environment-specific configurations, but it's essential for separating configuration from code.

#### And so on

And many of others listed in [package.json](./package.jsons) tools like image cacher.

# [Folder Structure](#folder-structure)

- [api](#api)
- [components](#components)
- [constants](#constants)
- [design](#design)
- [hooks](#hooks)
- [screens](#screens)
- [store](#store)
- [types](#types)
- [utils](#utils)

### api

Contains all API-related functions and configurations.
Configures the Axios instance and defines API request functions.

### components

Reusable UI components used throughout the app.

- `Text`: Custom text component with theme-based styles.
- `Button`: Custom button component.

### constants

Holds constant values used across the app.

- Contains constants such as `loadingStatusList`, `routes`, etc.

### design

Contains design-related configurations.

- like background color list, etc.

### hooks

Custom hooks to encapsulate and reuse logic.

- like hooks for navigation and typed redux hooks.

### screens

Contains screen components for the app.

- Each screen has its own folder with components and styles specific to that screen.

### store

Redux store configuration and slices.

- `config.ts`: Configures the Redux store with slices and middlewares.
- `slices`: Contains Redux slices for different parts of the app.

### types

TypeScript type definitions used across the app.

- `config.ts`: Centralized types for easy access and management.

### utils

Utility functions used across the app.

- `getFunctionTryCatchWrapped.ts`: Utility to wrap functions with try-catch for error handling.
- `getNearestMondayWithOffset.ts`: Utility to get the nearest Monday with an offset.

# Design

The UI & UX design is inspired by [Apple Calendar](<https://www.figma.com/design/xdooeZ6MGMYR8aAeQdvD10/Apple-Calendar-%C2%B7-iOS-(Community)?m=auto&t=VHyAb67JJZ2SK46y-6>)

# Agenda Screen Architecture

- The architecture revolves around a configuration object, const config of AgendaScreen:

  The configuration object passed as a prop, contains various properties and methods that control the behavior and appearance of the components.

  Within a consumer component, the configuration object is destructured to extract the needed methods and data.

  By using a configuration object, the components become modular and reusable. The behavior of components can be easily altered by changing the configuration object, without modifying the component's internal logic.

- Separation of Concerns:

  The configuration object helps in separating the logic and data management from the presentation layer. This makes the codebase cleaner and easier to maintain.

- Ease of Testing:

  Components that rely on a configuration object can be easily tested by providing mock configurations. This allows for thorough testing of different scenarios without altering the actual component code.

- Scalability:

  As the application grows, new configurations can be added without affecting existing components. This makes the system scalable and easier to extend.

Conclusion:

The architecture of the Agenda Screen leverages the principles of Component-Based Architecture in order to create a flexible, scalable, and maintainable system. This approach aligns with best practices in software development and provides a robust foundation for building complex user interfaces.

For a reference: [Component-Based Architecture](https://en.wikipedia.org/wiki/Component-based_software_engineering)

Thank you for reading it so far to here,

I am looking forward to a chance to join your Product Team!
