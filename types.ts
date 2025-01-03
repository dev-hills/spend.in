export type PricingData = {
  id: number;
  icon: string;
  plan: string;
  description: string;
  monthPrice: string;
  yearPrice: string;
  details: string;
  perks: string[];
  noPerks?: string[];
  isPopular?: boolean;
};

export type PricingCardProps = {
  data: PricingData;
  enabled: boolean;
};
