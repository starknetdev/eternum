# Eternum Telegram Bot

A Telegram bot for Eternum game built with grammY, TypeScript, and modern development tools.

## Features

- TypeScript support
- Hot reload during development
- Structured logging with Winston
- ESLint + Prettier for code quality
- Error handling middleware
- Environment variables management

## Prerequisites

- Node.js 18 or higher
- pnpm
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy the environment variables file:

```bash
cp .env.example .env
```

3. Edit `.env` and add your bot token:

```
BOT_TOKEN=your_bot_token_here
```

## Development

Start the bot in development mode with hot reload:

```bash
pnpm dev
```

## Production

Build the project:

```bash
pnpm build
```

Start the bot:

```bash
pnpm start
```

## Available Scripts

- `pnpm dev` - Start development with hot reload
- `pnpm build` - Build the project
- `pnpm start` - Start the built project
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── commands/     # Bot commands
├── middlewares/  # Bot middlewares
├── services/     # Business logic
├── types/        # TypeScript types
├── utils/        # Utilities
└── index.ts      # Entry point
```
