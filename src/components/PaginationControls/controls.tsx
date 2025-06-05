'use client';

import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginationControls({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onPageChange: (page: number) => void;
}) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        end = maxVisible;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - maxVisible + 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between sm:justify-center gap-2 sm:gap-4 mt-6">
      <Button
        variant="outline"
        disabled={!hasPrevPage}
        onClick={() => hasPrevPage && onPageChange(currentPage - 1)}
        className="flex-1 sm:flex-none min-w-[100px]"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Anterior
      </Button>

      <div className="flex flex-wrap justify-center gap-2">
        {getPageNumbers().map((pageNum) => (
          <Button
            key={pageNum}
            variant={pageNum === currentPage ? 'default' : 'outline'}
            onClick={() => pageNum !== currentPage && onPageChange(pageNum)}
            className="min-w-[40px] px-3"
          >
            {pageNum}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        disabled={!hasNextPage}
        onClick={() => hasNextPage && onPageChange(currentPage + 1)}
        className="flex-1 sm:flex-none min-w-[100px]"
      >
        Próximo
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}