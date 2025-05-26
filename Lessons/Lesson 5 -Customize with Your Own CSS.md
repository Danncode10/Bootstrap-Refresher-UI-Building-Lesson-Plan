# Lesson 5: Customize with Your Own CSS
This is where you take full control — now **your Bootstrap site becomes truly yours.** 🧑‍🎨✨

---

## 🧠 What You'll Learn:

✅ How to **override Bootstrap styles** using your own CSS
✅ How to **link a `style.css` file**
✅ How to add **custom fonts, background colors, borders, shadows**
🎯 **Activity**: Modify a Bootstrap section into **your own custom color theme**

---

## ✅ Step 1: Create and Link `style.css`

📁 Inside your project folder:

1. Create a folder called `L5_assets`
2. Inside it, create a file called `style.css`

Now, in your HTML `<head>`, **link it *after* Bootstrap**:

```html
<!-- Custom CSS must come last so it overrides Bootstrap -->
<link rel="stylesheet" href="L5_assets/style.css">
```

---

## ✅ Step 2: Override Bootstrap with Your CSS

Now let’s write some custom styles!

### Example: Change Background Color and Font

```css
body {
  background-color: #f5f7fa;
  font-family: 'Segoe UI', sans-serif;
}

.navbar {
  background-color: #4B0082 !important; /* Override Bootstrap dark */
}

h1, h2, h3 {
  color: #4B0082;
  text-shadow: 1px 1px 2px #ccc;
}

.btn-custom {
  background-color: #4B0082;
  color: white;
  border-radius: 30px;
  padding: 10px 20px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
}

.card {
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
```

Then use it in HTML:

```html
<button class="btn btn-custom">Click Me</button>
```

---

## 🎯 Activity: Change a Bootstrap Template to Your Theme

Let’s say you have this:

```html
<h1 class="text-center">Welcome to My Site</h1>
```

You can now style it:

```css
h1 {
  color: #ff6600;
  font-family: 'Comic Sans MS', cursive;
  letter-spacing: 2px;
}
```

---

## ✅ Step 3: Use Google Fonts (Optional)

Go to [fonts.google.com](https://fonts.google.com), pick one, and copy the `<link>` to your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
```

Then in your CSS:

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

---

## ✅ Step 4: Add Fun Backgrounds (Optional)

```css
body {
  background: linear-gradient(to right, #f9f9f9, #f0f0f0);
}

.navbar {
  background: linear-gradient(to right, #1e3c72, #2a5298);
}
```

---

## ✅ Summary

| You Can Now\...  | Examples                           |
| ---------------- | ---------------------------------- |
| 🎨 Change colors | `background-color`, `color`        |
| 🔠 Change fonts  | Google Fonts + `font-family`       |
| 🌫 Add shadows   | `box-shadow`, `text-shadow`        |
| 🟦 Style buttons | Add your own `btn-custom` class    |
| 🧱 Style cards   | Round corners, add borders/shadows |