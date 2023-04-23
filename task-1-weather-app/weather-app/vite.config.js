import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
};

