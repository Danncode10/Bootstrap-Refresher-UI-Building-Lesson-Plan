### 🔶 What Is the Bootstrap Grid System?

The **Bootstrap Grid System** is a powerful layout system based on **12 columns**. It allows you to **arrange your content in rows and columns**, ensuring your layout works well on all screen sizes (mobile, tablet, desktop).

Think of the grid like a table:

* **Rows** contain **columns**.
* Each row can have **up to 12 column units in total**.

---

### 🧱 Basic Structure

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>
```

* `.container`: Adds padding and centers your content.
* `.row`: A horizontal group of columns.
* `.col`: Auto-sizes to fill space equally.

---

### 🔢 Controlling Column Widths

You can control how many of the 12 columns each block takes:

```html
<div class="container">
  <div class="row">
    <div class="col-4">Takes 4 columns</div>
    <div class="col-8">Takes 8 columns</div>
  </div>
</div>
```

---

### 📱 Responsive Layouts

You can make different layouts for different screen sizes:

| Class      | Screen Size       |
| ---------- | ----------------- |
| `col-sm-*` | ≥576px (small)    |
| `col-md-*` | ≥768px (medium)   |
| `col-lg-*` | ≥992px (large)    |
| `col-xl-*` | ≥1200px (x-large) |

```html
<div class="row">
  <div class="col-md-6 col-sm-12">Left</div>
  <div class="col-md-6 col-sm-12">Right</div>
</div>
```

* On large screens: each takes 6 out of 12 columns.
* On small screens: each takes full width (12 columns).

---

### 🎯 Using Grid to Place Icons or Buttons

Suppose you want to place 3 buttons in a row with equal space:

```html
<div class="container">
  <div class="row text-center">
    <div class="col-md-4">
      <button class="btn btn-primary">Button 1</button>
    </div>
    <div class="col-md-4">
      <button class="btn btn-secondary">Button 2</button>
    </div>
    <div class="col-md-4">
      <button class="btn btn-success">Button 3</button>
    </div>
  </div>
</div>
```

Or place icons from Bootstrap Icons:

```html
<div class="container">
  <div class="row text-center">
    <div class="col-md-4">
      <i class="bi bi-house-fill fs-1"></i><br>Home
    </div>
    <div class="col-md-4">
      <i class="bi bi-person-fill fs-1"></i><br>Profile
    </div>
    <div class="col-md-4">
      <i class="bi bi-gear-fill fs-1"></i><br>Settings
    </div>
  </div>
</div>
```

💡 *Make sure you include Bootstrap Icons if you use `bi bi-...` icons:*

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
```

---

### 📏 Helpful Utilities for Positioning

Use Bootstrap utility classes for better alignment:

* `text-center` — centers text
* `d-flex`, `justify-content-center`, `align-items-center` — for Flexbox layout
* `mt-3`, `mb-2` — spacing (margin top/bottom)
* `p-2` — padding

Example: Center a button in the middle of the page:

```html
<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
  <button class="btn btn-dark">Centered Button</button>
</div>
```