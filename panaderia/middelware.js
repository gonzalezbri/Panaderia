import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export { default } from "next-auth/middleware";

export async function middleware(req) {
    const session = await getSession({ req });

    if (!session) {
      // Redirect to login page if not authenticated
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
    }


export const config = { matcher: ["/dashboard"] };
