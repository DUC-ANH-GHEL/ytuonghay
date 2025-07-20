// Import dữ liệu lá bài từ file riêng
import { cards } from './data/cards.js';

// Lưu trữ bộ sưu tập trong localStorage
function getCollection() {
  return JSON.parse(localStorage.getItem('creatideck_collection') || '[]');
}
function saveCollection(arr) {
  localStorage.setItem('creatideck_collection', JSON.stringify(arr));
}

// DOM
const drawBtn = document.getElementById('draw-card-btn');
const cardModal = document.getElementById('card-modal');
const cardFlip = cardModal.querySelector('.card-flip');
const cardImg = document.getElementById('card-img');
const cardTitle = document.getElementById('card-title');
const cardDesc = document.getElementById('card-desc');
const cardExamples = document.getElementById('card-examples');
const reshuffleBtn = document.getElementById('reshuffle-btn');
const shareBtn = document.getElementById('share-btn');
const saveBtn = document.getElementById('save-btn');
const closeModal = document.getElementById('close-modal');
const showCollectionBtn = document.getElementById('show-collection-btn');
const collectionModal = document.getElementById('collection-modal');
const closeCollection = document.getElementById('close-collection');
const collectionGrid = document.getElementById('collection-grid');
const tagBtns = document.querySelectorAll('.tag-btn');
const deckShuffle = document.getElementById('deck-shuffle');

let currentCard = null;
let shuffleTimeout = null;

function pickRandomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function showCard(card) {
  currentCard = card;
  // Render nội dung vào .card bên trong .card-front
  const cardFront = cardFlip.querySelector('.card-front');
  const cardDiv = cardFront.querySelector('.card');
  cardDiv.innerHTML = `
    <img src="${card.image || card.img}" alt="Card Image" class="card-img card-img-top">
    <h2 class="card-title card-title-main">${card.title}</h2>
    <p class="card-desc card-desc-main">${card.description || card.desc}</p>
    <div class="card-examples-block">
      <div class="card-examples-title"><b>Ví dụ:</b></div>
      <ul class="card-examples">
        ${(card.examples || []).map(ex => `<li>${ex}</li>`).join('')}
      </ul>
    </div>
    ${card.note ? `<div class="card-note">${card.note}</div>` : ''}
  `;
  // Reset flip
  cardFlip.classList.remove('flipped');
  cardModal.classList.remove('hidden');
  cardFlip.classList.remove('flipping');
  setTimeout(() => {
    cardFlip.classList.add('flipping');
    setTimeout(() => {
      cardFlip.classList.add('flipped');
      cardFlip.classList.remove('flipping');
    }, 900);
  }, 100);
  updateSaveBtn();
}

function updateSaveBtn() {
  const collection = getCollection();
  if (currentCard && collection.find(c => c.id === currentCard.id)) {
    saveBtn.textContent = '❤️ Đã lưu';
    saveBtn.disabled = true;
  } else {
    saveBtn.textContent = '❤️ Lưu';
    saveBtn.disabled = false;
  }
}

function playShuffleAnimation(callback) {
  // Tạo 5 lá bài mặt sau
  deckShuffle.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const card = document.createElement('div');
    card.className = 'deck-card';
    deckShuffle.appendChild(card);
  }
  deckShuffle.style.display = 'flex';
  deckShuffle.classList.add('shuffling');
  // Sau 1.2s, dừng shuffle, cho lá bài trên cùng bay ra
  setTimeout(() => {
    deckShuffle.classList.remove('shuffling');
    const topCard = deckShuffle.querySelector('.deck-card:last-child');
    if (topCard) topCard.classList.add('fly-out');
    // Sau 0.7s, ẩn deck và callback
    setTimeout(() => {
      deckShuffle.style.display = 'none';
      deckShuffle.innerHTML = '';
      if (callback) callback();
    }, 700);
  }, 1200);
}

drawBtn.addEventListener('click', () => {
  playShuffleAnimation(() => {
    const card = pickRandomCard();
    showCard(card);
  });
});

reshuffleBtn.addEventListener('click', () => {
  playShuffleAnimation(() => {
    const card = pickRandomCard();
    showCard(card);
  });
});

closeModal.addEventListener('click', () => {
  cardModal.classList.add('hidden');
});

saveBtn.addEventListener('click', () => {
  if (!currentCard) return;
  let collection = getCollection();
  if (!collection.find(c => c.id === currentCard.id)) {
    collection.push(currentCard);
    saveCollection(collection);
    updateSaveBtn();
  }
});

showCollectionBtn.addEventListener('click', () => {
  renderCollection('all');
  collectionModal.classList.remove('hidden');
});

closeCollection.addEventListener('click', () => {
  collectionModal.classList.add('hidden');
});

tagBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tagBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCollection(btn.dataset.tag);
  });
});

function renderCollection(tag) {
  const collection = getCollection();
  collectionGrid.innerHTML = '';
  let filtered = collection;
  if (tag && tag !== 'all') {
    filtered = collection.filter(card => card.tags.includes(tag));
  }
  if (filtered.length === 0) {
    collectionGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#aaa;">Chưa có lá bài nào.</p>';
    return;
  }
  filtered.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    div.style.position = 'relative';
    div.innerHTML = `
      <img src="${card.img}" alt="img" class="card-img" style="width:60px;height:60px;">
      <h3 class="card-title" style="font-size:1rem;">${card.title}</h3>
      <p class="card-desc" style="font-size:0.95rem;">${card.desc}</p>
      <ul class="card-examples" style="font-size:0.92rem;">${card.examples.map(e=>`<li>${e}</li>`).join('')}</ul>
    `;
    collectionGrid.appendChild(div);
  });
}

// Chia sẻ ý tưởng (Facebook, TikTok, Zalo)
shareBtn.addEventListener('click', () => {
  if (!currentCard) return;
  const text = `"${currentCard.title}"\n${currentCard.desc}\nVí dụ: ${currentCard.examples[0]}`;
  if (navigator.share) {
    navigator.share({
      title: currentCard.title,
      text,
      url: window.location.href
    });
  } else {
    // Fallback: Facebook share
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
    window.open(fbUrl, '_blank');
  }
});

// Đóng modal khi bấm ngoài
window.addEventListener('click', (e) => {
  if (e.target === cardModal) cardModal.classList.add('hidden');
  if (e.target === collectionModal) collectionModal.classList.add('hidden');
});

// Hiệu ứng flip CSS bổ sung
const style = document.createElement('style');
style.innerHTML = `
.card-flip { position: relative; }
.card-flip .card { transition: transform 0.7s cubic-bezier(.4,2,.6,1); }
.card-flip.flipped .card-back { transform: rotateY(180deg); }
.card-flip.flipped .card-front { transform: rotateY(0deg); }
.card-flip .card-front { transform: rotateY(180deg); }
.card-flip .card-back { transform: rotateY(0deg); }
.card-flip.flipping .card { transition: none; }
`;
document.head.appendChild(style);

// Auto mobile full screen card
function adjustModalWidth() {
  if (window.innerWidth < 500) {
    document.querySelectorAll('.modal-content').forEach(el => {
      el.style.width = '98vw';
      el.style.minWidth = '0';
    });
  } else {
    document.querySelectorAll('.modal-content').forEach(el => {
      el.style.width = '';
      el.style.minWidth = '';
    });
  }
}
window.addEventListener('resize', adjustModalWidth);
adjustModalWidth(); 