import { notFound } from 'next/navigation';
import KeystaticApp from './keystatic';

// The CMS only exists on your machine (`npm run dev`). In production it's a 404.
export default function Layout() {
  if (process.env.NODE_ENV !== 'development') notFound();
  return <KeystaticApp />;
}
