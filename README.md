# VinCar Interview Project

This is a Next.js project set up for the VinCar interview. It includes TypeScript, Tailwind CSS, and Apollo Client configuration.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Apollo Client** for GraphQL integration (ready to connect)
- Basic component structure and examples

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vincar
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
vincar/
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages
│   ├── components/      # React components
│   │   ├── examples/    # Example components
│   │   ├── layout/      # Layout components
│   │   ├── providers/   # Provider components
│   │   └── ui/          # UI components
│   ├── graphql/         # GraphQL queries and mutations
│   ├── lib/             # Library code
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Apollo Client Integration

The project includes Apollo Client configuration, but it's currently set up with a placeholder GraphQL URL. To use it with a real GraphQL server:

1. Update the GraphQL URL in `src/lib/apollo-client.ts`
2. Uncomment the Apollo Provider in `src/components/providers/ApolloProvider.tsx`
3. Use the example GraphQL queries and mutations in `src/graphql/`

## Available Components

- **Button**: A customizable button component with different variants and sizes
- **Header**: A simple header component with navigation
- **GraphQLExample**: An example component that demonstrates Apollo Client usage (using mock data until GraphQL URL is provided)

## Development Notes

- The project is set up with strict TypeScript type checking
- Tailwind CSS is configured for styling
- The Apollo Client is ready to be connected to a GraphQL server
- Example components and utilities are provided to help with development

## Next Steps

1. Connect to a real GraphQL server by updating the GraphQL URL
2. Implement additional components as needed
3. Add authentication if required
4. Expand the application with actual features
# graphql-with-prompt
