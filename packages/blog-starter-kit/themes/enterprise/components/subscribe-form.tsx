import request from 'graphql-request';
import { useRef, useState } from 'react';
import {
	SubscribeToNewsletterDocument,
	SubscribeToNewsletterMutation,
	SubscribeToNewsletterMutationVariables,
	SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const SubscribeForm = () => {
	const [status, setStatus] = useState<SubscribeToNewsletterPayload['status']>();
	const [requestInProgress, setRequestInProgress] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const { publication } = useAppContext();

	const subscribe = async () => {
		const email = inputRef.current?.value;
		if (!email) return;

		setRequestInProgress(true);

		try {
			const data = await request<
				SubscribeToNewsletterMutation,
				SubscribeToNewsletterMutationVariables
			>(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
				input: { publicationId: publication.id, email },
			});
			setRequestInProgress(false);
			setStatus(data.subscribeToNewsletter.status);
		} catch (error) {
			const message = (error as any).response?.errors?.[0]?.message;
			if (message) {
				window.alert(message);
			}
			setRequestInProgress(false);
		}
	};
	return (
		<>
			{!status && (
				<div className="relative w-full rounded-full bg-white p-2 dark:bg-neutral-950">
					<input
						ref={inputRef}
						type="email"
						placeholder="john@doe.com"
						className="focus:outline-primary-600 dark:focus:outline-primary-500 start-3 top-3 w-full rounded-full p-3 text-base text-black outline-none dark:bg-neutral-950 dark:text-neutral-50"
					/>
					<button
						disabled={requestInProgress}
						onClick={subscribe}
						className="bg-primary-600 dark:bg-primary-600 absolute end-3 top-3 rounded-full px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80"
					>
						הרשמה
					</button>
				</div>
			)}
			{status === 'PENDING' && (
				<div className="relative w-full p-2 text-center">
					<p className="font-bold text-green-600 dark:text-green-500">כמעט סיימנו!</p>
					<p className="font-medium text-slate-600 dark:text-neutral-300">
						בדוק את תיבת הדואר הנכנס שלך ופתח את אימייל האישור. לחץ על{' '}
						<strong>&quot;אישור והרשמה&quot;</strong> כדי להשלים את ההרשמה. תודה שהצטרפת!
					</p>
				</div>
			)}
		</>
	);
};
