/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Nonaktifkan optimisasi gambar jika menggunakan external host seperti ibb.co
  },
  // Hapus experimental flags yang tidak diperlukan
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        }
      ],
    },
  ],
};

// Merge dengan user config jika ada
const userConfig = (async () => {
  try {
    return (await import('./v0-user-next.config')).default;
  } catch {
    return {};
  }
})();

export default {
  ...baseConfig,
  ...(await userConfig),
};
