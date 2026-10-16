import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { mainStyles } from "../../styles/main";
import { useAuthStore } from "../../store/authStore";
import { Ionicons } from "@expo/vector-icons";

export default function AuthScreen() {
  const router = useRouter();

  const signup = useAuthStore((state) => state.signup);
  const login = useAuthStore((state) => state.login);

  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});

  const handleAuth = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      general?: string;
    } = {};

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // SIGN UP VALIDATION
    if (isSignUp) {
      if (!trimmedName) {
        newErrors.fullName = "Full name is required.";
      } else if (trimmedName.length < 2) {
        newErrors.fullName = "Full name must be at least 2 characters.";
      }

      if (!trimmedEmail) {
        newErrors.email = "Email address is required.";
      } else if (!emailPattern.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!password) {
        newErrors.password = "Password is required.";
      } else if (!passwordPattern.test(password)) {
        newErrors.password =
          "Password must be at least 8 characters and include uppercase, lowercase, a number and a special character.";
      }

      if (!confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password.";
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }

    // LOGIN VALIDATION
    else {
      if (!trimmedEmail) {
        newErrors.email = "Email address is required.";
      } else if (!emailPattern.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!password) {
        newErrors.password = "Password is required.";
      }
    }

    setErrors(newErrors);

    // Stop here if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (isSignUp) {
  const signupSuccessful = signup(trimmedEmail);

  if (!signupSuccessful) {
    setErrors({
      email: 'An account with this email already exists.',
    });
    return;
  }
} else {
  const loginSuccessful = login(trimmedEmail);

  if (!loginSuccessful) {
    setErrors({
      email: 'No account found. Please create an account first.',
    });
    return;
  }
}

router.replace('/(tabs)');
};

  const handleGoogleSignIn = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={mainStyles.safeArea}>
      <ScrollView contentContainerStyle={mainStyles.authContainer}>
        <Text style={mainStyles.authBrandTitle}>QURAC</Text>
        <Text style={mainStyles.authBrandSubtitle}>
          Healthcare Management System
        </Text>

        {isSignUp && (
          <>
            <TextInput
              style={mainStyles.authInput}
              placeholder="Full Name"
              placeholderTextColor="#888"
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                setErrors((previous) => ({
                  ...previous,
                  fullName: undefined,
                }));
              }}
            />

            {errors.fullName ? (
              <Text style={{ color: "#D32F2F", marginBottom: 10 }}>
                {errors.fullName}
              </Text>
            ) : null}
          </>
        )}

        <TextInput
          style={mainStyles.authInput}
          placeholder="Email Address"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((previous) => ({
              ...previous,
              email: undefined,
            }));
          }}
        />

        {errors.email ? (
          <Text style={{ color: "#D32F2F", marginBottom: 10 }}>
            {errors.email}
          </Text>
        ) : null}

        <TextInput
          style={mainStyles.authInput}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors((previous) => ({
              ...previous,
              password: undefined,
            }));
          }}
        />

        {errors.password ? (
          <Text style={{ color: "#D32F2F", marginBottom: 10 }}>
            {errors.password}
          </Text>
        ) : null}

        {isSignUp && (
          <>
            <TextInput
              style={mainStyles.authInput}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setErrors((previous) => ({
                  ...previous,
                  confirmPassword: undefined,
                }));
              }}
            />

            {errors.confirmPassword ? (
              <Text style={{ color: "#D32F2F", marginBottom: 10 }}>
                {errors.confirmPassword}
              </Text>
            ) : null}
          </>
        )}

        <TouchableOpacity
          style={mainStyles.authPrimaryButton}
          onPress={handleAuth}
        >
          <Text style={mainStyles.authButtonText}>
            {isSignUp ? "Create Account" : "Log In"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={mainStyles.authSecondaryButton}
          onPress={handleGoogleSignIn}
        >
          <Text style={mainStyles.authSecondaryButtonText}>
            Sign In with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={mainStyles.authSwitchText}>
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <Text style={mainStyles.authSwitchTextBold}>
              {isSignUp ? "Log In" : "Create Account"}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
