'use client';

import { type NextRequest } from "next/server";
import { type url } from "./app/page";
import { useRouter } from "next/router";

export function middleware(request: NextRequest) {
  const url: URL = new URL(request.url)
  console.log('a')
  const slugStart = url.pathname.lastIndexOf('/');
  const slug = url.pathname.slice(slugStart + 1)
  console.log(slug)
  const unparsedUrls = localStorage.getItem('urls');
  const urls = JSON.parse(unparsedUrls) as url[];
  const link = urls.find(url => url.slug === slug)
  if(!link) {
    console.log("Url not found");
  }
  const router = useRouter();
}

export const config = {
  matcher: '/min/:path/'
}