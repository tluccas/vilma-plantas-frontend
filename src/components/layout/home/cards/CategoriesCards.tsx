interface TopCategoriesProps {
    title: string;
    img: string;
    redirectUrl?: string;
}


export default function TopCategories({ title, img, redirectUrl }: TopCategoriesProps) {
    return ( 
        <div className="bg-neutral-primary-soft w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-transparent transition-transform hover:-translate-y-2 rounded-2xl shadow-xl/30 overflow-hidden mx-auto">
             <div className="w-full aspect-5/3 overflow-hidden">
                <img
                src={img}
                className="w-full h-full object-cover"
                loading="lazy"
                />
            </div>
            <div className="p-6 text-center">
                <span className="inline-flex items-center bg-white border border-gray-400 text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm select-none">
                    <i className="bi bi-fire text-orange-500 mr-1"></i>
                    Populares
                </span>
                {/* Redirecionar para /produtos filtrando a categoria */}
                <a href={redirectUrl}>
                    <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
                </a>
                {/* Redirecionar para /produtos filtrando a categoria */}
                <a href={redirectUrl} className="inline-flex items-center text-white! bg-(--button-primary-bg) box-border border border-transparent rounded-3xl hover:bg-(--button-secondary-hover-bg) focus:ring-4 focus:ring-brand-medium shadow-xl font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition duration-300 ease-in-out select-none">
                    Ver Produtos
                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
        </div>
    )
}
        