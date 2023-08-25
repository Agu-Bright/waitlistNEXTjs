/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home", // Redirect root to /home
      },
    ];
  },
};
