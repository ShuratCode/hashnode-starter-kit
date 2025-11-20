import React from 'react';

export default class TelegramSVG extends React.Component {
	render() {
		return (
			<svg className={this.props.className} fill="none" viewBox="0 0 24 24">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M21 5L2 12.5l7 1.5M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.5-1.5L21 5"
				/>
			</svg>
		);
	}
}

