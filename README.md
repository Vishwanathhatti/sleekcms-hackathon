# SleekCMS Client Usage Guide

This project uses `@sleekcms/client` to fetch content from SleekCMS.

## 1. Installation

```bash
npm install @sleekcms/client
```

## 2. Configuration (`lib/sleekcms.js`)

We use `createClient` to initialize the CMS client. Note that `createClient` returns a **Promise** that resolves to the client object.

```javascript
// lib/sleekcms.js
import { createClient } from '@sleekcms/client';

// Pass configuration options
const clientPromise = createClient({
  siteToken: process.env.NEXT_PUBLIC_SLEEKCMS_PUBLIC_TOKEN, 
  env: 'latest',      // environment alias
  cdn: true,          // use CDN
});

// Export the Promise
export const sleekClient = clientPromise;
```

## 3. Fetching Content

Since `sleekClient` is a Promise, you must `await` it before you can call methods like `getContent()`.

### Example: `app/page.js`

```javascript
import { sleekClient } from "@/lib/sleekcms";

export default async function Home() {
    let data;
    try {
        // 1. Await the client initialization
        const client = await sleekClient;
        
        // 2. Fetch content using getContent()
        data = await client.getContent();
        
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
    
    // ... use data in your component
}
```

### Example: `app/layout.js` (Metadata)

```javascript
import { sleekClient } from "@/lib/sleekcms";

export async function generateMetadata() {
  try {
    const client = await sleekClient;
    const data = await client.getContent();
    
    return {
       title: data?.title || "My Site",
       // ...
    };
  } catch (error) {
    return { title: "Fallback Title" };
  }
}
```

## 4. Troubleshooting

- **`sleekClient.getContent is not a function`**: This usually means you tried to call `getContent()` on the `sleekClient` PROMISE instead of awaiting it first.
- **`ReferenceError: createClient is not defined`**: Ensure you are importing `{ createClient }` from `@sleekcms/client`.
