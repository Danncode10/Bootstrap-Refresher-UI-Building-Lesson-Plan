# 🎨 **Lesson 2: Using UI Websites to Build a Beautiful Website (No Design Skill Needed)**

> You don’t need to design buttons, navbars, or cards from scratch.
> You can **copy them from awesome websites** and paste them into your Bootstrap project.
> Let’s learn how.

---

## 🔹 Step 1: Pick a Free UI Source (Click to Explore)

| Site Name                                                                | What You Get              | Best For                     |
| ------------------------------------------------------------------------ | ------------------------- | ---------------------------- |
| [**BootstrapMade**](https://bootstrapmade.com/free-bootstrap-templates/) | Full website templates    | Complete site layout         |
| [**UIverse.io**](https://uiverse.io)                                     | Buttons, toggles, loaders | Creative UI elements         |
| [**Bootstrap Icons**](https://icons.getbootstrap.com/)                   | Thousands of free icons   | Adding icons to buttons etc. |

✅ We’ll use **UIverse** in this lesson to add a cool button.

---

## 🧪 Step 2: Copy a Button from Uiverse

### ▶️ Go to [UIverse.io → Buttons](https://uiverse.io/buttons)

* Pick a button you like
* Click the **Copy HTML** and **Copy CSS**

---

## 🛠 Step 3: Paste into Your HTML File

Use the same `index.html` from Lesson 1, and paste the CSS inside a `<style>` tag in `<head>`, and HTML inside `<body>`.

### Example:

```html
<!-- Inside <head> -->
<style>
.button-36 {
  background-image: linear-gradient(92.88deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%);
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  transition: background 0.3s ease;
}
.button-36:hover {
  background-color: #6741d9;
}
</style>
```

```html
<!-- Inside <body> -->
<button class="button-36">✨ Fancy Button</button>
```

✅ Now your page has a beautiful button from UIverse!

---

## 🎯 Bonus Step: Add Icons with Bootstrap Icons

Go to: [Bootstrap Icons](https://icons.getbootstrap.com/)

Copy an icon tag like this:

```html
<i class="bi bi-rocket-takeoff"></i>
```

And paste it inside your button:

```html
<button class="button-36"><i class="bi bi-rocket-takeoff"></i> Launch</button>
```

To make icons work, **add this line in your `<head>`**:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
```

---

## ✅ Your Activity:

1. Visit [UIverse.io](https://uiverse.io)
2. Pick a button and a toggle
3. Paste into your HTML
4. Add a Bootstrap icon inside it
5. Customize the text or colors