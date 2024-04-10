# harmony for todo list
## Service
### 解決する課題
浮いているタスクをどこに追加すればいいのかを迷う

### 解決方法
既存のTODOリストには基本的にはタスクをこなすのに必要な日数が書かれていない
このアプリで既存のTODOリストに必要な日数を足し、その日数に応じてカレンダー形式で描画することにより視覚的にタスクを追加する日程を選ぶことができる

## Tech
### Challenge Techs
- Cloud Flare Workers
- Hone
- OpenAPI
### 使用技術
- Backend
  - Cloud Flare Workers
  - Cloud Flare KV
  - Hono
    - Zod OpenAPI
    - Bun
  - Todoist API
- Frontend
  - Clerk
  - React

## Todo
- [x] setup react
- [] setup clerk
- [] install ts-results
- [] install zod
- [] install eslint