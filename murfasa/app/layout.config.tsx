import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <span className="text-3xl font-semibold">murfasa<span className="text-fd-accent">.</span></span>,
  },
  links: [
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};
