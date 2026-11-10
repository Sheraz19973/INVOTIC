import {StrictMode} from 'react';
import {prerenderToNodeStream} from 'react-dom/static';
import {StaticRouter} from 'react-router-dom';
import {AppShell} from './App.tsx';

/** Build-time only: renders one page to HTML (waits for lazy pages) for the prerender in vite.config.ts. */
export async function render(url: string): Promise<string> {
  const {prelude} = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
    // one big chunk: every page's content is written in place, not as hidden parts swapped in by script
    {progressiveChunkSize: Number.MAX_SAFE_INTEGER},
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString('utf8');
}
