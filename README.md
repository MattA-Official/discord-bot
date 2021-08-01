# 🤖 Discord Bot

A simple Discord bot & command/event framework. Supporting slash and message commands.

## Features

- Slash Commands
- Message Commands
- Full API coverage (using [discord.js](https://discord.js.org))
- Runs on Node
- `es6` syntax

## Run Locally

Clone the project

```bash
git clone https://github.com/matta-official/bot.git
```

Go to the project directory

```bash
cd bot
```

Install dependencies

```bash
yarn install
#or
npm install
```

Start the server

```bash
yarn start
#or
npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BOT_TOKEN` - Your bot token found at the [Discord Developer Portal](https://discord.com/developers)

## Contributing

Contributions are always welcome!

See [`contributing.md`](/contributing.md) for ways to get started.

Please adhere to this project's [`code of conduct`](/code_of_conduct.md).

## Authors

- [@matta-official](https://www.github.com/matta-official)

# Reference

## Commands

All commands require the following data export

```js
export const data = {
	name: 'name',
	description: 'a description of what the command does',
	options: [], // optional - array of #ApplicationCommandOption
	defaultPermissions: false, // optional - boolean whether to allow access by default
};

export const permissions = []; // optional - array of #ApplicationCommandPermission
```

### Message

Message commands should be exported as shown below:

```js
export const message = true;

export const execute = async (client, msg, args) => {
	// command logic in here
};
```

### Slash

Slash commands should be exported as shown below:

```js
export const slash = true;

export const interaction = async (client, interaction) => {
	// command logic in here
};
```

## Events

Events have a different number of arguments passed, check the discord.js documentation for information on each. Always pass the client before any additional arguments.

```js
export const name = 'name';
export const once = true;

export const execute = async (client, ...args) => {
	// event logic in here
};
```
