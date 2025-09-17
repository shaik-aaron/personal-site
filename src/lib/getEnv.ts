export function getEnvVars() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    return { clientId, clientSecret }
}