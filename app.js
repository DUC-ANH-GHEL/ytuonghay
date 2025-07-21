// Import dữ liệu lá bài từ file riêng
import { cards } from './data/cards.js';
import { getRandomAffiliateLink } from './data/affiliate-links.js';
import { updateAdContent, getAdAffiliateLink } from './data/ad-content.js';

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

// Lưu trữ các lá bài đã từng được AI gợi ý (chỉ trong phiên hiện tại, không lưu localStorage)
let aiSuggestedIds = [];
function getAISuggestedIds() {
  return aiSuggestedIds;
}
function addAISuggestedId(cardId) {
  if (!aiSuggestedIds.includes(String(cardId))) {
    aiSuggestedIds.push(String(cardId));
  }
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

function updatePreviewCard(card, el = previewCard) {
  el.innerHTML = `
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
  // Chỉ gắn event heart cho lá trên cùng
  if (el.id === 'preview-card') {
    const newHeartBtn = el.querySelector('#preview-heart-btn');
    newHeartBtn.addEventListener('click', togglePreviewHeart);
    updatePreviewHeartState();
  }
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

// Quản lý bộ bài (deck) cho swipe
let deck = [...cards.map(card => card.id)];

function getCardById(id) {
  return cards.find(card => card.id == id);
}

function renderTopCards() {
  const card = getCardById(deck[0]);
  const nextCard = getCardById(deck[1]);
  const previewCardEl = document.getElementById('preview-card');
  const previewCardNextEl = document.getElementById('preview-card-next');
  if (card) {
    updatePreviewCard(card, previewCardEl);
    currentCard = card; // Đảm bảo currentCard luôn là lá trên cùng
  }
  if (nextCard) updatePreviewCard(nextCard, previewCardNextEl);
  else if (previewCardNextEl) previewCardNextEl.innerHTML = '';

  // Đảm bảo swipe-stack đủ cao cho card dài nhất
  setTimeout(() => {
    const stack = document.querySelector('.swipe-stack');
    if (stack && previewCardEl) {
      const cardHeight = previewCardEl.offsetHeight;
      stack.style.minHeight = (cardHeight + 60) + 'px'; // 60px cho nút
    }
  }, 0);
}

// Swipe gesture cho preview card
let startX = 0;
let currentX = 0;
let isDragging = false;
let isTouchingPreview = false;
let touchStartX = 0;
let touchStartY = 0;
let isHorizontalSwipe = false;

function onDragStart(e) {
  isDragging = true;
  if (e.type.startsWith('touch')) {
    isTouchingPreview = true;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isHorizontalSwipe = false;
  }
  startX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
  previewCard.style.transition = '';
}

function onDragMove(e) {
  if (!isDragging) return;
  currentX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
  const dx = currentX - startX;
  previewCard.style.transform = `translateX(${dx}px) rotate(${dx/15}deg)`;
  // Nếu đang swipe ngang trên preview card, chặn scroll dọc
  if (isTouchingPreview && e.type.startsWith('touch')) {
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    // Chỉ chặn scroll dọc nếu swipe ngang rõ rệt
    if (!isHorizontalSwipe && Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) + 8) {
      isHorizontalSwipe = true;
      document.body.style.overflow = 'hidden';
    }
    if (isHorizontalSwipe) {
      e.preventDefault();
    }
  }
}

function onDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  if (isTouchingPreview) {
    isTouchingPreview = false;
    isHorizontalSwipe = false;
    document.body.style.overflow = '';
  }
  const dx = (e.type.startsWith('touch') ? e.changedTouches[0].clientX : e.clientX) - startX;
  const threshold = 100;
  if (dx < -threshold) {
    // Vuốt trái: sang lá mới (deck tiến tới)
    previewCard.style.transition = 'transform 0.35s cubic-bezier(.4,2,.6,1)';
    previewCard.style.transform = `translateX(-1000px) rotate(-15deg)`;
    setTimeout(() => {
      const swiped = deck.shift();
      deck.push(swiped);
      previewCard.style.transition = '';
      previewCard.style.transform = '';
      renderTopCards();
    }, 350);
  } else if (dx > threshold) {
    // Vuốt phải: quay lại lá trước (deck lùi lại)
    previewCard.style.transition = 'transform 0.35s cubic-bezier(.4,2,.6,1)';
    previewCard.style.transform = `translateX(1000px) rotate(15deg)`;
    setTimeout(() => {
      const last = deck.pop();
      deck.unshift(last);
      previewCard.style.transition = '';
      previewCard.style.transform = '';
      renderTopCards();
    }, 350);
  } else {
    // Không đủ xa, trả về vị trí cũ
    previewCard.style.transition = 'transform 0.2s';
    previewCard.style.transform = '';
  }
}

function renderCollection(tag) {
  const collection = getCollection();
  collectionGrid.innerHTML = '';

  // Sinh danh sách tag filter động
  const tagFilter = document.querySelector('.tag-filter');
  if (tagFilter) {
    // Lấy tất cả tag duy nhất từ bộ sưu tập
    const allTags = Array.from(new Set(collection.flatMap(card => Array.isArray(card.tags) ? card.tags : [])));
    tagFilter.innerHTML = '';
    // Luôn có nút 'Tất cả'
    const allBtn = document.createElement('button');
    allBtn.className = 'tag-btn';
    allBtn.dataset.tag = 'all';
    allBtn.textContent = 'Tất cả';
    if (tag === 'all') allBtn.classList.add('active');
    tagFilter.appendChild(allBtn);
    allBtn.addEventListener('click', () => {
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      allBtn.classList.add('active');
      renderCollection('all');
    });
    // Thêm các tag còn lại
    allTags.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tag-btn';
      btn.dataset.tag = t;
      btn.textContent = t;
      if (tag === t) btn.classList.add('active');
      tagFilter.appendChild(btn);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCollection(t);
      });
    });
  }

  let filtered = collection;
  if (tag && tag !== 'all') {
    filtered = collection.filter(card => Array.isArray(card.tags) && card.tags.includes(tag));
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
      <img src="${card.image || card.img}" alt="img" class="card-img" style="width:60px;height:60px;">
      <h3 class="card-title" style="font-size:1rem;">${card.title}</h3>
      <p class="card-desc" style="font-size:0.95rem;">${card.description || card.desc || ''}</p>
      <ul class="card-examples" style="font-size:0.92rem;">${(card.examples||[]).map(e=>`<li>${e}</li>`).join('')}</ul>
    `;
    collectionGrid.appendChild(div);
  });
}

