# Common Issues

This page covers the most frequently encountered issues when using Twintail Launcher and their solutions.

## Installation Issues

### Flatpak Installation Problems

**Issue:** Flatpak installation fails or application won't start.

**Solutions:**
1. Update Flatpak runtime: `flatpak update`
2. Reset permissions: `flatpak permission-reset app.twintaillauncher.TwintailLauncher`
3. Ensure Flatpak version is 1.10.0 or newer: `flatpak --version`

### AUR Build Failures

**Issue:** AUR package fails to build on Arch Linux.

**Solutions:**
1. Update your system: `sudo pacman -Syu`
2. Install development tools: `sudo pacman -S base-devel git`
3. Clear package cache: `yay -Sc`

## Platform-Specific Issues

### Bazzite and SteamOS

**Bazzite** and **SteamOS** are immutable Linux distributions optimized for gaming that require special considerations for Twintail Launcher.

#### Installation on Immutable Systems

**Issue:** Standard package managers don't work on immutable distributions.

**Solution:** Use Flatpak (recommended method)
```bash
flatpak install flathub app.twintaillauncher.TwintailLauncher
```

#### File System Access Issues

**Issue:** TTL cannot access game directories or create mod folders due to immutable file system restrictions.

**Solutions:**
1. **Grant Additional Permissions:**
   ```bash
   flatpak override --user --filesystem=home app.twintaillauncher.TwintailLauncher
   flatpak override --user --filesystem=/var/home app.twintaillauncher.TwintailLauncher
   ```

2. **For Steam Deck Gaming Mode:**
   - Switch to Desktop Mode
   - Install TTL via Discover store or Flatpak
   - Add TTL as non-Steam game to access from Gaming Mode

#### Steam Deck Specific Issues

**Issue:** TTL interface is too small or controls don't work properly on Steam Deck.

**Solutions:**
1. **Scaling Issues:**
   - Right-click TTL in Steam Library → Properties
   - Set Launch Options: `STEAM_COMPAT_CLIENT_INSTALL_PATH="" %command%`
   - Enable "Use desktop configuration in Big Picture mode"

2. **Controller Input:**
   - Configure controller as "Desktop Configuration" 
   - Set up custom control scheme in Steam Input settings

#### Bazzite ujust Commands

**Issue:** Need to modify system-level settings for gaming on Bazzite.

**Useful Bazzite Commands:**
```bash
# Enable additional gaming optimizations
ujust configure-gaming

# Install additional gaming software
ujust install-gaming-software

# Setup Wine/Lutris for Windows games
ujust setup-wine
```

#### SteamOS Updates Breaking TTL

**Issue:** System updates reset Flatpak permissions or break TTL functionality.

**Solutions:**
1. **Re-apply Permissions After Updates:**
   ```bash
   flatpak override --user --filesystem=home app.twintaillauncher.TwintailLauncher
   ```

2. **Backup TTL Configuration:**
   ```bash
   # Create backup before updates
   cp -r ~/.var/app/app.twintaillauncher.TwintailLauncher/ ~/ttl-backup/
   
   # Restore after issues
   cp -r ~/ttl-backup/ ~/.var/app/app.twintaillauncher.TwintailLauncher/
   ```

## Game-Specific Issues

### Anti-Cheat Compatibility

**Issue:** Games with anti-cheat systems don't work with TTL.

**Common Affected Games:**
- Games using EasyAntiCheat (EAC)
- Games using BattlEye
- Proprietary anti-cheat systems

**Solutions:**
1. Check game compatibility before modding
2. Use secondary accounts for testing
3. Monitor community reports for safety updates

### Performance Issues

**Issue:** Games run poorly with TTL modifications.

**Solutions:**
1. Check graphics driver installation
2. Verify game meets minimum requirements
3. Disable unnecessary mods temporarily
4. Monitor system resources during gameplay

## General Troubleshooting

### Permission Errors

**Issue:** TTL cannot create files or access directories.

**Solutions:**
1. Check file ownership: `ls -la ~/.local/share/TwintailLauncher/`
2. Fix permissions: `sudo chown -R $USER:$USER ~/.local/share/TwintailLauncher/`
3. For SELinux systems: `sudo setsebool -P allow_execheap 1`

### Network Connectivity Issues

**Issue:** TTL cannot download updates or connect to services.

**Solutions:**
1. Check internet connection
2. Verify firewall settings
3. Try different DNS servers
4. Check proxy settings if applicable

## Getting Additional Help

If you're still experiencing issues:

1. **Check the FAQ:** [Frequently Asked Questions](../faq)
2. **Search Discussions:** [GitHub Discussions](https://github.com/TwintailTeam/TwintailLauncher/discussions)
3. **Report Bugs:** [GitHub Issues](https://github.com/TwintailTeam/TwintailLauncher/issues)
4. **Community Support:** Join our Discord or community forums

### Information to Include in Bug Reports

When reporting issues, please provide:
- Operating system and version
- Installation method (Flatpak, AUR, etc.)
- TTL version
- Game(s) affected
- Error messages or logs
- Steps to reproduce the issue