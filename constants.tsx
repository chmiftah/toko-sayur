
import { Product, Testimonial, SubscriptionPlan } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Soup Starter Pack',
    description: 'Carrots, potatoes, celery, and onions perfect for a hearty soup.',
    price: 25000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFiYkF4rAOgERCSRiG0Kv8_5yW6uGUWOwX-aVjNeTEXclcE1t0lnA456_QEHX9dJ7Ks0f5sIh9O_j88aiMO7UOe7vwjmgmyMLgsPflndc11PqlS3YRr8_As-XDwEczYWqmuUc_Jm_glgsxDMpv-pfQDDOk6yP2FHDuXg-T-wf4vcZS8og2rdbfGQagb3D5w0RBneMd6ts37GClKyt8gkUUagOYZKm495SR-iwTxyDspmLRg8__8Y3ldrFLC52nwU7c8SYc6TTxSrs',
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Complete Salad Kit',
    description: 'Crisp lettuce, cherry tomatoes, cucumber, and dressing mix.',
    price: 30000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfR-_tVOAuSlowh0i4KKkRepPAOxi21yB2KvFECozzbjYTVJL2xfDRJUWITqW7u-v9G7xzEKbMLLUEYvxBIvVQeHQz4T5IwvxWh1ezbh_QBCUPsIn_xss32AETOg933Tqe7weL9UJOLp3IrJl5KGXM1bMBu6_tYcWOdXI6cZE_x6kZ2bh6PNykKjjuqPpW_pZzwZtCyfzWtPxYelgZQdU3Uog6eGvlchieprO8xKQvAzsnBnZBFzQZ0_txvpX5LE3rqp1FCljsEKQ',
    tag: 'New'
  },
  {
    id: '3',
    name: 'Stir Fry Mix',
    description: 'Broccoli, baby corn, snap peas, and bell peppers ready to wok.',
    price: 28000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCECY6DMQNGYodXPGkNjppc-SjJ10pyv4cXVJOlFktrfS-3VvMMc_uc177fHkz-Ibdub4BDy-KRhTCNjZQC_mwjOm8BX5WwGGx3VQ9eefnm0Y3WVYVKiB1CoP1nrDphH3qpJDAHgNTMaXzTgBAE8Ri0LI_KjNLri-Ki66iuex6XYl-1WZyUg0ZZkb0a1SfGPPuGd78b8bUgYt2FMgABAzjaAWttU3xHZu5sK85vSZnYOVP7VSU9GhefmijZpMApkjzQhKBR7HHBUlI'
  },
  {
    id: '4',
    name: 'Tropical Fruit Box',
    description: 'Seasonal fruits including mango, papaya, and bananas.',
    price: 55000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjDcfobErMmWmLDzDPN4pbaEv-5W262wqtfbElMELCWR2ICXJ_TgWVhzE_7sNk57DbAaMAMtrq2ay4-stdd269We2-wkwFBHQ_pX-ndoEgh_x2ePWG1GW0ux9xnvZzuuNA1eOYLM8iBeJ90V_ZV6ocPgM88_s66eQ2KA7c1bHQ6YlHhkr0aRd9x2rA7UuSTV2YNUXEZhFN8dF0xwcTb6UweJMLOLnHxCdPsmk-xcFrPP0hdJWhaiOb_aGvA1iZ_w8mtC3pIKRMoIU'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sari Wulandari',
    role: 'Regular Customer',
    quote: '"The vegetables are always so crisp and fresh. It\'s like I have my own garden without the work!"',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyoWDzDUE0NWOVd_7aGro8w30ktojTzg8Jc9bGHjtaJaNJVW95tIPmj5HRPAOD6TDIJHFDNzXIN4QlHW2MeOyBs6gyki1KZca_xtwYla2--_rVTmvYuYCzbmZRTynwoxjv7QAT9uHwZtdMTTXzUKYqpmNURYNNJrkFs2xwYTY_Sy_D7XTb1Mr9bgpKQx70dx5Rbbll7l1bgGtrNZi1PK-JBjU5Db2czOXOQX0tN3pDneTrHKJGPN5lrkY9D0S7H0xrJkWASd7V938'
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Weekly Subscriber',
    quote: '"Ordering via WhatsApp is super convenient. The delivery guy is always polite and on time."',
    rating: 4.5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk0GS9XlogzmPT2rLR9No3c9PtChgMVY_N53sHqx8Lbx4YzlcpxXwWExTCLa94fLkeJkWOEdOivMvdf01giSbx2Dux9HSDBIvb20RdRBzTFKdJ6W0Abtu9WUu2__gyQOWqEKT1KWjBoANzOTulrvspuTAi43QtezMdZ2CBK6mOjTZXKMCJ1DxPacryZSqBzL1GVl-q7cU85LrUejKqApkuYKxJOWxsGQndZy9aPU7tVt1gPGaoZ_Bv914UOHUWiNkU3ns1zysp9a8'
  },
  {
    id: '3',
    name: 'Maya Putri',
    role: 'Working Mom',
    quote: '"I love the soup bundles. Makes cooking dinner so much faster after work. Highly recommended!"',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZZYlLCp_E4CYOSqCpniZIfB__hh3q1s6sg-3ZRwlq2RB5P3GWebiFDIOgOD0F_rKqALGpDAVzIg6sJwVMmU-YU4XhmjsZMaEWQY76c05dQFKghYo9pIca2TWeDS1rSnKfAArRxEApgHkLD9eU-fOaAsjX2qOGiZGATWI0fQqgfEyBBOsfBQKQ9HpeDSJGY4scajlxw7YVHvnxGRNFJUXWNtrvz5WMG2_F2_Iq5ZKKTIOSc2t89888lmvtDXXrLqOliQo8P7Fmvk8'
  }
];

export const SUBSCRIPTIONS: SubscriptionPlan[] = [
  {
    id: 'weekly',
    name: 'Weekly Box',
    description: 'Perfect for individuals or couples. Get a curated box of basics every Monday.',
    price: '100k',
    unit: '/week',
    features: ['5kg Mixed Veggies', 'Free Delivery', 'Recipe Card Included'],
    icon: 'calendar_view_week'
  },
  {
    id: 'family',
    name: 'Family Daily',
    description: 'For families who cook daily. Fresh ingredients delivered every morning.',
    price: '450k',
    unit: '/month',
    features: ['Daily Morning Drop-off', 'Custom Selection', 'Priority Support', '10% Off Add-ons'],
    popular: true,
    icon: 'light_mode'
  }
];
