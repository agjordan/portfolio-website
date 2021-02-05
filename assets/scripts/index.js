
// let lacDeDerborance = `<svg viewBox="0 0 1440 1076" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0)">
// <path d="M674.5 310.5L682.5 298.5L720 291L758 310.5L639.5 407.5L545.5 339L674.5 310.5Z" fill="#ECECEC"/>
// <path d="M639.5 406L761.5 303.5L1003.5 137L1272 176.5L815 535H672.5L0 456V137L524 323.5L639.5 406Z" fill="#C4C4C4"/>
// <path d="M1440.16 -10V535.5H742L1440.16 -10Z" fill="#5B7553"/>
// <path d="M-0.102539 452L684 534.5H-0.102539V452Z" fill="#5B7553"/>
// <path d="M674.5 759L682.5 771L720 778.5L758 759L639.5 662L545.5 730.5L674.5 759Z" fill="#ECECEC"/>
// <path d="M639.5 663.5L761.5 766L1003.5 932.5L1272 893L815 534.5H672.5L0 613.5V932.5L524 746L639.5 663.5Z" fill="#C4C4C4"/>
// <path d="M1440.16 1079.5V534H742L1440.16 1079.5Z" fill="#5B7553"/>
// <path d="M-0.102539 616.5L684 534H-0.102539V616.5Z" fill="#5B7553"/>
// <rect y="534" width="1440" height="546" fill="url(#paint0_linear)"/>
// </g>
// <defs>
// <linearGradient id="paint0_linear" x1="720" y1="534" x2="720" y2="1080" gradientUnits="userSpaceOnUse">
// <stop stop-color="#343A40" stop-opacity="0.4"/>
// <stop offset="0.854167" stop-color="#343A40"/>
// </linearGradient>
// <clipPath id="clip0">
// <rect width="1440" height="1076" fill="white"/>
// </clipPath>
// </defs>
// </svg>
// `;
// let whistlerBlackcombe = `<svg viewBox="0 0 1440 1076" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0)">
// <path d="M683 326L871.806 368.5L762.5 425L618 350L683 326Z" fill="#DADFF7"/>
// <path d="M-4 380.5V294.5L92.5 262.5H242.5L287 282L437 271.5L772.5 416L706.5 467L515.5 507L269 498L-4 467V380.5Z" fill="#C4C4C4"/>
// <path d="M-2 464.5L503 509H878L1201 562.5L1440.5 528.5V580.5V739H562L-2 660.5V464.5Z" fill="#5B7553"/>
// <path d="M710.115 462.987L710.22 462.962L710.306 462.895L774.761 412.93L883.647 362.983L1081.58 330.994L1081.59 330.992L1081.59 330.991L1138.55 320H1172.5H1172.59L1172.68 319.966L1213.52 304.03L1366.85 352.477L1366.86 352.479L1366.86 352.481L1448.5 375.379V530.059L1194.01 561.995L883.579 512.006L883.54 512H883.5H501.808L710.115 462.987Z" fill="#C4C4C4" stroke="#6F6E6E"/>
// </g>
// <defs>
// <clipPath id="clip0">
// <rect width="1440" height="1076" fill="white"/>
// </clipPath>
// </defs>
// </svg>
// `;
// let matterhorn = `<svg viewBox="0 0 1440 1076" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0)">
// <path d="M942 314H982.5L1138.5 346.5L1187.5 323H1426.5H1451.5V571L1282 601.5L1175.5 563L942 314Z" fill="#ECECEC"/>
// <path d="M-3.5 338L342 474.5L398 494.5L586.5 451.5L673 365L1031 502L1262.5 591L1445.5 566.5V628.5H665.5H-3.5V338Z" fill="#5B7553"/>
// <path d="M692 195.5L645.5 50L666 54.5L686 77L704 90.5L732 147V164L756 192L778.5 195.5L879.5 260.5L997.5 358L1105.5 463L1184 544L1172 559.5L1089.5 533L747.5 395.5L666 375L692 195.5Z" fill="#C4C4C4"/>
// <path d="M-3.5 265.5L193.5 295.5H364.5L516 282.5L526.5 245L541.5 222L559.5 211.5L590 158.5L606 111.5L628.5 95.5V69.5L644.5 50L689 111.5L680.5 122.5L695 199L675 369.5L590 456L390.5 505.5L-3.5 343.5V265.5Z" fill="#ECECEC"/>
// </g>
// <defs>
// <clipPath id="clip0">
// <rect width="1440" height="1076" fill="white"/>
// </clipPath>
// </defs>
// </svg>
// `;
// let nextMountain = 0;
// let mountainsArr = [lacDeDerborance, whistlerBlackcombe, matterhorn];

window.onscroll = function () {
  element = document.getElementById("nav");
  element2 = document.getElementById("navTopLink");

  if (window.pageYOffset >= document.getElementById("mountains").offsetHeight) {
    element.classList.add("bg-dark");
    element2.hidden = false;
  } else {
    element.classList.remove("bg-dark");
    element2.hidden = true;
  }
};

// document.getElementById("footy").innerHTML = `&copy; Alex Jordan - ${new Date().getFullYear()}`