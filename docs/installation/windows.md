---
sidebar_position: 2
---

# Windows Installation

Complete guide to installing Twintail Launcher on Windows.

## Recommended Installation Method

### Using Winget (Recommended)

**Winget** is Microsoft's official package manager and the recommended way to install TTL on Windows.

#### Prerequisites
- Windows 10 version 1809 or later
- Winget installed (comes with Windows 11 by default)

#### Installation Steps

1. **Open Command Prompt or PowerShell**
   - Press `Win + X` and select "Windows PowerShell" or "Command Prompt"
   - Or press `Win + R`, type `cmd`, and press Enter

2. **Install Twintail Launcher**
   ```powershell
   winget install TwintailTeam.TTL
   ```

3. **Wait for Installation**
   - The installation will download and install automatically
   - You may see Windows Defender SmartScreen warnings - this is normal

4. **Launch TTL**
   - Find "Twintail Launcher" in your Start Menu

## Troubleshooting Installation Issues

### Windows Defender / Antivirus Warnings

**Issue:** Windows Defender flags TTL as potentially unwanted software.

**Solution:**
1. Add TTL to Windows Defender exclusions
2. Temporarily disable real-time protection during installation
3. Ensure you're downloading from official sources only

### Winget Not Found

**Issue:** `winget` command not recognized.

**Solutions:**
1. **Update Windows** - Ensure you have the latest Windows updates
2. **Install winget** - Download from Microsoft

### Installation Hangs or Fails

**Solutions:**
1. **Check Internet Connection** - Ensure stable internet
2. **Restart Windows** - Reboot and try again
3. **Clear Winget Cache** - Run `winget source reset`

## Updating Twintail Launcher

### Automatic Updates (Recommended)
Winget installations receive automatic updates:

```powershell
winget upgrade TwintailTeam.TTL
```

### Check for Updates
```powershell
winget list --upgrade-available
```

## Uninstalling TTL

### Using Winget
```powershell
winget uninstall TwintailTeam.TTL
```

### Using Windows Settings
1. Open Settings (`Win + I`)
2. Go to Apps > Installed apps
3. Find "Twintail Launcher"
4. Click the three dots and select "Uninstall"

## Next Steps

After successful installation:

1. [**First-Time Setup**](./first-time-setup) - Configure TTL for your games
2. [**Interface Overview**](../user-guide/interface-overview) - Learn the TTL interface
3. [**Game Setup**](../games/genshin-impact) - Add your favorite games
