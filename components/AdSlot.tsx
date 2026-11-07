// Publisher ID from ads.txt: google.com, pub-9889586007871680, DIRECT, f08c47fec0942fa0
const PUBLISHER_ID = "ca-pub-9889586007871680";

type AdSlotProps = {
  slot: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
};

/**
 * AdSense slot component.
 * - When ads are disabled, no mock ad is shown.
 * - Production (NEXT_PUBLIC_ADS_ENABLED === "true"): renders a proper AdSense <ins>
 *   unit and immediately calls adsbygoogle.push({}) so the slot initialises as soon
 *   as the HTML is parsed — no React hooks needed, compatible with Next.js static export.
 */
export default function AdSlot({
  slot,
  format = "horizontal",
  className = "",
}: AdSlotProps) {
  const isProd = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

  const adFormat =
    format === "horizontal"
      ? "horizontal"
      : format === "rectangle"
      ? "rectangle"
      : "vertical";

  // Do not display placeholder labels when advertising is disabled.
  if (!isProd) return null;
  // Production: render a proper AdSense <ins> unit.
  return (
    <div className={`my-6 mx-auto max-w-3xl overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <script
        dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </div>
  );
}
