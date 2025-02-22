import React, { FC, memo } from '../../lib/teact/teact';
import { Bundles } from '../../util/moduleLoader';

import { OwnProps } from './BotAttachModal';

import useModuleLoader from '../../hooks/useModuleLoader';

const BotAttachModalAsync: FC<OwnProps> = (props) => {
  const { bot } = props;
  const BotAttachModal = useModuleLoader(Bundles.Extra, 'BotAttachModal', !bot);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return BotAttachModal ? <BotAttachModal {...props} /> : undefined;
};

export default memo(BotAttachModalAsync);
