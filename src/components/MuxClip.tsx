'use client';

import MuxPlayer from '@mux/mux-player-react/lazy';

/** Demo videos already hosted on Mux. Loads only when scrolled near. */
export default function MuxClip({ playbackId, title }: { playbackId: string; title: string }) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      metadata={{ video_title: title }}
      streamType="on-demand"
      accentColor="#C8452B"
      style={{ aspectRatio: '16 / 10', width: '100%', display: 'block' }}
    />
  );
}
