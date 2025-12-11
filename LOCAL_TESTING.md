# Local Testing Guide

## Quick Start - Test Your Website Locally

There are several ways to test your website on localhost before deploying:

### Method 1: Using Python (Recommended - Easiest)

**Quick Start:**
```bash
cd /Users/elijahphifer/elijah-phifer.github.io
./start-server.sh
```

Then open your browser to: **http://localhost:8000**

**Manual Command:**
```bash
python3 -m http.server 8000
```

Press `Ctrl+C` to stop the server.

---

### Method 2: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open automatically

**Benefits:** Auto-reloads when you save files

---

### Method 3: Using Node.js http-server

**First time setup:**
```bash
npm install -g http-server
```

**Run the server:**
```bash
cd /Users/elijahphifer/elijah-phifer.github.io
http-server -p 8000
```

Then open: **http://localhost:8000**

---

### Method 4: Using PHP (if installed)

```bash
cd /Users/elijahphifer/elijah-phifer.github.io
php -S localhost:8000
```

---

## Testing on Mobile Device

### Option 1: Same WiFi Network
1. Start the local server on your computer
2. Find your computer's IP address:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
3. On your phone's browser, go to: `http://YOUR_IP_ADDRESS:8000`
   - Example: `http://192.168.1.100:8000`

### Option 2: Browser DevTools (Simulate Mobile)
1. Open your site in Chrome or Firefox
2. Press `F12` or `Cmd+Option+I` (Mac)
3. Click the device icon (Toggle Device Toolbar)
4. Select a mobile device from the dropdown

---

## Troubleshooting

**Port already in use?**
```bash
# Use a different port
python3 -m http.server 8080
```

**Can't access from phone?**
- Make sure both devices are on the same WiFi network
- Check if your firewall is blocking connections
- Try temporarily disabling your firewall

**Changes not showing?**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear browser cache
- Use incognito/private mode

---

## Recommended: VS Code Live Server

For the best development experience, I recommend installing the Live Server extension:

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X)
3. Search for "Live Server" by Ritwick Dey
4. Click Install
5. Right-click `index.html` → "Open with Live Server"

**Benefits:**
- Auto-reload on file save
- No command line needed
- Works on any port automatically
