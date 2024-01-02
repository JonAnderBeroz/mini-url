'use client';

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url: URL = new URL(request.url)
  const slugStart = url.pathname.lastIndexOf('/');
  const slug = url.pathname.slice(slugStart + 1)
  console.log(slug)
  const cookie: {
    name: string,
    value: string,
  } | undefined = request.cookies.get('url')
  if(!cookie?.value) return NextResponse.redirect(request.nextUrl.origin)
  console.log(cookie.value);
  return NextResponse.redirect(new URL(cookie.value))
}

export const config = {
  matcher: '/min/:path/'
}