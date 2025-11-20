import { useState } from 'react';

type Props = {
	code: string;
};

export const CopyCodeButton = ({ code }: Props) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy code:', err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className={`copy-code-button ${copied ? 'copied' : ''}`}
			aria-label="Copy code to clipboard"
		>
			{copied ? 'הועתק!' : 'העתק'}
		</button>
	);
};

