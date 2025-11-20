import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo, useEffect, useRef } from 'react';

type Props = {
	contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
	const content = markdownToHtml(contentMarkdown);
	const containerRef = useRef<HTMLDivElement>(null);
	useEmbeds({ enabled: true });

	useEffect(() => {
		if (!containerRef.current) return;

		// Add copy buttons to all code blocks
		const codeBlocks = containerRef.current.querySelectorAll('pre code');
		codeBlocks.forEach((codeElement) => {
			const preElement = codeElement.parentElement;
			if (!preElement || preElement.querySelector('.copy-code-button')) return;

			// Ensure LTR direction
			preElement.setAttribute('dir', 'ltr');
			preElement.setAttribute('style', 'direction: ltr !important; text-align: left !important;');
			codeElement.setAttribute('dir', 'ltr');
			codeElement.setAttribute('style', 'direction: ltr !important; text-align: left !important;');

			// Create copy button
			const copyButton = document.createElement('button');
			copyButton.className = 'copy-code-button';
			copyButton.setAttribute('aria-label', 'Copy code to clipboard');
			copyButton.textContent = 'העתק';
			copyButton.setAttribute('dir', 'rtl');

			// Get code text
			const codeText = codeElement.textContent || '';

			// Add click handler
			copyButton.addEventListener('click', async () => {
				try {
					await navigator.clipboard.writeText(codeText);
					copyButton.textContent = 'הועתק!';
					copyButton.classList.add('copied');
					setTimeout(() => {
						copyButton.textContent = 'העתק';
						copyButton.classList.remove('copied');
					}, 2000);
				} catch (err) {
					console.error('Failed to copy code:', err);
				}
			});

			preElement.appendChild(copyButton);
		});

		// Ensure all inline code is LTR
		const inlineCodes = containerRef.current.querySelectorAll('code:not(pre code)');
		inlineCodes.forEach((codeElement) => {
			codeElement.setAttribute('dir', 'ltr');
			codeElement.setAttribute('style', 'direction: ltr !important; text-align: left !important;');
		});
	}, [content]);

	return (
		<div
			ref={containerRef}
			className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
