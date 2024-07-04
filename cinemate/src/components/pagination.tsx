import { Pagination } from 'flowbite-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className='flex overflow-x-auto sm:justify-center '>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => onPageChange(page)}
        showIcons
      />
    </div>
  );
};

export default PaginationComponent;
