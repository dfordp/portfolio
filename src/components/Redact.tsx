'use client';

import { useState } from 'react';

/**
 * "forms call me ████████": redacted by default. Hover, focus or tap reveals the
 * name. It's in the HTML the whole time, so search engines and screen readers get it.
 */
export default function Redact({ children }: { children: string }) {
  const [peek, setPeek] = useState(false);
  return (
    <span className={`redact${peek ? ' peek' : ''}`} tabIndex={0} onClick={() => setPeek((p) => !p)} title="redacted, mostly">
      {children}
      <span className="bar" aria-hidden="true" />
      <span className="stamp-r" aria-hidden="true">redacted</span>
    </span>
  );
}
