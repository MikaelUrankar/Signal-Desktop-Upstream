import React from 'react';
import classNames from 'classnames';

import { ContactType } from '../../types/Contact';

import { LocalizerType } from '../../types/Util';
import {
  renderAvatar,
  renderContactShorthand,
  renderName,
} from './_contactUtil';

interface Props {
  contact: ContactType;
  i18n: LocalizerType;
  isIncoming: boolean;
  withContentAbove: boolean;
  withContentBelow: boolean;
  onClick?: () => void;
}

export class EmbeddedContact extends React.Component<Props> {
  public render() {
    const {
      contact,
      i18n,
      isIncoming,
      onClick,
      withContentAbove,
      withContentBelow,
    } = this.props;
    const module = 'embedded-contact';
    const direction = isIncoming ? 'incoming' : 'outgoing';

    return (
      <button
        className={classNames(
          'module-embedded-contact',
          withContentAbove
            ? 'module-embedded-contact--with-content-above'
            : null,
          withContentBelow
            ? 'module-embedded-contact--with-content-below'
            : null
        )}
        onClick={(event: React.MouseEvent) => {
          if (onClick) {
            event.stopPropagation();
            event.preventDefault();

            onClick();
          }
        }}
      >
        {renderAvatar({ contact, i18n, size: 52, direction })}
        <div className="module-embedded-contact__text-container">
          {renderName({ contact, isIncoming, module })}
          {renderContactShorthand({ contact, isIncoming, module })}
        </div>
      </button>
    );
  }
}
