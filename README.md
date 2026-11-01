# TESLA WORLD — Stage 4

Frontend-only premium React platform (Demo · LocalStorage)

## What works

### Public
- Home (cinematic)
- Vehicles listing + detail (7 models)
- Configurator Studio (colors, wheels, interior, price, save)
- Login / Register
- **Marketplace** — product grid, categories, product detail, Cart (add/remove/qty), checkout demo
- **Energy** — Solar, Solar Roof, Powerwall, Megapack overview
- **Technology** — Autopilot, FSD, AI, Battery, OTA, Safety
- **Robotics** — Optimus overview
- Dark / Light theme

### Owners Center
- Profile, saved configs, quick links

### Admin (`/admin` — admin login required)
- Dashboard, Users, Vehicles management
- Sidebar navigation, role guard

## Login

Login sahifasida faqat parol kiritiladi. Admin paroli kodda saqlangan, sahifada ko‘rsatilmaydi.


## Start
```bash
unzip TESLA-WORLD-Stage4.zip
cd tesla-world
npm install
npm run dev
```

## Main routes
/ · /vehicles · /vehicles/:id · /configurator
/store · /store/:id · /store/cart
/energy · /technology · /robotics
/owners · /login · /register
/admin · /admin/users · /admin/vehicles

Fan demo project — not affiliated with Tesla, Inc.
