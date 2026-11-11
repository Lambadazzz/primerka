# Сборка исходников

В репозитории GitHub Pages исходники веб-приложения находятся в `source/`, общие модели и шрифты — в корне репозитория. Личные проекты и фото не входят в исходники.

Из `source/` с Node.js 24:

```powershell
npm ci
npm run prepare:public
npm test
npm run build
npm run dev
```

Веб-сборка появится в `source/dist`; локальный адрес — http://127.0.0.1:5180/. Для оболочки Android: `npm run build -- --android`, результат — `dist-android`. Это не создаёт APK.

Дополнительная сквозная проверка в изолированном Chrome:

```powershell
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node tests/browser-photo-eraser.mjs
```

Сервер должен быть запущен отдельно. `CHROME_PATH` позволяет использовать уже установленный Chrome, `PRIMERKA_TEST_URL` — другой локальный порт. Тест создаёт только искусственные изображения и отдельный браузерный профиль; снимки сохраняются в `.qa-output` и не предназначены для публикации.
