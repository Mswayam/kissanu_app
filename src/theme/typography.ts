export const typography = {
  h1: {
    fontSize: 24,
    fontWeight: '800' as const,
    letterSpacing: 0.5,
  },
  h2: {
    fontSize: 20,
    fontWeight: '700' as const,
    letterSpacing: 0.3,
  },
  h3: {
    fontSize: 16,
    fontWeight: '700' as const,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  bodyBold: {
    fontSize: 14,
    fontWeight: '700' as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500' as const,
  },
  tag: {
    fontSize: 10,
    fontWeight: '700' as const,
  },
};

export type Typography = typeof typography;
