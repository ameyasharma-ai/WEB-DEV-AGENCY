"use client";

const WHATSAPP_NUMBER = "919097999898";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in learning more about your web development services."
);

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.118-1.962A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.606c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.966.324-5.714-1.228-4.8-1.986-7.886-6.85-8.126-7.168-.23-.318-1.932-2.572-1.932-4.904s1.222-3.476 1.656-3.952c.434-.476.948-.596 1.264-.596.316 0 .63.002.906.016.29.014.68-.11 1.064.812.39.938 1.326 3.27 1.442 3.508.116.238.194.516.038.832-.156.318-.234.516-.468.796-.234.28-.492.624-.702.838-.234.238-.478.498-.206.976s1.21 1.998 2.598 3.236c1.786 1.594 3.29 2.088 3.758 2.322.468.234.742.198 1.014-.118.274-.318 1.17-1.364 1.484-1.834.312-.468.626-.39 1.058-.234.434.156 2.762 1.302 3.234 1.538.468.238.782.354.898.55.114.196.114 1.136-.276 2.234z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
