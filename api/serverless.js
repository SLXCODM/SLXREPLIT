import { app, setupPromise } from '../../dist/index.js';

export default async (req, res) => {
    await setupPromise;
    app(req, res);
};
