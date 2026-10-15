import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2F9094',
        tabBarInactiveTintColor: '#666666',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 65, // Increased height to give comfortable space for text
        },
      }}
    >
      {/* 1. Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 2. Queue Tab */}
      <Tabs.Screen
        name="queue"
        options={{
          title: 'Queue',
          tabBarLabel: 'Queue',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 3. Appointments Tab */}
      <Tabs.Screen
        name="appointments"
        options={{
          title: 'Appointments',
          tabBarLabel: 'Appointments',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 4. Patients Tab */}
      <Tabs.Screen
        name="patients"
        options={{
          title: 'Patients',
          tabBarLabel: 'Patients',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder-open-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 5. Patient Details (Hidden Stack Screen) */}
      <Tabs.Screen
        name="patient-details"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />

      {/* 6. Triage Screen (Hidden Stack Screen) */}
      <Tabs.Screen
        name="triage"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      {/* 7. Triage Assessment Form Screen (Hidden Stack Screen) */}
      <Tabs.Screen
        name="triage-assessment"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      {/* 8. Appointment Details Screen (Hidden Stack Screen) */}
      <Tabs.Screen
        name="appointment-details"
        options={{
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}