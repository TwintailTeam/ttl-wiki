# Common Issues

This page covers the most frequently encountered issues when using Twintail Launcher and their solutions.

## Installation Issues

### Flatpak Installation Problems

**Issue:** Flatpak installation fails or application won't start.

**Solutions:**
1. Update Flatpak runtime: `flatpak update`
2. Reset permissions: `flatpak permission-reset app.twintaillauncher.ttl`

### AUR Build Failures

**Issue:** AUR package fails to build on Arch Linux.

**Solutions:**
1. Update your system: `sudo pacman -Syu`
2. Clear package cache: `yay -Sc`

## Platform-Specific Issues

### Bazzite and SteamOS

**Bazzite** and **SteamOS** are immutable Linux distributions optimized for gaming that require special considerations for Twintail Launcher.

#### Installation on Immutable Systems

**Issue:** Standard package managers don't work on immutable distributions.

**Solution:** Use Flatpak (recommended method)
```bash
flatpak install app.twintaillauncher.ttl
```

#### File System Access Issues

**Issue:** TTL cannot access game directories or create folders due to immutable file system restrictions.

**Solutions:**
1. **Grant Additional Permissions:**
   ```bash
   flatpak override --user --filesystem=/var/home app.twintaillauncher.ttl
   ```

2. **For Steam Deck Gaming Mode:**
   - Switch to Desktop Mode
   - Install TTL via Discover store or Flatpak
   - Add TTL as non-Steam game to access from Gaming Mode

#### SteamOS Updates Breaking TTL

**Issue:** System updates break TTL functionality.

**Solutions:**
1**Backup TTL Configuration:**
   ```bash
   # Create backup before updates
   cp -r ~/.var/app/app.twintaillauncher.ttl/ ~/ttl-backup/
   
   # Restore after issues are fixed
   cp -r ~/ttl-backup/ ~/.var/app/app.twintaillauncher.ttl/
   ```

## Getting Additional Help

If you're still experiencing issues:

1. **Check the FAQ:** [Frequently Asked Questions](../faq)
2. **Report Bugs:** [GitHub Issues](https://github.com/TwintailTeam/TwintailLauncher/issues)
3. **Community Support:** Join our [Discord](https://discord.gg/nDMJDwuj7s)

### Information to Include in Bug Reports

When reporting issues, please provide:
- Operating system and version
- Installation method (Flatpak, AUR, etc.)
- TTL version
- Game(s) affected
- Error messages or logs
- Steps to reproduce the issue