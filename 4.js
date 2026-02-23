// カーソル
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
    const eye = document.querySelector(".q");
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




const a2=document.getElementById("a1");
const aa2=document.getElementById("aa1");
let isScaling = false; // 拡大アニメーション中かどうかのフラグ
let rotateAnimation = null; // 回転アニメを保存する変数

a2.addEventListener("mouseenter", () => { // mouseoverよりmouseenterの方が安定します
    
    // 拡大アニメーション中なら何もしない（連続発火を防止）
    if (isScaling) return;

    isScaling = true; // アニメーション開始！

    // 1. 拡大アニメーション
    const scaleAnim = aa2.animate(
        [
            { scale: "0" },
            { scale: "1" }
        ],
        {
            duration: 400,
            // easing: "ease-out",
            fill: "forwards"
        }
    );

    // アニメーションが終わったらフラグを戻す
    scaleAnim.onfinish = () => {
        isScaling = false;
    };

    // 2. 回転アニメーション（初回のみ開始し、ずっと回し続ける）
    if (!rotateAnimation) {
        rotateAnimation = aa2.animate(
            [
                { rotate: "0deg" },
                { rotate: "360deg" }
            ],
            {
                duration: 4000,
                easing: "linear",
                iterations: Infinity
            }
        );
    }
});

a2.addEventListener("mouseleave",()=>{
    aa2.animate(
        [
          { scale: "1" },
          { scale: "0" }
          
        ],
        {
            duration:400,
            fill:"forwards",
            // easing:"ease-out"
        }
    )
});

// B
const b2=document.getElementById("b1");
const bb2=document.getElementById("bb1");
let isScaling2 = false; // 拡大アニメーション中かどうかのフラグ
let rotateAnimation2 = null; // 回転アニメを保存する変数

b2.addEventListener("mouseenter", () => { // mouseoverよりmouseenterの方が安定します
    
    // 拡大アニメーション中なら何もしない（連続発火を防止）
    if (isScaling2) return;

    isScaling2 = true; // アニメーション開始！

    // 1. 拡大アニメーション
    const scaleAnim = bb2.animate(
        [
            { scale: "0" },
            { scale: "1" }
        ],
        {
            duration: 400,
            // easing: "ease-out",
            fill: "forwards"
        }
    );

    // アニメーションが終わったらフラグを戻す
    scaleAnim.onfinish = () => {
        isScaling2 = false;
    };

    // 2. 回転アニメーション（初回のみ開始し、ずっと回し続ける）
    if (!rotateAnimation2) {
        rotateAnimation2 = bb2.animate(
            [
                { rotate: "0deg" },
                { rotate: "360deg" }
            ],
            {
                duration: 4000,
                easing: "linear",
                iterations: Infinity
            }
        );
    }
});

b2.addEventListener("mouseleave",()=>{
    bb2.animate(
        [
          { scale: "1" },
          { scale: "0" }
          
        ],
        {
            duration:400,
            fill:"forwards",
            // easing:"ease-out"
        }
    )
});

aa2.animate(
    [{ rotate: "0deg" }, { rotate: "360deg" }],
    {
        duration: 10000, // 画像よりゆっくり回す
        easing: "linear",
        iterations: Infinity
    }
);