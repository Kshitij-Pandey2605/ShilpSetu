import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, PlayfairDisplay_700Bold, PlayfairDisplay_600SemiBold } from '@expo-google-fonts/playfair-display';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { AppProvider } from '../context/AppContext';
import { AuthProvider } from '../store/AuthContext';
import { LanguageProvider } from '../store/LanguageContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Caveat_400Regular,
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <LanguageProvider>
        <AppProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="auth/splash" />
            <Stack.Screen name="auth/onboarding-1" />
            <Stack.Screen name="auth/onboarding-2" />
            <Stack.Screen name="auth/onboarding-3" />
            <Stack.Screen name="auth/get-started" />
            <Stack.Screen name="auth/login" />
            <Stack.Screen name="auth/otp-verify" />
            <Stack.Screen name="auth/role-select" />
            <Stack.Screen name="setup/artisan-step-1" />
            <Stack.Screen name="setup/artisan-step-2" />
            <Stack.Screen name="setup/artisan-step-3" />
            <Stack.Screen name="setup/buyer-step-1" />
            <Stack.Screen name="setup/buyer-step-2" />
            <Stack.Screen name="setup/buyer-step-3" />
            <Stack.Screen name="(artisan-tabs)" />
            <Stack.Screen name="artisan/image-studio" />
            <Stack.Screen name="artisan/voice-input" />
            <Stack.Screen name="artisan/catalog-review" />
            <Stack.Screen name="artisan/capability-profile" />
            <Stack.Screen name="artisan/price-assistant" />
            <Stack.Screen name="artisan/publish-product" />
            <Stack.Screen name="artisan/product-library" />
            <Stack.Screen name="artisan/product-detail" />
            <Stack.Screen name="artisan/business-page" />
            <Stack.Screen name="artisan/buyer-opportunities" />
            <Stack.Screen name="artisan/rfq-detail" />
            <Stack.Screen name="artisan/send-quotation" />
            <Stack.Screen name="buyer/home" />
            <Stack.Screen name="buyer/requirement-creator" />
            <Stack.Screen name="buyer/requirement-review" />
            <Stack.Screen name="buyer/smart-match" />
          </Stack>
        </AppProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}
