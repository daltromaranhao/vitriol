#!/usr/bin/env node

/**
 * Apple Sign In - Client Secret Generator
 * 
 * This script generates a JWT token to use as APPLE_CLIENT_SECRET
 * The token is valid for 6 months and needs to be regenerated periodically.
 * 
 * Prerequisites:
 * 1. Apple Developer Account with Sign in with Apple enabled
 * 2. Services ID created
 * 3. Private Key (.p8 file) downloaded
 * 
 * Usage:
 *   node scripts/generate-apple-secret.js
 */

const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURATION - Update these values
// ============================================

const CONFIG = {
  // Your Apple Team ID (found in Apple Developer Account membership)
  TEAM_ID: 'YOUR_TEAM_ID_HERE',
  
  // Your Services ID (e.g., com.vitriol.web)
  CLIENT_ID: 'com.vitriol.web',
  
  // Your Key ID (shown when you created the key)
  KEY_ID: 'YOUR_KEY_ID_HERE',
  
  // Path to your .p8 private key file
  KEY_FILE: path.join(__dirname, 'AuthKey_XXXXXXXXXX.p8'),
  
  // Token validity in days (max 6 months = 180 days)
  VALIDITY_DAYS: 180,
};

// ============================================
// Script
// ============================================

function generateAppleClientSecret() {
  console.log('🍎 Apple Sign In - Client Secret Generator\n');
  
  // Validate configuration
  const errors = [];
  
  if (CONFIG.TEAM_ID === 'YOUR_TEAM_ID_HERE') {
    errors.push('❌ TEAM_ID not configured');
  }
  
  if (CONFIG.KEY_ID === 'YOUR_KEY_ID_HERE') {
    errors.push('❌ KEY_ID not configured');
  }
  
  if (!fs.existsSync(CONFIG.KEY_FILE)) {
    errors.push(`❌ Private key file not found: ${CONFIG.KEY_FILE}`);
  }
  
  if (errors.length > 0) {
    console.error('Configuration errors:\n');
    errors.forEach(err => console.error(err));
    console.error('\n📝 Please update the CONFIG object in this script with your Apple credentials.\n');
    console.error('Where to find these values:');
    console.error('  - TEAM_ID: Apple Developer Account > Membership');
    console.error('  - CLIENT_ID: Your Services ID (e.g., com.vitriol.web)');
    console.error('  - KEY_ID: Shown when you created the Sign in with Apple key');
    console.error('  - KEY_FILE: Path to your downloaded .p8 file\n');
    process.exit(1);
  }
  
  try {
    // Read the private key
    const privateKey = fs.readFileSync(CONFIG.KEY_FILE, 'utf8');
    
    const now = Math.floor(Date.now() / 1000);
    const expiration = now + (CONFIG.VALIDITY_DAYS * 86400);
    
    // Generate JWT
    const token = jwt.sign(
      {
        iss: CONFIG.TEAM_ID,
        iat: now,
        exp: expiration,
        aud: 'https://appleid.apple.com',
        sub: CONFIG.CLIENT_ID,
      },
      privateKey,
      {
        algorithm: 'ES256',
        header: {
          alg: 'ES256',
          kid: CONFIG.KEY_ID,
        },
      }
    );
    
    const expirationDate = new Date(expiration * 1000);
    
    console.log('✅ Client Secret generated successfully!\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Configuration:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Team ID:       ${CONFIG.TEAM_ID}`);
    console.log(`Client ID:     ${CONFIG.CLIENT_ID}`);
    console.log(`Key ID:        ${CONFIG.KEY_ID}`);
    console.log(`Valid for:     ${CONFIG.VALIDITY_DAYS} days`);
    console.log(`Expires on:    ${expirationDate.toLocaleDateString()} ${expirationDate.toLocaleTimeString()}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('Add these to your .env file:\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`APPLE_CLIENT_ID="${CONFIG.CLIENT_ID}"`);
    console.log(`APPLE_CLIENT_SECRET="${token}"`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('⚠️  Important Notes:');
    console.log('   - This secret expires in 6 months');
    console.log('   - You\'ll need to regenerate it before expiration');
    console.log('   - Keep this secret secure - don\'t commit it to git');
    console.log('   - Use environment variables in production (Vercel, etc.)\n');
    
  } catch (error) {
    console.error('❌ Error generating client secret:', error.message);
    process.exit(1);
  }
}

// Run the script
generateAppleClientSecret();
