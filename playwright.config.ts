import {defineConfig} from '@playwright/test';
import {existsSync} from 'node:fs';
export default defineConfig({testDir:'./tests/browser',workers:1,use:{baseURL:process.env.PLAYWRIGHT_BASE_URL||'http://localhost:3000',headless:true,launchOptions:{executablePath:process.env.CHROME_PATH||(existsSync('/usr/bin/google-chrome')?'/usr/bin/google-chrome':undefined),args:['--no-sandbox']}},reporter:'list'});
