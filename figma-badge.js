// ==========================================
// FILE: figma-badge.js
// ==========================================

// Bikin tag <style> buat nampung CSS murni-nya
const badgeStyle = document.createElement('style');
badgeStyle.innerHTML = `
  .figma-float-btn {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    color: #1a1c1b;
    padding: 12px 20px;
    border-radius: 9999px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    border: 1px solid rgba(114, 122, 100, 0.2);
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Montserrat', 'Inter', sans-serif;
  }
  .figma-float-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.2);
  }
  .figma-float-btn svg {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
  }
  .figma-float-btn:hover svg {
    transform: scale(1.1);
  }
  .figma-float-btn span {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;
// Suntikin CSS-nya ke dalem <head>
document.head.appendChild(badgeStyle);

// Bikin elemen tombolnya
const figmaBadge = document.createElement('a');

// ↓↓↓ GANTI LINK FIGMA LU DI SINI NYET ↓↓↓
figmaBadge.href = "https://www.figma.com/design/NUgTLBpGRpC9BD4djufWKn/I-Love-Binus?node-id=380-559&t=UmboF8IsH1XtfpGS-1"; 
// ↑↑↑ JANGAN SAMPE LUPA ↑↑↑

figmaBadge.target = "_blank";
figmaBadge.rel = "noopener noreferrer";
figmaBadge.className = "figma-float-btn"; 

// Isi Logo & Text
figmaBadge.innerHTML = `
  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5H9.5V28.5H19Z" fill="#F24E1E"/>
    <path d="M9.5 28.5V47.5C9.5 52.7467 13.7533 57 19 57C24.2467 57 28.5 52.7467 28.5 47.5C28.5 42.2533 24.2467 38 19 38H9.5V28.5Z" fill="#A259FF"/>
    <path d="M38 19C38 24.2467 33.7467 28.5 28.5 28.5C23.2533 28.5 19 24.2467 19 19C19 13.7533 23.2533 9.5 28.5 9.5C33.7467 9.5 38 13.7533 38 19Z" fill="#1ABCFE"/>
    <path d="M9.5 19C9.5 13.7533 13.7533 9.5 19 9.5V28.5C13.7533 28.5 9.5 24.2467 9.5 19Z" fill="#F24E1E"/>
    <path d="M28.5 38C28.5 43.2467 24.2467 47.5 19 47.5C13.7533 47.5 9.5 43.2467 9.5 38H28.5Z" fill="#0ACF83"/>
  </svg>
  <span>View in Figma</span>
`;

// Suntikin tombolnya ke body
document.body.appendChild(figmaBadge);
