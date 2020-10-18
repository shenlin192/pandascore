<h1 align="center">PANDASCORE</h1>

<h5 align="center">A REAL TIME ESPORT DATA MONITORING APPLICATION</h5>

## Overview

The react application mainly contains two functionalities:

- A scoreboard of a League of Legends game data displaying each team stats in realtime,
- A graph represents the evolution of each team's golds during the game.

If the WebSocket service is down, the application will try to reconnect periodically every 1 second.

The application is **responsive**, and it's suitable on mobile, iPad, and desktop.

## Usage

Clone this repo via git

```sh
    git clone https://github.com/shenlin192/pandascore.git
```

Start the application

```sh
    cd pandascore
    yarn && yarn start
```

The server-side application can be found in [this repo](https://github.com/Epimodev/json-websocket) and its data is provided by [this repo](https://gist.github.com/NicolasMarlier/55f38eca709f4310531a442c4117fe5f)

## Extension or improvement for production

There are many ways to extend or improve this project for production.
I am going to explain the two most interesting ones and give a list of the rest of them.

### Uni testing

For the reason of lack of time, there is no unit test in this repo. However, to ensure the robustness of the application, especially in production, unit testing is very important. For example, testing the retry logic (error flow) in the WebSocket connection service with `marble-diagram` would be funny and critical.

### Redux integration

From the perspective of data flow, this project is quite simple since there are not many communications between components nor complex states. Using react build-in `useState` hook is sufficient. For large web applications that may need to deal with complex async scenarios, such as race condition from different parts of the application, it will be a good idea to integrate `redux` for state management and `redux-observable` for the async call.

### Others

- Implementing the dark mode
- Extract text into a variable for i18n
- Integrate Storybook for desing system components
- Add functional test

...

## Architecture and Library choice

The front-end application is bootstrap by `create-react-app` and `rxjs` is used for the async call since they are perfect to quick start a dynamic, data-driven react application and dealing with complicated async scenarios. As for responsive web design, `antd` is used as its grid system is flexible and handy.

To guaranty code quality, `eslint` and `prettier` are chosen.

The application's file structure follows the philosophy described in
[this article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1).

To summarise, in general, each component has everything it needs to work on its own, such as its styles, images, translations, etc. You can see a feature like an independent piece of code you will use in your app (a bit like node modules).

The file structure is like:

```
\src
    \components
        \component1
            \index.tsx
        \component2
            \components
                \component2.1
                    \index.tsx
                ...
            \index.tsx
        。。。
    \services
    app.tsx
    ...
```
