
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
  icon: string;
}
