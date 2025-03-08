# WebKit Normalize

A lightweight library to normalize **WebKit-specific implementations** to their standard equivalents. This ensures cross-browser compatibility by fixing inconsistencies in older or non-standard browsers that rely on WebKit prefixes.

---

## Features Normalized

### **1. URL and webkitURL**
Normalizes `webkitURL` to `URL` if the standard `URL` API is missing.

### **2. AudioContext and webkitAudioContext**
Normalizes `webkitAudioContext` to `AudioContext` if the standard `AudioContext` API is missing.

### **3. SpeechRecognition and webkitSpeechRecognition**
Normalizes `webkitSpeechRecognition` to `SpeechRecognition` if the standard `SpeechRecognition` API is missing.

### **4. getUserMedia and webkitGetUserMedia**
Normalizes `webkitGetUserMedia` to `getUserMedia` if the standard `getUserMedia` API is missing.

### **5. requestAnimationFrame and webkitRequestAnimationFrame**
Normalizes `webkitRequestAnimationFrame` to `requestAnimationFrame` if the standard `requestAnimationFrame` API is missing.

### **6. Transition Events**
Normalizes `webkitTransitionEnd` to `transitionend` for handling CSS transition events.

### **7. Device Pixel Ratio**
Normalizes `webkitDevicePixelRatio` to `devicePixelRatio` if the standard `devicePixelRatio` API is missing.

### **8. CSS Transform Properties**
Normalizes `webkitTransform` to `transform` for CSS transformations.

### **9. CSS Backface Visibility**
Normalizes `webkitBackfaceVisibility` to `backfaceVisibility` for CSS backface visibility.

### **10. Fullscreen API**
Normalizes `webkitRequestFullscreen` to `requestFullscreen` for entering fullscreen mode.

### **11. Web SQL Database (Deprecated)**
Normalizes `webkitDatabase` to `openDatabase` for Web SQL Database support (deprecated).

### **12. CSS Will-Change Property**
Normalizes `webkitWillChange` to `will-change` for CSS will-change property.

### **13. File System API**
Normalizes `webkitRequestFileSystem` to `requestFileSystem` for the File System API.

---

## Why Use WebKit Normalize?

- **Cross-Browser Compatibility**: Ensures your code works in older or non-standard browsers that rely on WebKit prefixes.
- **Lightweight**: Only normalizes WebKit implementations—no heavy polyfills.
- **Easy to Use**: Just include the library, and it automatically applies the necessary normalizations.

---

## Installation

### **Via CDN**
Use the normal version for development:
```html
<script src="https://cdn.jsdelivr.net/npm/webkit-normalize@1.0.0/webkit-normalize.js"></script>
```
Use the minified version for production:
```html
<script src="https://cdn.jsdelivr.net/npm/webkit-normalize@1.0.0/webkit-normalize.min.js"></script>
```

### **Via npm**
Install the library:
```bash
npm install webkit-normalize
```
Then import it in your project:
```javascript
import 'webkit-normalize';
```

---

## Example Usage
```javascript
// After including the library, you can use standard APIs without worrying about WebKit prefixes.
const audioContext = new AudioContext(); // Works even if only webkitAudioContext is available.
const url = new URL('https://example.com'); // Works even if only webkitURL is available.
```

---

## Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

