document.addEventListener('DOMContentLoaded', () => {
  const smileBtn = document.getElementById('smileBtn');

  // アニメーション関数
  function launchSmileStar() {
    const smile = document.createElement('div');
    smile.textContent = '😊';
    smile.style.position = 'absolute';
    smile.style.pointerEvents = 'none';
    smile.style.zIndex = 1;
    smile.style.opacity = '1';
    smile.style.fontFamily = '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji"';

    // サイズと速度をランダム化
    const size = Math.random() * 24 + 24; // 24px ～ 48px
    const duration = Math.random() * 1.5 + 1.2; // 1.2s ～ 2.7s
    smile.style.fontSize = `${size}px`;
    smile.style.transition = `transform ${duration}s linear, opacity 0.4s ${duration - 0.4}s`;

    document.body.appendChild(smile);

    const popupWidth = document.body.clientWidth;
    const popupHeight = document.body.clientHeight;

    let startX, startY, endX, endY;

    // 開始位置を上下左右からランダムに選択
    const startEdge = Math.floor(Math.random() * 4);
    switch (startEdge) {
      case 0: // 上
        startX = Math.random() * popupWidth;
        startY = -size;
        endX = Math.random() * popupWidth;
        endY = popupHeight + size;
        break;
      case 1: // 右
        startX = popupWidth + size;
        startY = Math.random() * popupHeight;
        endX = -size;
        endY = Math.random() * popupHeight;
        break;
      case 2: // 下
        startX = Math.random() * popupWidth;
        startY = popupHeight + size;
        endX = Math.random() * popupWidth;
        endY = -size;
        break;
      case 3: // 左
        startX = -size;
        startY = Math.random() * popupHeight;
        endX = popupWidth + size;
        endY = Math.random() * popupHeight;
        break;
    }

    smile.style.left = `${startX}px`;
    smile.style.top = `${startY}px`;

    // アニメーション開始
    setTimeout(() => {
      smile.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
      smile.style.opacity = '0';
    }, 10);

    // アニメーション後に削除
    setTimeout(() => {
      smile.remove();
    }, duration * 1000);
  }

  // ボタンクリックで複数の笑顔を時間差で発射
  smileBtn.addEventListener('click', () => {
    for (let i = 0; i < 7; i++) {
      setTimeout(launchSmileStar, i * 100);
    }
  });
}); 