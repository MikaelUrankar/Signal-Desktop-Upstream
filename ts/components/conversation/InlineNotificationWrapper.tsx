import React from 'react';

export type PropsType = {
  id: string;
  conversationId: string;
  isSelected: boolean;
  selectMessage: (messageId: string, conversationId: string) => unknown;
};

export class InlineNotificationWrapper extends React.Component<PropsType> {
  public focusRef: React.RefObject<HTMLDivElement> = React.createRef();

  public setFocus = () => {
    if (this.focusRef.current) {
      this.focusRef.current.focus();
    }
  };

  public setSelected = () => {
    const { id, conversationId, selectMessage } = this.props;

    selectMessage(id, conversationId);
  };

  public componentDidMount() {
    const { isSelected } = this.props;
    if (isSelected) {
      this.setFocus();
    }
  }

  public componentDidUpdate(prevProps: PropsType) {
    if (!prevProps.isSelected && this.props.isSelected) {
      this.setFocus();
    }
  }

  public render() {
    const { children } = this.props;

    return (
      <div
        className="module-inline-notification-wrapper"
        tabIndex={0}
        ref={this.focusRef}
        onFocus={this.setSelected}
      >
        {children}
      </div>
    );
  }
}
