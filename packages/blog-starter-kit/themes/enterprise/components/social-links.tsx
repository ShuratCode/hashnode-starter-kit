import { useAppContext } from './contexts/appContext';
import { FacebookSVG, GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, TelegramSVG, XSVG } from './icons';

export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const hasSocialLinks = publication?.links
		? !Object.values(publication.links!).every((val) => val === '')
		: false;
	const hashnodeRssUrl = publication?.url ? `${publication.url}/rss.xml` : '/rss.xml';
	return (
		<>
			<div
				className={`col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
					isSidebar ? 'justify-start' : 'justify-end'
				}`}
			>
				{hasSocialLinks && (
					<>
						{publication.links?.twitter && (
							<a
								href={publication.links.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<XSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.github && (
							<a
								href={publication.links.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Github, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<GithubSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.linkedin && (
							<a
								href={publication.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<LinkedinSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.hashnode && (
							<a
								href={publication.links.hashnode}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Hashnode, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<HashnodeSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
					</>
				)}

				<a
					href="https://t.me/thecodeline"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Find us on Telegram, external website, opens in new tab"
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:text-[#229ED9] dark:border-neutral-800 dark:hover:bg-neutral-600 dark:hover:text-[#229ED9]"
				>
					<TelegramSVG className="h-5 w-5 stroke-current" />
				</a>
				<a
					href="https://www.facebook.com/TheCodeLineBlog"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Find us on Facebook, external website, opens in new tab"
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 hover:text-[#1877F2] dark:border-neutral-800 dark:hover:bg-neutral-600 dark:hover:text-[#1877F2]"
				>
					<FacebookSVG className="h-5 w-5 stroke-current" />
				</a>

				<a
					href={hashnodeRssUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open blog XML Feed, opens in new tab"
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<RssSVG className="h-5 w-5 stroke-current" />
				</a>
			</div>
		</>
	);
};
