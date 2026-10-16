import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { mainStyles } from '../../styles/main';

export default function AuthScreen() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleAuth = () => {
    router.replace('/(tabs)');
  };

  const handleGoogleSignIn = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView contentContainerStyle={mainStyles.authContainer}>
        <Text style={mainStyles.authBrandTitle}>QURAC</Text>
        <Text style={mainStyles.authBrandSubtitle}>Healthcare Management System</Text>

        {isSignUp && (
          <TextInput
            style={mainStyles.authInput}
            placeholder="Full Name"
            placeholderTextColor="#888"
            value={fullName}
            onChangeText={setFullName}
          />
        )}

        <TextInput
          style={mainStyles.authInput}
          placeholder="Email Address"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={mainStyles.authInput}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={mainStyles.authPrimaryButton} onPress={handleAuth}>
          <Text style={mainStyles.authButtonText}>
            {isSignUp ? 'Create Account' : 'Log In'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={mainStyles.authSecondaryButton} onPress={handleGoogleSignIn}>
          <Text style={mainStyles.authSecondaryButtonText}>Sign In with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={mainStyles.authSwitchText}>
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <Text style={mainStyles.authSwitchTextBold}>
              {isSignUp ? 'Log In' : 'Create Account'}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}