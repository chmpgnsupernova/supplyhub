document.addEventListener("DOMContentLoaded", () => {
  // Bikin elemen <a>
  const figmaBadge = document.createElement('a');
  figmaBadge.href = "LINK_FIGMA_LU_TARUH_SINI_TENG";
  figmaBadge.target = "_blank";
  figmaBadge.rel = "noopener noreferrer";
  
  // Styling Tailwind-nya (sama persis kayak yg HTML tadi)
  figmaBadge.className = "fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-on-background px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-outline/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 group";
  
  // Isi Logo SVG sama Teksnya
  figmaBadge.innerHTML = `
    <svg class="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5H9.5V28.5H19Z" fill="#F24E1E"/>
      <path d="M9.5 28.5V47.5C9.5 52.7467 13.7533 57 19 57C24.2467 57 28.5 52.7467 28.5 47.5C28.5 42.2533 24.2467 38 19 38H9.5V28.5Z" fill="#A259FF"/>
      <path d="M38 19C38 24.2467 33.7467 28.5 28.5 28.5C23.2533 28.5 19 24.2467 19 19C19 13.7533 23.2533 9.5 28.5 9.5C33.7467 9.5 38 13.7533 38 19Z" fill="#1ABCFE"/>
      <path d="M9.5 19C9.5 13.7533 13.7533 9.5 19 9.5V28.5C13.7533 28.5 9.5 24.2467 9.5 19Z" fill="#F24E1E"/>
      <path d="M28.5 38C28.5 43.2467 24.2467 47.5 19 47.5C13.7533 47.5 9.5 43.2467 9.5 38H28.5Z" fill="#0ACF83"/>
    </svg>
    <span class="font-bold text-sm tracking-wide text-[#1a1c1b]">View in Figma</span>
  `;
  
  // Suntikin elemennya ke dalem body
  document.body.appendChild(figmaBadge);
});
