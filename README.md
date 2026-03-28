# 📍 map-project

This project is focused on building modern and high-performance user interfaces using current frontend technologies.

## 🚀 Technologies Used

* ⚛️ **React** – Library for building user interfaces
* 🟦 **TypeScript** – JavaScript superset with static typing using es7
* ⚡ **Vite** – Fast and lightweight frontend build tool

---

## 📂 Branch Structure

This project follows a simplified Git Flow strategy with the following branches:

* `main` → Production-ready code
* `develop` → Ongoing development

### 🔹 Supporting Branches

* `feature/DESCRIPTION`
  → Used for developing new features.
  → Created from `develop` and merged back into `develop`.

* `release/VERSION`
  → Used to prepare a new production release (e.g., `release/1.0.0`).
  → Created from `develop` and merged into both `main` and `develop`.

* `hotfix/DESCRIPTION`
  → Used for urgent fixes in production.
  → Created from `main` and merged into both `main` and `develop`.

---

## 🌿 Git Flow

### 🔹 Feature Development

New features should be created from the `develop` branch:

```bash
git checkout develop
git checkout -b feature/feature-name
```

After finishing:

```bash
git checkout develop
git merge feature/feature-name
git branch -d feature/feature-name
```

---

### 🔹 Release Process

When a set of features is ready for production, create a release branch:

```bash
git checkout develop
git checkout -b release/x.y.z
```

After final adjustments and validation:

```bash
git checkout main
git merge release/x.y.z

git checkout develop
git merge release/x.y.z

git branch -d release/x.y.z
```

---

### 🔹 Hotfixes

Urgent fixes in production should be created from the `main` branch:

```bash
git checkout main
git checkout -b hotfix/fix-name
```

After applying the fix:

```bash
git checkout main
git merge hotfix/fix-name

git checkout develop
git merge hotfix/fix-name

git branch -d hotfix/fix-name
```

---

## 🔄 Workflow Summary

* Features branch off from `develop` and merge back into `develop`
* Releases branch off from `develop` and merge into both `main` and `develop`
* Hotfixes branch off from `main` and merge into both `main` and `develop`

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License

This project is licensed under the MIT License.
