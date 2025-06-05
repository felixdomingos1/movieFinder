"use client";

interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  const normalizedValue = (value / 2);
  const fullStars = Math.floor(normalizedValue);
  const hasHalfStar = normalizedValue % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-4 h-4 text-yellow-500 fill-current" />
      ))}
      
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <StarIcon className="absolute w-4 h-4 text-gray-300 fill-current" />
          <div className="absolute w-2 h-4 overflow-hidden">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
        </div>
      )}
      
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" />
      ))}
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}