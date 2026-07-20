import { app, BrowserWindow } from "electron";
import path from "node:path";

function createWindow() {
  const win = new BrowserWindow({
    width: 1600, height: 950, minWidth: 1280, minHeight: 800,
    backgroundColor: "#0d0d0f",
    webPreferences: { preload: path.join(__dirname, "preload.js") },
  });
  if (process.env.VITE_DEV_SERVER_URL)
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  else win.loadFile(path.join(__dirname, "../dist/index.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());
