
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return defineConfig({
        plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
        server: {
            watch: {
                usePolling: true,
            },
            host: true,
            strictPort: true,
        },
        define: {
            __APP_ENV__:  JSON.stringify('env.REACT_APP_DATE_TIME_KEY'),
        }
    });
}