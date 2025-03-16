# Delivery Order Application

Пример приложения для создания, отображения и просмотра деталей заказов доставки.

## Необходимые шаги для запуска:

1. Склонировать репозиторий.

2. В файле `appsettings.json` указать свою строку подключения к PostgreSQL.

3. В папке с проектом `DeliveryOrder` открыть консоль и выполнить:
dotnet restore dotnet ef database update dotnet run
Приложение запустится на `http://localhost:5000`.

4. Перейти в папку `delivery-order-client`, установить зависимости и запустить фронтенд:
cd delivery-order-client npm install npm start

5. Открыть в браузере `http://localhost:3000`, чтобы пользоваться React-приложением.
