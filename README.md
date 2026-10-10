# Avazbek Tulovov — shaxsiy brend sayti

Statik sayt: build yoki server dasturlari shart emas, juda tez yuklanadi.
Sayt uch tilda ishlaydi (UZ / RU / EN), blog va media bo‘limlari esa CMS orqali boshqariladi.

## Tuzilma

```
index.html            Bosh sahifa (barcha bo‘limlar)
insights.html         Blog — barcha maqolalar, kategoriya filtri
post.html?slug=...    Bitta maqola
admin/                Decap CMS paneli (/admin)
content/posts.json    Blog maqolalari (CMS tahrirlaydi)
content/media.json    Podcast, intervyu, chiqishlar (CMS tahrirlaydi)
assets/js/config.js   ← GA, Meta Pixel, ijtimoiy tarmoq havolalari
assets/js/i18n.js     RU / EN tarjimalar (UZ matn HTML ichida)
assets/img/           Rasmlar (qaysi nom bilan qo‘yish — README.txt da)
```

## Lokal ko‘rish

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```
So‘ng brauzerda http://localhost:8080 sahifasini oching.

## Joylashtirish (Netlify, tavsiya etiladi)

1. Papkani GitHub repozitoriyga yuklang (`main` branch).
2. Netlify → *Add new site → Import from Git*. Build command: bo‘sh qoldiring, publish directory: `.`
3. **CMS uchun:** Site settings → Identity → *Enable*, so‘ng Identity → Services → *Git Gateway → Enable*.
   Registration'ni *Invite only* qilib, o‘zingizni taklif qiling. So‘ng `https://domen/admin` manziliga kiring.
4. Aloqa formasi Netlify Forms orqali avtomatik ishlaydi (Forms bo‘limida xabarlar ko‘rinadi, email bildirishnoma yoqish mumkin).
5. Domen: Domain settings → `mysite.uz`.

## Analytics

`assets/js/config.js` faylida:
```js
GA_ID: "G-XXXXXXXXXX",
META_PIXEL_ID: "123456789012345",
```
ID kiritilmasa, skriptlar umuman yuklanmaydi. Aloqa formasi yuborilganda `contact_submit` (GA) va `Lead` (Pixel) hodisalari yuboriladi.

## Tillar

- Til tanlovi brauzerda eslab qolinadi, havolada `?lang=ru` / `?lang=en` orqali ham ochiladi.
- Yangi matn qo‘shsangiz: HTML elementga `data-i18n="kalit"` bering, o‘zbekcha matnni HTML ichiga yozing,
  rus va ingliz tarjimasini `assets/js/i18n.js` ga qo‘shing.
- CMS maqolalarida RU/EN maydonlar bo‘sh qolsa, o‘zbekcha matn ko‘rsatiladi.

## Tayyorlash kerak bo‘lgan materiallar

- [ ] Professional portretlar va loyiha rasmlari → `assets/img/` (ro‘yxat: `assets/img/README.txt`)
- [ ] `og-image.jpg` (1200×630) — ijtimoiy tarmoqlarda ulashish uchun
- [ ] Instagram, YouTube, LinkedIn havolalari → `config.js`
- [ ] Ilk Qadam epizodlari va intervyular → `/admin` → Media (YouTube havolasini qo‘yish kifoya)
- [ ] Namuna maqolalarni haqiqiy maqolalar bilan almashtirish → `/admin` → Insights
- [ ] Domen `mysite.uz` dan farq qilsa: `index.html`, `sitemap.xml`, `robots.txt`, `admin/config.yml` dagi manzillarni yangilash
