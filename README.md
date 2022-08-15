🦄 React, RTK, axios template

---- 

## 💾Установка

```Shell
npm set "@unistory:registry" "https://npm.unistory.app"

npx create-react-app <project-name> --template @unistory/unistory

```

## 📁Файловая структура
- **.husky**
- **.vscode**
- **public** | Папка react в которой будет лежать собранное приложение
- **src**
  - **api** | Folder with `axios` library functional
    - **services** | Separate classes instances with api methods using axios
    - `axiosClient.ts` | Axios instance with api base path and CRUD methods
  - **assets** | Папка с ассетами
    - **fonts** | Шрифты
    - **icons** | Все svg
    - **images** | Изображения
    - **favicon** | Все форматы `favicon`
  - **blockchain** | Папка с логикой работы с блокчейном
    - **hooks** | Хуки содержащии логику работы с блокчейном
    - **utils** | Функции для работы с блокчейном
    - **constants**
  - **common** | Папка с инсрументами приложения используемыми везде
    - **configs**
    - **constants** | Папка с константами (тип файлов - `.constant.ts`)
    - **enums** | Папка с enum (тип файлов - `.enum.ts`)
    - **hooks** | Хуки использующиеся везде (тип файлов - `.hook.ts`)
      - **layout-hooks** | Хуки взаимодействующие с DOM
      - `use-app-dispatch.hook.ts` | Хук для удобного использования dispatch
    - **hoc** | Все общие хоки тут (тип файлов - `.hoc.ts`)
    - **types** | (тип файлов - `.interface.ts`)
    - **providers** | Провайдеры контекста которые логичнее вынести в общие здесь (тип файлов - `.provider.ts`)
    - **utils** | Функции облегчающие жизнь компонентам, выносим сюда повторяющийся код и переиспользуем (тип файлов - `.util.ts`)
    - **enums**
  - **components** | (тип файлов - `.component.ts`, стилей - `.module.scss`)
    - **shared** | Компоненты используемые по всему приложению
      - **icon**
        - `icon.component.jsx` | переиспользуемый компонент иконки
        - `icon-types.constant.js` | импорт всех svg здесь
    - `app.router.tsx` | компонент react router
  - **layouts** | все возможные layouts приложения (тип файлов - `.layout.ts`)
  - **pages** | Папка со всеми страницами приложения
    - **home** (тип файлов - `.page.ts`, `.module.scss`)
      - `index.page.tsx`| компонент страницы **МИНИМУМ ЛОГИКИ**
      - `home.module.scss` | стили для страницы и ее подкомпонентов
      - **hooks** | 
      - **components** | Папка для хранения компонентов из которых состоит страница (тип файлов - `.component.ts`)
  - **store** | Папка с логикой редакса 
    - **users** | Пример части редакса (тип файлов - `.actions.ts`, `.slice.ts`, `.interface.ts`)
      - `users.slice.ts` | Хранилище части редакса
      - `users.actions.ts` | actions и thunks
      - `users.interface.ts` | интерфейсы для этой чатси стора
    - `root.reducer.ts` | содержит все слайсы
    - `store.ts` | создание стора редакс
  - **styles** | папка с глобальными стилями
    `global.scss` | все из папки styles импортируем сюда
  - `App.tsx` | высший компонент
  - `index.tsx` | точка входа в приложение

## 📖Библиотеки

1. [axios](https://axios-http.com/docs/intro)
2. [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
3. [react](https://reactjs.org/docs/getting-started.html)
4. [react-router](https://reactrouter.com/docs/en/v6/getting-started/overview)
5. [typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
6. [usedapp](https://usedapp-docs.netlify.app/docs)
7. [husky](https://typicode.github.io/husky/#/)
8. [use-hooks](https://usehooks-ts.com/)

## 🆔Наименование
**Данные соглашения были приняты для максимального сходства проектов на `React` и `Next`**


### 1. cebab-case, dot notaion
  - слова разделяются дефисом
  - все маленькие буквы
  - **названия файла**`.`**тип файла**`.`**(ts | scss)** и другие... (например file.interface.ts)

### 2. Типы
  1. Хоки начинать с приставки `with-` c типом `.hoc.tsx`
  2. Хуки начинать с приставки `use-` c типом `.hook.tsx`
  3. Константы - `.constant.ts`
  4. Services - `.service.ts`
  5. Utils - `.ts`
  6. Slices - `.slice.ts`
  7. Actions - `.actions.ts`
  8. Styles - `.module.scss`
  9. Pages - `index.page.tsx`
  10. Layouts - `.layout.tsx`
  11. RTK query api - `.api.ts`
  12. Models - `.model.ts`
  13. DTO - `.dto.ts`
  14. Modals - `.modal.tsx` | при создании модалки которая будет содержать в себе много логиги
  15. Enums - `.enum.ts`

### 3. Страницы  
  1. Имена папок страниц - `cebab case`
  2. В каждой папке со страницей должен присутстовать файл `index.page.ts` в котором находится сам компонент страницы => *пример* `pages/about/index.page.ts` 


## 📜Conventions 
1. Никаких относительных импортов!!! то есть не должно быть такого `'../../../'`. Все делаем через настроенные **alias**, при необходимости можно добавить новые alias в проект
2. Для идентичности проектов `React` и `Next` пришлось выбрать варант наименования страниц где в каждой папке со страницей лежит файл `index.page.ts`

## 🐺Husky

Для маленьких проектов `Husky` будет излишним, поэтому от него можно легко избавится.
Для этого удалите папку `.husky` в корне проекта, и все, надоедливый охранник коммитов покинет проект.

## Redux

Каждая часть глобалбного стора должна быть разделена по слайсам
Not all data must be in global state!


## ⚠️Warning section

**useDapp** может генерировать большое количество запросов к ноде. Большое количество запросов может привести к скоропостижному падению ноды. В данном шаблоне указана задержка в 20 секунд для запросов, которые идут в фоне, при подключении библиотеки. Но помимо них могут быть и другие, которые возникают при использовании библиотеки (обращение к методам контракта, подписки). 

**ПО этой причине при использовании useDapp нужно обязательно проверять не уходит ли десяток запросов каждую секунду!**


## 🔥Если есть желание улучшить конфиг

1. запустите `git clone https://github.com/Neca-development/react-rtk-template.git`
2. сделайте изменения **вне** `template` папки
3. повысьте уровень **package.json** в поле `version`
4. если были изменены `dependencies` или `devDependencies` перенесить новый список в файл `template.json` в корне
5. запустите следующие команды:
6. `node prepublish.js`
7. `npm login --registry https://npm.unistory.app`
8. _login_ и _password_ можно посмотреть в `Notion`
9. `npm publish --registry https://npm.unistory.app`
10. Незабудьте залить изменения в наш репозиторий   
`git add .`  
`git commit -m "feat: some changes"`  
`git push origin <branch name>`  

