import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
  },
});

export default withMDX(nextConfig);
