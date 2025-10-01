import './PaginationComponent.css';
import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default function PaginationComponent({ currentPage, totalPages, searchParams }: PaginationProps) {
    const pagesToShow = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
        pagesToShow.push(i);
    }
    const createPageUrl = (page: number) => {
        const validSearchParams: Record<string, string> = {};

        if (searchParams) {
            for (const [key, value] of Object.entries(searchParams)) {
                if (typeof value === 'string') {
                    validSearchParams[key] = value;
                }
            }
        }

        const params = new URLSearchParams(validSearchParams);
        params.set('page', page.toString());
        return `/?${params.toString()}`;
    };

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <Link className='paginBtn' href={createPageUrl(currentPage - 1)}>
                    ←
                </Link>
            )}
            {currentPage < totalPages && (
                <Link className='paginBtn' href={createPageUrl(currentPage + 1)}>
                    →
                </Link>
            )}
        </div>
    );
};
