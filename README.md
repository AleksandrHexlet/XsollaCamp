# XsollaCamp
## Тестовое задание для летнего лагеря Xsolla

Версия 1.0.0 https://aleksandrhexlet.github.io/XsollaCamp/

Ссылка на задание проекта : https://github.com/xsolla/xsolla-frontend-school-2020

RUS Сервис предназначен для загрузки расписания концертов в разных городах и с разными датами. Реализован функционал:

Просмотр фото в увеличенном размере при клике по картинке. Лайк картинки Удаление картинки Архитектура : Код разделён на классы. Классы находятся в папке src. Все классы импортированны в index.js. Логика (вызовы классов,слушатели,настройка окружения в зависимости от сборки и т.д ) прописаны в index.js и обёрнута в IIFE.

Код разделен на следующие классы:

class CardList - а) создаёт новую карточку с концертом б) удаляет карточки class Popup - увеличение картинки по клику и закрытие картинки class Card - создаёт карточку на основе template и ставит/удаляет лайки Технологии, используемые в проекте: JavaScript, CSS, HTML, WebPack, NPM, BABEL, GIT.

Возможности:

Командой npm run build в режиме build. Осуществляется сборка в папку dist. Командой npm run dev в режиме development.Запуск кода осуществляется автоматически в localhost 8080. Командой npm run deploy в режиме gh-pages.Запуск кода осуществляется в браузере.

Общие настройки:

Для каждого вида сборки настроено окружение.

Код разделен на модули.

Модули импортирваны в файл index.js, который является входной точкой для webpack.

В packaje.json настроены две зависимости для разработки --- devDependencies и для работы на стороне клиента --- dependencies.

С помощью плагина webpack-md5-hash настроено хеширование и hot reload.

При работе в режиме разработки при внесении изменений в код благодаря флагу --watch в сборке "dev": "webpack-dev-server --mode development --open --watch" вкладка браузера с сайтом будет обновляться каждый раз после сохранения.

После сборки код хранится в папке dist. В финальной сборке перед каждой новой сборкой благодаря команде rimraf dist в сборке "build": "rimraf dist && webpack --mode production" папка dist очищается автоматически.

Для окружение dev настроен локальный серевер с помощью команды webpack-dev-server

ENG

The service is designed to download the schedule of concerts in different cities and with different dates. Implemented functionality:

View a larger photo when clicking on a picture. Like pictures Delete a picture Architecture: The code is divided into classes. Classes are located in the src folder. All classes imported to index.js. Logic (class calls, listeners, configuration of the environment depending on the assembly, etc.) is spelled out in index.js and wrapped in IIFE.

The code is divided into the following classes:

class CardList - a) creates a new concert card b) removes cards class Popup - zoom picture by click and close picture class Card - creates a template-based card and puts/removes likes Technologies used in the project: JavaScript, CSS, HTML, WebPack, NPM, BABEL, GIT.

Opportunities:

Use the npm run build command in build mode. Assembling to the dist folder. With the npm run dev command in development mode. The code starts automatically in localhost 8080. Command npm run deploy in gh-page.Code is run in the browser.

General settings:

An environment is configured for each assembly view.

The code is divided into modules.

The modules are imported into the index.js file, which is the input point for the webpack.

In packaje.json, two dependencies are configured for development --- devDependencies and for client-side --- dependencies.

Using the webpack-md5-hash plugin, hashing and hot reload are configured.

When working in design mode when making code changes due to the --watch flag in the "dev": "webpack-dev-server --mode development --open --watch" assembly, the browser tab with the site will be updated each time after saving.

After assembly, the code is stored in the dist folder. In the final assembly before each new assembly, thanks to the rimraf dist command in the build assembly: "rimraf dist & & webpack --mode production" the dist folder is automatically cleared.

A local server is configured for the dev environment using the webpack-dev-server command
