/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import ClayLinkContext from './Context';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Flag to indicate if link should be borderless.
	 */
	borderless?: boolean;

	/**
	 * Determines how the link is displayed.
	 */
	displayType?: 'primary' | 'secondary';

	/**
	 * Flag to indicate if link should be monospaced.
	 */
	monospaced?: boolean;

	/**
	 * Flag to indicate if link need have an outline.
	 */
	outline?: boolean;
}

const ClayLink = React.forwardRef<HTMLAnchorElement, IProps>(
	(
		{
			borderless,
			children,
			className,
			displayType,
			monospaced,
			outline,
			rel,
			target,
			...otherProps
		}: IProps,
		ref
	) => {
		const TagOrComponent = React.useContext(ClayLinkContext);

		if (target && !rel) {
			rel = 'noreferrer noopener';
		}

		return (
			<TagOrComponent
				className={classNames(className, {
					'link-monospaced': monospaced,
					'link-outline': outline,
					'link-outline-borderless': borderless,
					[`link-${displayType}`]: displayType && !outline,
					[`link-outline-${displayType}`]: displayType && outline,
				})}
				ref={ref}
				rel={rel}
				target={target}
				{...otherProps}
			>
				{children}
			</TagOrComponent>
		);
	}
);

ClayLink.displayName = 'ClayLink';

export {ClayLinkContext};

export default ClayLink;
