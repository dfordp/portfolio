import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../../keystatic.config';

const handler = makeRouteHandler({ config });
const devOnly = (fn: (req: Request) => Promise<Response>) => (req: Request) =>
  process.env.NODE_ENV === 'development' ? fn(req) : Promise.resolve(new Response('Not found', { status: 404 }));

export const GET = devOnly(handler.GET);
export const POST = devOnly(handler.POST);
