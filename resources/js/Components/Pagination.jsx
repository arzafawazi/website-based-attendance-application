import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    return (
        <nav className="flex justify-center sm:justify-end" aria-label="Pagination">
            <div className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                {links.map((link, index) => (
                    link.url === null ? (
                        <span
                            key={index}
                            className="relative inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-4 sm:leading-5 rounded-md"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <Link
                            key={index}
                            href={link.url}
                            className={
                                'relative inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-4 sm:leading-5 rounded-md ' +
                                (link.active
                                    ? 'z-10 bg-indigo-600 border-indigo-500 text-white focus:ring-indigo-500'
                                    : 'hover:text-white hover:bg-indigo-600 focus:ring-indigo-500')
                            }
                            aria-current={link.active ? 'page' : undefined}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                ))}
            </div>
        </nav>
    );
}
