// Dữ liệu nội dung quảng cáo
export const adContent = {
  header: {
    title: 'Mua sắm Shopee',
    product: 'Kính mắt thời trang',
    description: 'Khám phá ngàn ưu đãi hấp dẫn',
    cta: 'Mua ngay',
    icon: 'data/kinh.png',
    link: 'https://s.shopee.vn/gFEWr4DF0'
  },
  content: {
    title: 'Flash Sale',
    product: 'Kính mắt thời trang',
    description: 'Giảm đến 90%',
    cta: 'Xem ngay',
    icon: 'data/kinh.png',
    link: 'https://s.shopee.vn/gFEWr4DF0'
  },
  sidebar: {
    title: 'Ưu đãi đặc biệt',
    product: 'Kính mắt thời trang',
    description: 'Miễn phí vận chuyển',
    cta: 'Khám phá',
    icon: 'data/kinh.png',
    link: 'https://s.shopee.vn/gFEWr4DF0'
  },
  footer: {
    title: 'Shopee - Mua sắm online',
    product: 'Kính mắt thời trang',
    description: 'Hàng triệu sản phẩm, giá tốt nhất',
    cta: 'Truy cập ngay',
    icon: 'data/kinh.png',
    link: 'https://s.shopee.vn/gFEWr4DF0'
  }
};

