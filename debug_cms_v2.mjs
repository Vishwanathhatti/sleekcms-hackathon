import { createClient } from '@sleekcms/client';

(async () => {
    try {
        console.log("Initializing createClient...");
        const clientPromise = createClient({
            siteToken: 'dummy-token',
            env: 'latest',
            cdn: true
        });

        console.log("Client Promise:", clientPromise);

        const client = await clientPromise;
        console.log("Client Resolved:", client);
        console.log("Client Type:", typeof client);

        if (client) {
            console.log("Client Keys:", Object.keys(client));

            const proto = Object.getPrototypeOf(client);
            if (proto) {
                console.log("Client Prototype Keys:", Object.getOwnPropertyNames(proto));
            }
        }

    } catch (e) {
        console.error("Debug Script Error:", e);
    }
})();
