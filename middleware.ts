import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware();

//clerk matcher: this is specific config needed for the clerk authentication
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
