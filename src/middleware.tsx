// export { default } from "next-auth/middleware";

import { withAuth } from "next-auth/middleware";

export default withAuth({
    // Matches the pages config in `[...nextauth]`
    pages: {
        signIn: "/login",
        error: "/error",
        signOut: "/logout",
    },
});

export const config = { matcher: ["/dashboard", "/profile"] };
