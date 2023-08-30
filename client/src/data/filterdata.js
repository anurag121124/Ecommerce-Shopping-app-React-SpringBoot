export const color = [
  "white",
  "black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "color",
    options: [
      { value: "white", label: "white" },
      { value: "black", label: "black" },
      { value: "Red", label: "marun" },
      { value: "Being", label: "Being" },
      { value: "Pink", label: "Pink" },
      { value: "Green", label: "Green" },
      { value: "Yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159-₹399" },
      { value: "399-999", label: "₹399-₹999" },
      { value: "999-1999", label: "₹999-₹1999" },
      { value: "1999-2999", label: "₹1999-₹2999" },
      { value: "3999-4999", label: "₹3999-₹4999" },
    ],
  },
  {
    id: "discount",
    name: "Disount Range",
    options: [
      { value: "10", label: "20% Above" },
      { value: "20", label: "20% Above" },
      { value: "30", label: "30% Above" },
      { value: "40", label: "40% Above" },
      { value: "50", label: "50% Above" },
      { value: "60", label: "60% Above" },
      { value: "70", label: "70% Above" },
      { value: "80", label: "80% Above" },
    ],
  },
  {
    id: "stock",
    name: "Avialability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out of stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low To High", query: "price_low", current: false },
  { name: "Price: High to low", query: "price_high", current: false },
];
