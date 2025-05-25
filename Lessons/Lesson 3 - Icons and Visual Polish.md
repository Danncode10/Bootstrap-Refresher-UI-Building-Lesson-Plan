## 🧠 What You’ll Learn in Lesson 3:

✅ How to use **Font Awesome** and **Bootstrap Icons**
✅ How to insert icons inside buttons, headers, and cards
✅ How to style icons to match your color and size preferences
🎯 **Activity**: Add icons into a card layout that includes text and a button.

---

## 🧩 Step 1: Add Icon Libraries (You're halfway there!)

You already included **Bootstrap Icons**, but now let’s add **Font Awesome** too.

### ✅ Update the `<head>` of your HTML:

```html
<!-- Font Awesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Now you have **two icon sets** you can use:

* **Font Awesome**: `<i class="fa fa-star"></i>`
* **Bootstrap Icons**: `<i class="bi bi-house-door-fill"></i>`

---

## 💡 Tip: How to Find Icons

* Font Awesome: [https://fontawesome.com/icons](https://fontawesome.com/icons)
* Bootstrap Icons: [https://icons.getbootstrap.com](https://icons.getbootstrap.com)

Search any word like "email", "user", "star", etc.
Copy the class name and use it like this:

```html
<i class="fa fa-envelope"></i> Email Us  
<i class="bi bi-gear-fill"></i> Settings  
```

---

## 🛠 Step 2: Add Icons in Your Layout

Let’s upgrade one of your columns with a **card** that has:

* An icon on top
* Some text
* A button with another icon inside

---

### 🧪 Sample Code You Can Paste Inside `.col-md-6`

Here’s a beautiful card with icons:

```html
<div class="card shadow-sm border-0 mb-4">
  <div class="card-body text-center">
    <i class="fa fa-rocket fa-3x text-primary mb-3"></i>
    <h5 class="card-title">Launch Feature</h5>
    <p class="card-text">Quickly launch your project using our custom AI tools.</p>
    <a href="#" class="btn btn-outline-primary">
      <i class="bi bi-lightning-charge-fill"></i> Activate
    </a>
  </div>
</div>
```

### ✅ Explanation:

* `<i class="fa fa-rocket fa-3x">` = Font Awesome icon, size 3x
* `btn btn-outline-primary` = Bootstrap styled button
* `<i class="bi bi-lightning-charge-fill">` = Bootstrap icon inside button

---

## 🎯 Lesson 3 Activity Checklist:

✅ Add a **Font Awesome icon**
✅ Add a **Bootstrap Icon**
✅ Create a **card layout** with:

* Icon
* Title & text
* Button with icon


## Additional Lesson: 🧠 Bootstrap Spacing System = `m` (margin) and `p` (padding)

Here's the basic format:

```
m / p  +  side  +  number
```

| Symbol                       | Meaning                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------- |
| `m`                          | margin                                                                           |
| `p`                          | padding                                                                          |
| `t`, `b`, `s`, `e`, `x`, `y` | top, bottom, start (left), end (right), x-axis (left/right), y-axis (top/bottom) |
| `0` - `5`                    | amount of space (0 = none, 5 = largest)                                          |

---

## ✅ Examples:

### Add space **below** a `div`:

```html
<div class="mb-4">This has bottom margin</div>
```

### Add space **around** a button:

```html
<button class="btn btn-primary m-3">Click Me</button>
```

### Add vertical space (top and bottom) to a card:

```html
<div class="card py-4 my-4">...</div>
```

### Add horizontal padding (left and right) to a container:

```html
<div class="container px-5">...</div>
```

---

## 📦 Common Spacing Classes Cheat Sheet:

| Class     | Effect                                   |
| --------- | ---------------------------------------- |
| `mt-3`    | Margin-top                               |
| `mb-4`    | Margin-bottom                            |
| `ms-2`    | Margin-start (left)                      |
| `me-2`    | Margin-end (right)                       |
| `mx-auto` | Auto margin left & right (centers block) |
| `p-3`     | Padding all sides                        |
| `px-4`    | Padding left + right                     |
| `py-5`    | Padding top + bottom                     |

---

## ✅ So if you ask:

> How do I "make space between divs"?

**You'd do this**:

```html
<div class="mb-4">First box</div>
<div>Second box</div>
```

Or, for horizontal spacing (side-by-side):

```html
<div class="d-flex">
  <div class="me-3">Left</div>
  <div>Right</div>
</div>
```