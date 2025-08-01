import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar for Twintail Launcher
  mainSidebar: [
    // Welcome & Introduction
    'intro',
    
    // FAQ
    'faq',
    
    // Safety Guide
    'safety-guide',
    
    // Installation Guide
    {
      type: 'category',
      label: 'Installation Guide',
      collapsed: false,
      items: [
        'installation/overview',
        'installation/windows',
        'installation/linux',
        'installation/first-time-setup',
      ],
    },

    // User Guide
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/interface-overview',
        'user-guide/mod-management',
      ],
    },

    // Supported Games
    {
      type: 'category',
      label: 'Supported Games',
      collapsed: false,
      items: [
        'games/genshin-impact',
        'games/honkai-star-rail',
        'games/honkai-impact-3rd',
        'games/zenless-zone-zero',
        'games/wuthering-waves',
        'games/punishing-gray-raven',
        'games/other-games',
      ],
    },

    // Troubleshooting
    {
      type: 'category',
      label: 'Troubleshooting and Support',
      collapsed: false,
      items: [
        'troubleshooting/common-issues',
      ],
    },

    // Development
    {
      type: 'category',
      label: 'Development and Contributing',
      collapsed: true,
      items: [
        'development/setup',
        'development/contributing',
      ],
    },
  ],
};

export default sidebars;
