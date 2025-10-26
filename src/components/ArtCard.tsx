import { FC } from 'react'
import { ArtPost } from '@/types/art'

interface ArtCardProps {
  art: ArtPost
}

function getEmbedType(embed: string) {
  // Detect YouTube Shorts by height or container or aspect ratio
  if (embed.includes("youtube.com") || embed.includes("youtu.be")) {
    if (
      embed.includes('height="920"') ||
      embed.includes('height="1000"') ||
      embed.includes('shorts') ||
      embed.includes("tpYtContainer") ||
      /height\s*=\s*["']9\d{2,3}["']/.test(embed)
    ) {
      return "youtube-short";
    }
    return "youtube-long";
  }
  if (embed.includes("instagram.com")) return "instagram";
  if (embed.includes("behance.net")) return "behance";
  return "other";
}

export const ArtCard: FC<ArtCardProps> = ({ art }) => {
  // Separate embeds by type
  const youtubeLongEmbeds = art.embeds?.filter(e => getEmbedType(e) === "youtube-long") || [];
  const youtubeShortEmbeds = art.embeds?.filter(e => getEmbedType(e) === "youtube-short") || [];
  const gridEmbeds = art.embeds?.filter(e => !getEmbedType(e).startsWith("youtube")) || [];

  const CardContent = () => (
    <article className="group cursor-pointer touch-manipulation">
      <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800">
        {/* Title */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-tight mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {art.title}
          </h2>
        </div>

        {/* Youtube Long Form - grid of 2 on md+, 1 per row on mobile */}
        {youtubeLongEmbeds.length > 0 && (
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {youtubeLongEmbeds.map((embed, idx) => (
                <div
                  key={`yt-long-${idx}`}
                  className="w-full min-w-0 rounded-lg overflow-hidden shadow bg-white dark:bg-neutral-900 p-0 flex flex-col aspect-video"
                >
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      dangerouslySetInnerHTML={{ __html: embed }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Youtube Shorts - vertical, centered, max width */}
        {youtubeShortEmbeds.length > 0 && (
          <div className="col-span-12 flex flex-wrap justify-center gap-4">
            {youtubeShortEmbeds.map((embed, idx) => (
              <div
                key={`yt-short-${idx}`}
                className="rounded-lg overflow-hidden shadow bg-white dark:bg-neutral-900 p-0 flex flex-col"
                style={{
                  width: "min(100%,340px)",
                  minWidth: 200,
                  margin: "0 auto",
                  aspectRatio: "9/16"
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "0",
                    height: "0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    dangerouslySetInnerHTML={{ __html: embed }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Grid embeds (Behance, Instagram, etc.) */}
        {gridEmbeds.length > 0 && (
          <div className="col-span-12 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gridEmbeds.map((embed, idx) => (
                <div
                  key={`grid-${idx}`}
                  className="rounded-lg overflow-hidden shadow bg-white dark:bg-neutral-900 p-2 flex flex-col aspect-square"
                >
                  <div style={{ width: "100%", height: "100%" }} dangerouslySetInnerHTML={{ __html: embed }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )

  return (
    <div
      className="block w-full touch-manipulation active:opacity-75"
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <CardContent />
    </div>
  )
}