const loader = document.getElementById("loader"); // ドットを外しました
const beforeEl = loader.querySelector('.before');
const afterEl = loader.querySelector('.after');
const outerEl = loader.querySelector('.outer');
const outer2El = loader.querySelector('.outer-2');

const style = getComputedStyle(document.documentElement);
const speed = parseFloat(style.getPropertyValue('--speed')) || 2; // 秒

// 2. outerのアニメーション設定
const outerOptions = {
  duration: speed * 1.5 * 1000, // 同じ速度
  iterations: Infinity,
  easing: 'linear'
};

window.addEventListener('mousemove', (e) => {
    const eye = document.querySelector(".s1");
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;
    // ローダー（カーソル）をマウスの位置に移動させる
    // ローダーのサイズの半分（50px）を引くと、マウスが中心に来ます
    loader.style.position = 'fixed';
    loader.style.left = `${e.clientX - 50}px`;
    loader.style.top = `${e.clientY - 50}px`;
    loader.style.opacity = "1";

    loader.style.pointerEvents = 'none'; // マウスイベントを貫通させる
});
// アニメーションの設定
// 真ん中の線 (::before相当) - 逆回転
beforeEl.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(-360deg)' }
], {
  duration: speed * 0.7 * 1000,
  iterations: Infinity,
  easing: 'linear'
});

// 内側の線 (::after相当) - 高速回転
afterEl.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: speed * 0.4 * 1000,
  iterations: Infinity,
  easing: 'linear'
});
// 2.js の outerOptions を書き換え
outerEl.animate([
  { transform: 'rotate(0deg)', opacity: 0.3 },   // 最初は薄く
  { transform: 'rotate(180deg)', opacity: 1 },   // 途中で濃く
  { transform: 'rotate(360deg)', opacity: 0.3 }  // 最後はまた薄く
], {
  duration: speed * 1.5 * 1000,
  iterations: Infinity,
  easing: 'linear'
});
outer2El.animate([
  { transform: 'rotate(0deg)', opacity: 0.3 },   // 最初は薄く
  { transform: 'rotate(180deg)', opacity: 1 },   // 途中で濃く
  { transform: 'rotate(360deg)', opacity: 0.3 }  // 最後はまた薄く
], {
  duration: speed * 1.5 * 1000,
  iterations: Infinity,
  easing: 'linear'
});