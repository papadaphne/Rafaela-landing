import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imageUrls: string[];
  category: string;
  title: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}