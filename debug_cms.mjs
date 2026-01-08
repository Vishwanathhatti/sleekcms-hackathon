import { createClient } from '@sleekcms/client';

(async () => {
    try {
        console.log("Calling createClient...");
        // Use the actual token to avoid validation errors if any
        const result = createClient({
            siteToken: 'test',
            env: 'latest',
            cdn: true
        });

        console.log("Is Promise?", result instanceof Promise);

        if (result instanceof Promise) {
            console.log("Awaiting result...");
            const client = await result;
            console.log("Resolved Client keys:", Object.keys(client || {}));
            console.log("Resolved Client methods:", client);
        } else {
            console.log("Client keys:", Object.keys(result || {}));
            console.log("Client methods:", result);
        }
    } catch (e) {
        console.error("Error:", e);
    }
})();
