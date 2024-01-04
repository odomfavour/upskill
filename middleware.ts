import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked as 'async' if using await inside

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/auth/login' || path === '/auth/signup';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // return NextResponse.redirect(new URL('/', request.url))
}

// See 'Matching paths' below to learn more
export const config = {
  matcher: ['/', '/profile', '/auth/login', '/auth/signup'],
};
