// Danh sách các link affiliate
export const affiliateLinks = [
  {
    id: 1,
    url: 'https://s.shopee.vn/gFEWr4DF0',
    name: 'Shopee Kính mắt',
    category: 'fashion',
    weight: 1
  },
  {
    id: 2,
    url: 'https://s.shopee.vn/gFEWr4DF0',
    name: 'Shopee Kính mắt',
    category: 'fashion',
    weight: 1
  },
  {
    id: 3,
    url: 'https://s.shopee.vn/gFEWr4DF0',
    name: 'Shopee Kính mắt',
    category: 'fashion',
    weight: 1
  },
  {
    id: 4,
    url: 'https://s.shopee.vn/gFEWr4DF0',
    name: 'Shopee Kính mắt',
    category: 'fashion',
    weight: 1
  },
  {
    id: 5,
    url: 'https://s.shopee.vn/gFEWr4DF0',
    name: 'Shopee Kính mắt',
    category: 'fashion',
    weight: 1
  }
];

// Hàm random link affiliate với trọng số
export function getRandomAffiliateLink() {
  // Tạo mảng với trọng số
  const weightedLinks = [];
  affiliateLinks.forEach(link => {
    for (let i = 0; i < link.weight; i++) {
      weightedLinks.push(link);
    }
  });
  
  // Random từ mảng có trọng số
  const randomLink = weightedLinks[Math.floor(Math.random() * weightedLinks.length)];
  return randomLink.url;
}

// Hàm lấy link theo category
export function getAffiliateLinkByCategory(category) {
  const categoryLinks = affiliateLinks.filter(link => link.category === category);
  if (categoryLinks.length === 0) return getRandomAffiliateLink();
  
  return categoryLinks[Math.floor(Math.random() * categoryLinks.length)].url;
} 