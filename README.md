# Biraz da AI yazsın.

# 📱 My React Native App

A cross-platform mobile application built with **React Native**. This guide explains how to set up and run the app on **iOS**.

---

## 🛠️ Prerequisites

Before running the app, ensure your environment is properly set up:

### 1. **Install Node.js**

### 2. **Install Watchman** (macOS only)

Watchman is a tool developed by Facebook for watching changes in the filesystem.

```bash
brew install watchman
```

### 3. **Install CocoaPods**

CocoaPods manages iOS native dependencies.

```bash
sudo gem install cocoapods
```

### 4. **Install Xcode**

- Download Xcode from the Mac App Store.
- Ensure the **Command Line Tools** are installed:
  ```bash
  xcode-select --install
  ```

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/sefailyasoz95/hubx.git
cd hubx
```

### 2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

### 3. **Install iOS Pods**

```bash
cd ios
pod install
cd ..
```

---

## ▶️ Running the App on iOS

### Option 1: **Using CLI**

Make sure your simulator is open (e.g. iPhone 16).

```bash
npx react-native run-ios
#or
yarn ios
```

### Option 2: **Using Xcode**

1. Open the Xcode workspace:
   ```bash
   open ios/YourAppName.xcworkspace
   ```
2. Select a target device (e.g., iPhone 15 simulator).
3. Click the ▶️ "Run" button.

---

## 🧪 Troubleshooting

- ❌ **Metro not starting?**

  ```bash
  npx react-native start --reset-cache
  ```

- ❌ **Build errors after dependency changes?**

  ```bash
  cd ios
  pod install --repo-update
  cd ..
  ```

- ❌ **App not launching on simulator?**
  - Try closing Xcode and simulator, then run:
    ```bash
    xcrun simctl shutdown all
    npx react-native run-ios
    ```

---

## 📦 Additional Scripts

- Start Metro manually:

  ```bash
  npm start
  ```

- Clean Xcode build:
  ```bash
  rm -rf ios/build
  xcodebuild clean
  ```

---
