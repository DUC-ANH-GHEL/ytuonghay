// Import dữ liệu lá bài từ file riêng
import { cards } from './data/cards.js';

// Lưu trữ bộ sưu tập trong localStorage
function getCollection() {
  return JSON.parse(localStorage.getItem('creatideck_collection') || '[]');
}
function saveCollection(arr) {
  localStorage.setItem('creatideck_collection', JSON.stringify(arr));
}

// Lưu trữ lịch sử card đã hiển thị trong 5 phút
function getRecentCards() {
  const recent = JSON.parse(localStorage.getItem('creatideck_recent') || '[]');
  const now = Date.now();
  // Lọc bỏ các card cũ hơn 5 phút (300000ms)
  const filtered = recent.filter(item => now - item.timestamp < 300000);
  if (filtered.length !== recent.length) {
    localStorage.setItem('creatideck_recent', JSON.stringify(filtered));
  }
  return filtered;
}

function saveRecentCard(cardId) {
  const recent = getRecentCards();
  recent.push({
    id: cardId,
    timestamp: Date.now()
  });
  localStorage.setItem('creatideck_recent', JSON.stringify(recent));
}

// DOM
const shuffleBtn = document.getElementById('shuffle-btn');
const previewCard = document.getElementById('preview-card');
const previewHeartBtn = document.getElementById('preview-heart-btn');
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
  const recentCards = getRecentCards();
  const recentIds = recentCards.map(item => item.id);
  
  // Lọc ra các card chưa được hiển thị trong 5 phút gần đây
  const availableCards = cards.filter(card => !recentIds.includes(card.id));
  
  // Nếu tất cả card đã được hiển thị, reset lịch sử và cho phép random lại
  if (availableCards.length === 0) {
    localStorage.removeItem('creatideck_recent');
    return cards[Math.floor(Math.random() * cards.length)];
  }
  
  // Random từ các card có sẵn
  const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
  
  // Lưu card này vào lịch sử
  saveRecentCard(randomCard.id);
  
  return randomCard;
}

function updatePreviewCard(card) {
  currentCard = card;
  previewCard.innerHTML = `
    <button class="heart-btn" id="preview-heart-btn">🤍</button>
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
  
  // Re-attach heart button event listener
  const newHeartBtn = previewCard.querySelector('#preview-heart-btn');
  newHeartBtn.addEventListener('click', togglePreviewHeart);
  
  // Update heart button state
  updatePreviewHeartState();
}

function updatePreviewHeartState() {
  if (!currentCard) return;
  const collection = getCollection();
  const isSaved = collection.find(c => c.id === currentCard.id);
  const heartBtn = previewCard.querySelector('#preview-heart-btn');
  
  if (isSaved) {
    heartBtn.textContent = '❤️';
    heartBtn.classList.add('saved');
  } else {
    heartBtn.textContent = '🤍';
    heartBtn.classList.remove('saved');
  }
}

function togglePreviewHeart() {
  if (!currentCard) return;
  
  let collection = getCollection();
  const existingIndex = collection.findIndex(c => c.id === currentCard.id);
  
  if (existingIndex !== -1) {
    // Remove from collection
    collection.splice(existingIndex, 1);
    saveCollection(collection);
  } else {
    // Add to collection
    collection.push(currentCard);
    saveCollection(collection);
  }
  
  updatePreviewHeartState();
  
  // Add heart beat animation
  const heartBtn = previewCard.querySelector('#preview-heart-btn');
  heartBtn.classList.add('saved');
  setTimeout(() => {
    heartBtn.classList.remove('saved');
  }, 300);
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

shuffleBtn.addEventListener('click', () => {
  playShuffleAnimation(() => {
    const card = pickRandomCard();
    updatePreviewCard(card);
  });
});

// Add event listener for preview heart button
previewHeartBtn.addEventListener('click', togglePreviewHeart);

// Initialize heart button state
updatePreviewHeartState();

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