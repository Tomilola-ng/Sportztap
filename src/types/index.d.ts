declare type _player = {
  // Personal Information
  id: string; // Unique identifier for the player
  firstName: string;
  lastName: string;
  dateOfBirth: string; // Format: YYYY-MM-DD
  age: number;
  nationality: string;
  gender: "Male" | "Female";
  contactInfo: {
    email: string;
    phoneNumber?: string;
  };
  address?: {
    city: string;
    state: string;
    country: string;
  };

  // Physical Attributes
  height: number; // In cm
  weight: number; // In kg
  dominantFoot: "Left" | "Right" | "Both";
  bodyFatPercentage?: number;
  injuryHistory?: string[];
  // Player Position & Play Style
  primaryPosition: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  secondaryPositions?: string[];
  preferredPlayingStyle?: string; // e.g., "Box-to-box midfielder", "Poacher", "Playmaker"
  // Performance Statistics
  matchesPlayed: number;
  goalsScored: number;
  assists: number;
  cleanSheets?: number; // For goalkeepers & defenders
  successfulPassesPercentage?: number;
  dribbleSuccessRate?: number;
  tacklesPerGame?: number;
  savesPerGame?: number; // For goalkeepers
  sprintSpeed?: number; // In m/s
  staminaLevel?: number; // Scale of 1-100

  // Scouting Attributes
  visionRating: number; // Scale of 1-100
  ballControl: number; // Scale of 1-100
  aggression: number; // Scale of 1-100
  passingAccuracy: number; // Scale of 1-100
  finishing: number; // Scale of 1-100
  workRate: "Low" | "Medium" | "High";
  tacticalAwareness: number; // Scale of 1-100

  // Mental Wellness & Psychological Data
  stressLevel?: number; // Scale of 1-100
  confidenceLevel?: number; // Scale of 1-100
  participationInWellnessPrograms?: string[]; // e.g., ["Yoga", "Counseling", "Motivational Talks"]
  preferredMentalSupport?: string; // e.g., "Therapist", "Mentor", "Coach"

  // Media & Visibility
  profilePicture?: string; // URL of profile image

  // Additional Metadata
  createdAt: string; // Timestamp of profile creation
  updatedAt?: string; // Timestamp of last profile update
};
