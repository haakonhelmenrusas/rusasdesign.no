# Rusås Design homepage and blog

This is the source code for the Rusås Design homepage and blog. It is built with Next.js and Sanity.io.

## Development

To run the project locally, you need to have Node.js installed. You can download it
from [nodejs.org](https://nodejs.org/).

1. Clone the repository:

```bash
git clone
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The project should now be running on [http://localhost:3000](http://localhost:3000).

```bash
npm run typegen
```

#### Creating a read token

This far your `.env.local` file should have values for `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
Before you can run the project you need to setup a read token (`SANITY_API_READ_TOKEN`), it's used for authentication
when Sanity Studio is live previewing your application.

1. Go to [manage.sanity.io](https://manage.sanity.io/) and select your project.
2. Click on the `🔌 API` tab.
3. Click on `+ Add API token`.
4. Name it "next blog live preview read token" and set `Permissions` to `Viewer` and hit `Save`.
5. Copy the token and add it to your `.env.local` file.

```bash
SANITY_API_READ_TOKEN="<paste your token here>"
```

Your `.env.local` file should look something like this:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="r0z1eifg"
NEXT_PUBLIC_SANITY_DATASET="blog-vercel"
SANITY_API_READ_TOKEN="sk..."
```
