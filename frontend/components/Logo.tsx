import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

const OFFICIAL_MASCOT: ImageSourcePropType = require('../assets/images/shilpsetu_mascot.jpg');

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  layout?: 'vertical' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'lg',
  showSubtitle = true,
  layout,
}) => {
  const isSm = size === 'sm';
  const isMd = size === 'md';
  const iconSize = isSm ? 40 : isMd ? 58 : 80;
  const wordmarkFontSize = isSm ? 15 : isMd ? 20 : 26;
  const taglineFontSize = isSm ? 8.5 : isMd ? 11.5 : 13;
  const effectiveLayout = layout || (isSm ? 'horizontal' : 'vertical');

  if (effectiveLayout === 'horizontal') {
    return (
      <View style={styles.horizontalContainer}>
        <Image
          source={OFFICIAL_MASCOT}
          style={[styles.mascotImage, { width: iconSize, height: iconSize, borderRadius: iconSize / 2 }]}
          resizeMode="contain"
        />
        <View style={styles.horizontalTextWrap}>
          <Text style={[styles.wordmark, { fontSize: wordmarkFontSize, letterSpacing: 1.5 }]}>
            SHILPSETU
          </Text>
          {showSubtitle && (
            <Text style={[styles.tagline, { fontSize: taglineFontSize }]}>
              — Hunar se Bazaar Tak —
            </Text>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Official ShilpSetu Artisan Mascot Image */}
      <View style={[styles.mascotContainer, { width: iconSize, height: iconSize, borderRadius: iconSize / 2 }]}>
        <Image
          source={OFFICIAL_MASCOT}
          style={[styles.mascotImage, { width: iconSize, height: iconSize, borderRadius: iconSize / 2 }]}
          resizeMode="contain"
        />
      </View>

      {/* Wordmark & Tagline */}
      <View style={styles.textContainer}>
        <Text style={[styles.wordmark, { fontSize: wordmarkFontSize }]}>
          SHILPSETU
        </Text>
        {showSubtitle && (
          <Text style={[styles.tagline, { fontSize: taglineFontSize }]}>
            — Hunar se Bazaar Tak —
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalTextWrap: {
    marginLeft: 8,
    alignItems: 'flex-start',
  },
  mascotContainer: {
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFFDF9',
  },
  mascotImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
  },
  wordmark: {
    fontFamily: typography.fonts.wordmark,
    fontWeight: '900',
    color: colors.textDark,
    letterSpacing: 1.8,
    textShadowColor: colors.white,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  tagline: {
    fontFamily: typography.fonts.serifSemiBold,
    fontStyle: 'italic',
    color: colors.primary,
    marginTop: 1,
    letterSpacing: 0.3,
  },
});

export default Logo;