// Hàm gọi AI Gemini
async function askGPT(text, prompt) {
    const apiKey = 'AIzaSyBQ9bQy3HnXMVdAeHo67K-x2TLBE4Hibis';
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    const body = {
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt + `\n\nBình luận: ${text}` }
          ]
        }
      ]
    };

    const response = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Không rõ";
    return result.trim().toLowerCase();
}

// Xử lý AI Suggestion
const aiInput = document.getElementById('ai-product-desc');
const aiBtn = document.getElementById('ai-suggest-btn');
const aiResult = document.getElementById('ai-suggest-result');

if (aiBtn && aiInput && aiResult) {
  aiBtn.addEventListener('click', async () => {
    const desc = aiInput.value.trim();
    if (!desc) {
      aiResult.textContent = 'Vui lòng nhập mô tả sản phẩm.';
      aiResult.classList.add('active');
      return;
    }
    // Loại bỏ các lá bài đã từng được AI gợi ý khỏi prompt (vĩnh viễn trong phiên)
    const aiSuggested = getAISuggestedIds();
    let filteredCards = cards.filter(c => !aiSuggested.includes(String(c.id)));
    // Nếu tất cả đều đã được gợi ý, tự động reset lại danh sách và tiếp tục gợi ý lại từ đầu
    if (filteredCards.length === 0) {
      aiSuggestedIds = [];
      filteredCards = cards;
    }
    aiBtn.disabled = true;
    aiResult.textContent = 'Đang phân tích AI...';
    aiResult.classList.add('active');
    const prompt = `Bạn là chuyên gia sáng tạo nội dung video viral. Dưới đây là danh sách các ý tưởng mở đầu video viral (mỗi ý tưởng gồm id, title, description, note và ví dụ mẫu). Dựa vào mô tả sản phẩm, hãy:\n\n1. Chọn **duy nhất 1 lá bài phù hợp nhất với ngữ cảnh mô tả sản phẩm, mục đích để tạo được đoạn hook đầu của video đạt mức viral nhất có thể, lưu ý phải đọc toàn kỹ toàn bộ các lá bài để phân tích thật sâu sau đó mới đưa ra kết quả cuối cùng, không được chọn bừa 1 lá ở gần**.\n2. Dựa theo ý tưởng đó và mô tả sản phẩm, **viết một câu mở đầu video cụ thể, sáng tạo, hấp dẫn, theo đúng phong cách của lá bài đó**.\n3. Trả về đúng 1 dòng theo format sau:  \n   "id"\n\n❌ Không trả về giải thích.  \n❌ Không liệt kê nhiều lựa chọn.  \n✅ Chỉ chọn 1 và viết 1 ví dụ cụ thể, đúng ngữ cảnh sản phẩm.\n\nMô tả sản phẩm: "${desc}"\n\nDanh sách lá bài:\n${filteredCards.map(c => `id: ${c.id}, title: ${c.title}, description: ${c.description || c.desc}, note: ${c.note}, examples: ${c.examples?.join(' | ') || '[]'}`).join('\n')}`;
    try {
      const gptResult = await askGPT(desc, prompt);
      // DEBUG: log kết quả AI
      console.log('gptResult:', gptResult);
      // Lấy dòng đầu tiên không rỗng làm id, dòng tiếp theo (nếu có) làm ví dụ
      let aiKey = '';
      let aiIntro = '';
      let lines = gptResult.split('\n').filter(line => line.trim() !== '');
      if (lines.length > 0) {
        aiKey = lines[0].trim();
        if (lines.length > 1) aiIntro = lines[1].trim();
      }
      console.log('aiKey:', aiKey, 'aiIntro:', aiIntro);
      setTimeout(() => {
        const aiDiv = document.getElementById('ai-intro-suggest');
        if (aiDiv) {
          if (aiIntro) {
            aiDiv.innerHTML = `<span style='font-size:1.1em;'>💡 <b>Câu mở đầu gợi ý:</b></span><br>${aiIntro}`;
          } else {
            aiDiv.innerHTML = `<span style='font-size:1.1em;'>💡 <b>Kết quả AI (full):</b></span><br>${gptResult}`;
          }
          aiDiv.classList.add('active');
        }
      }, 100);
      // Sau khi nhận kết quả từ AI, tìm lá bài theo id trong toàn bộ cards
      let found = null;
      if (aiKey) {
        found = cards.find(c => String(c.id) === aiKey);
      }
      if (!found) {
        aiResult.textContent = 'Không tìm thấy lá bài phù hợp.';
        aiBtn.disabled = false;
        return;
      }
      // Đưa lá bài này lên đầu deck và cập nhật preview card
      const idx = deck.findIndex(id => String(id) === String(found.id));
      if (idx > 0) {
        deck.splice(idx, 1);
        deck.unshift(found.id);
      } else if (idx === -1) {
        deck.unshift(found.id);
      }
      renderTopCards();
      aiResult.innerHTML = 'Đã gợi ý ý tưởng phù hợp!';
      // Lưu lại id lá bài đã gợi ý để loại vĩnh viễn trong phiên
      addAISuggestedId(found.id);
      // Cuộn lên vị trí bộ bài nếu trên mobile
      const stack = document.querySelector('.swipe-stack');
      if (stack && window.innerWidth < 700) {
        stack.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    } catch (e) {
      aiResult.textContent = 'Có lỗi khi gọi AI. Vui lòng thử lại.';
      aiResult.classList.add('active');
    }
    aiBtn.disabled = false;
  });
}// Đặt toàn bộ khởi tạo vào DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
  // Khởi tạo quảng cáo
  updateAdContent();

  // Khi load trang, render 2 lá bài đầu tiên
  renderTopCards();

  // Gắn event listener cho swipe (chuột + cảm ứng)
  const previewCardEl = document.getElementById('preview-card');
  previewCardEl.addEventListener('mousedown', onDragStart);
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);
  previewCardEl.addEventListener('touchstart', onDragStart, {passive: false});
  document.addEventListener('touchmove', onDragMove, {passive: false});
  document.addEventListener('touchend', onDragEnd, {passive: false});

  shuffleBtn.addEventListener('click', () => {
    updateAdContent(true);
    playShuffleAnimation(() => {
      const card = pickRandomCard();
      updatePreviewCard(card);
      // Cuộn lên vị trí bộ bài nếu trên mobile
      const stack = document.querySelector('.swipe-stack');
      if (stack && window.innerWidth < 700) {
        stack.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    });
  });

  // Add event listener for preview heart button
  // (nút này được render lại mỗi lần updatePreviewCard)
  // => đã gắn trong updatePreviewCard

  // Initialize heart button state
  updatePreviewHeartState();

  reshuffleBtn.addEventListener('click', () => {
    updateAdContent(true);
    const adLink = getAdAffiliateLink();
    window.open(adLink, '_blank');
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

  shareBtn.addEventListener('click', () => {
    if (!currentCard) return;
    const text = `"${currentCard.title}"\n${currentCard.description}\nVí dụ: ${currentCard.examples[0]}`;
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

  // Auto mobile full screen card
  window.addEventListener('resize', adjustModalWidth);
  adjustModalWidth();
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


