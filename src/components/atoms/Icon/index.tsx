import React from 'react';
import { useTheme } from 'styled-components';
import { IconProps } from './types';

import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'background', type = 'feather' }) => {
  const theme = useTheme();

  const themeColor =
    typeof color === 'string' && color in theme.colors
      ? theme.colors[color as keyof typeof theme.colors]
      : color;

  const iconLibraries: Record<string, Record<string, React.ElementType>> = {
    material: MdIcons,
    ion: IoIcons,
    fa: FaIcons,
    feather: FiIcons,
  };

  const icons = iconLibraries[type] || FiIcons;
  const IconComponent = icons[name as keyof typeof icons];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in "${type}" icon set`);
    return null;
  }

  return <IconComponent size={size} color={themeColor} />;
};
