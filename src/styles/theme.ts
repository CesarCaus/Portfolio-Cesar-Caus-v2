import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { metrics } from '../constants/metrics';

export const lightTheme = {
  colors: colors.light,
  fonts,
  metrics,
};

export const darkTheme = {
  colors: colors.dark,
  fonts,
  metrics,
};

export type AppTheme = typeof lightTheme;
