import Image from 'next/image';

type Bit = string | false | null | undefined;

/** "by DP · published … · updated … · N min read" */
export default function Byline({ bits }: { bits: Bit[] }) {
  const parts = bits.filter(Boolean) as string[];
  return (
    <div className="byline">
      <Image src="/Dilpreet.jpeg" alt="" width={32} height={32} />
      <span>by <b>DP</b></span>
      {parts.map((p) => (
        <span key={p} style={{ display: 'contents' }}><span className="dot">·</span><span>{p}</span></span>
      ))}
    </div>
  );
}
