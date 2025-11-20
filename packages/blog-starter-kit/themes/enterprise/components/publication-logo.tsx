import Link from 'next/link';
import { useAppContext } from './contexts/appContext';

export const PublicationLogo = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const LOGO_PATH = '/assets/logo/logo_trans.png?v=2';
	const BLOG_NAME = 'שורת קוד';

	return (
		<h1 className="relative w-full">
			<Link
				href={'/'}
				aria-label={`${publication.title} blog home page`}
				className="flex flex-row items-center justify-start gap-3"
			>
				<span className="text-2xl font-semibold text-white md:text-3xl whitespace-nowrap">
					{BLOG_NAME}
				</span>
				<img
					className="block h-auto w-auto shrink-0 rounded-full bg-transparent object-cover"
					alt={publication.title}
					src={LOGO_PATH}
					style={{ 
						width: '60px',
						height: '60px',
						backgroundColor: 'transparent',
						background: 'none',
						objectFit: 'cover',
						objectPosition: 'center'
					}}
				/>
			</Link>
		</h1>
	);
};