// Danh sách các biến thể quảng cáo
export const adVariants = [
  {
    id: 1,
    name: 'Kính mắt thời trang',
    header: {
      title: 'Mua sắm Shopee',
      product: 'Kính mắt thời trang',
      description: 'Khám phá ngàn ưu đãi hấp dẫn',
      cta: 'Mua ngay',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    content: {
      title: 'Flash Sale',
      product: 'Kính mắt thời trang',
      description: 'Giảm đến 90%',
      cta: 'Xem ngay',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    sidebar: {
      title: 'Ưu đãi đặc biệt',
      product: 'Kính mắt thời trang',
      description: 'Miễn phí vận chuyển',
      cta: 'Khám phá',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    footer: {
      title: 'Shopee - Mua sắm online',
      product: 'Kính mắt thời trang',
      description: 'Hàng triệu sản phẩm, giá tốt nhất',
      cta: 'Truy cập ngay',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    }
  },
  {
    id: 2,
    name: 'Kính mắt nam',
    header: {
      title: 'Shopee Fashion',
      product: 'Kính mắt nam cao cấp',
      description: 'Phong cách đàn ông hiện đại',
      cta: 'Khám phá',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    content: {
      title: 'Hot Sale',
      product: 'Kính mắt nam cao cấp',
      description: 'Giảm giá sốc 70%',
      cta: 'Mua ngay',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    sidebar: {
      title: 'Thời trang nam',
      product: 'Kính mắt nam cao cấp',
      description: 'Chất lượng đảm bảo',
      cta: 'Xem thêm',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    footer: {
      title: 'Shopee - Thời trang nam',
      product: 'Kính mắt nam cao cấp',
      description: 'Phong cách đàn ông thành đạt',
      cta: 'Truy cập',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    }
  },
  {
    id: 3,
    name: 'Kính mắt nữ',
    header: {
      title: 'Shopee Beauty',
      product: 'Kính mắt nữ thời trang',
      description: 'Làm đẹp mỗi ngày',
      cta: 'Mua sắm',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    content: {
      title: 'Beauty Sale',
      product: 'Kính mắt nữ thời trang',
      description: 'Giảm đến 80%',
      cta: 'Xem ngay',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    sidebar: {
      title: 'Làm đẹp',
      product: 'Kính mắt nữ thời trang',
      description: 'Tặng kèm khăn lau',
      cta: 'Khám phá',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    },
    footer: {
      title: 'Shopee - Làm đẹp',
      product: 'Kính mắt nữ thời trang',
      description: 'Nâng tầm vẻ đẹp của bạn',
      cta: 'Truy cập ngay',
      icon: 'data/kinh.png',
      link: 'https://s.shopee.vn/gFEWr4DF0'
    }
  }
];

// Hàm lấy nội dung quảng cáo random
export function getRandomAdContent() {
  return adVariants[Math.floor(Math.random() * adVariants.length)];
}

// Hàm lấy nội dung quảng cáo theo ID
export function getAdContentById(id) {
  return adVariants.find(variant => variant.id === id) || adVariants[0];
}

// Hàm lấy link affiliate từ nội dung quảng cáo
export function getAdAffiliateLink() {
  const randomAd = getRandomAdContent();
  return randomAd.header.link; // Lấy link từ header làm mặc định
}

// Hàm cập nhật nội dung quảng cáo
export function updateAdContent() {
  const randomAd = getRandomAdContent();
  
  // Cập nhật header
  const headerTitle = document.querySelector('.ad-shopee-title');
  const headerProduct = document.querySelector('.ad-shopee-product');
  const headerDesc = document.querySelector('.ad-shopee-desc');
  const headerCta = document.querySelector('.ad-shopee-cta');
  const headerBanner = document.querySelector('.ad-shopee');
  
  if (headerTitle) headerTitle.textContent = randomAd.header.title;
  if (headerProduct) headerProduct.textContent = randomAd.header.product;
  if (headerDesc) headerDesc.textContent = randomAd.header.description;
  if (headerCta) headerCta.textContent = randomAd.header.cta;
  if (headerBanner) headerBanner.href = randomAd.header.link;
  
  // Cập nhật content
  const contentTitle = document.querySelector('.ad-shopee-square-title');
  const contentProduct = document.querySelector('.ad-shopee-square-product');
  const contentDesc = document.querySelector('.ad-shopee-square-desc');
  const contentCta = document.querySelector('.ad-shopee-square-cta');
  const contentBanner = document.querySelector('.ad-shopee-square');
  
  if (contentTitle) contentTitle.textContent = randomAd.content.title;
  if (contentProduct) contentProduct.textContent = randomAd.content.product;
  if (contentDesc) contentDesc.textContent = randomAd.content.description;
  if (contentCta) contentCta.textContent = randomAd.content.cta;
  if (contentBanner) contentBanner.href = randomAd.content.link;
  
  // Cập nhật sidebar
  const sidebarTitle = document.querySelector('.ad-shopee-sidebar-title');
  const sidebarProduct = document.querySelector('.ad-shopee-sidebar-product');
  const sidebarDesc = document.querySelector('.ad-shopee-sidebar-desc');
  const sidebarCta = document.querySelector('.ad-shopee-sidebar-cta');
  const sidebarBanner = document.querySelector('.ad-shopee-sidebar');
  
  if (sidebarTitle) sidebarTitle.textContent = randomAd.sidebar.title;
  if (sidebarProduct) sidebarProduct.textContent = randomAd.sidebar.product;
  if (sidebarDesc) sidebarDesc.textContent = randomAd.sidebar.description;
  if (sidebarCta) sidebarCta.textContent = randomAd.sidebar.cta;
  if (sidebarBanner) sidebarBanner.href = randomAd.sidebar.link;
  
  // Cập nhật footer
  const footerTitle = document.querySelector('.ad-shopee-footer-title');
  const footerProduct = document.querySelector('.ad-shopee-footer-product');
  const footerDesc = document.querySelector('.ad-shopee-footer-desc');
  const footerCta = document.querySelector('.ad-shopee-footer-cta');
  const footerBanner = document.querySelector('.ad-shopee-footer');
  
  if (footerTitle) footerTitle.textContent = randomAd.footer.title;
  if (footerProduct) footerProduct.textContent = randomAd.footer.product;
  if (footerDesc) footerDesc.textContent = randomAd.footer.description;
  if (footerCta) footerCta.textContent = randomAd.footer.cta;
  if (footerBanner) footerBanner.href = randomAd.footer.link;
} 