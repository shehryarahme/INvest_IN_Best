import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Signuppage from '../screens/LoginandSignup/Signuppage';
import EnterOTP from '../screens/LoginandSignup/EnterOTP';
import {createStackNavigator} from '@react-navigation/stack';

import EnterName from '../screens/LoginandSignup/EnterName';

import LandingPagetabs from '../screens/LandingPage/TabNavigation';

import SelectedExerciseDetails from '../screens/LandingPage/SelectedExerciseDetails';
import ExercisePlan from '../screens/LandingPage/ExercisePlan';

import UserProfile from '../screens/LoginandSignup/UserProfile';
import CreateWorkoutPlan from '../screens/LandingPage/CreateWorkoutPlan';
import MyPlans from '../screens/LandingPage/MyPlan';
import SelectGender from '../screens/userdetails/Gender';
import SelectAge from '../screens/userdetails/AgeCounter';
import SelectWeight from '../screens/userdetails/WeightCalculator';
import SelectHeight from '../screens/userdetails/HieghtCounter';
import {constants} from '../constants';
import UserFitnessGoal from '../screens/userdetails/UserGoal';
import UserFitnessLevel from '../screens/userdetails/levelOfFitness';
import ExerciseGroupList from '../screens/LandingPage/ExerciseGroupList';
import AddExercises from '../screens/LandingPage/AddExercises';
//import Exercisereels from '../screens/LandingPage/SelectedExerciseReels';
import SelectPlan from '../screens/LandingPage/SelectPlan';
import TargetWeight from '../screens/userdetails/Targetweight';
import UserWorkoutDuration from '../screens/userdetails/WokroutDuration';
import UserWorkoutDays from '../screens/userdetails/WorkoutDays';
import EquipmentAvailability from '../screens/userdetails/EquipmentsAvailability';
import DashBoardScreen from '../screens/DasboardScreen/Dashboard';
import Displayplans from '../screens/LandingPage/DisplayPlans';
import SelectedExercises from '../screens/LandingPage/SelectedExercise';
import WorkoutComplete from '../screens/LandingPage/WorkoutCompletion';
import WorkoutSummary from '../screens/LandingPage/WorkoutSummary';

import ExerciseReels from '../screens/LandingPage/ExerciseReels';
import SelectedExerciseReels from '../screens/LandingPage/SelectedExerciseReels';
import ProfileSettings from '../screens/LandingPage/Profile Setting';
import {useStores} from '../hooks/use-store';
//import Loader from '../screens/LandingPage/Loader';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const {user} = useStores();
  console.log('userinfo in first attempt is ', user._userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={constants.LOADER} component={Loader} /> */}
        {user._userInfo ? (
          <>
            {console.log('userinfo in if ', user._userInfo)}
            {/*  */}
            <Stack.Screen
              name={constants.LANDING_PAGE_TABS}
              component={LandingPagetabs}
            />
            <Stack.Screen name={constants.SIGNUP_PAGE} component={Signuppage} />
            <Stack.Screen
              name={constants.DISPLAYPLANS}
              component={Displayplans}
            />
            <Stack.Screen
              name={constants.EXERCISEREELS}
              component={ExerciseReels}
            />
            <Stack.Screen name={constants.SELECTPLAN} component={SelectPlan} />
            <Stack.Screen
              name={constants.TARGETWEIGHT}
              component={TargetWeight}
            />
            <Stack.Screen name={constants.ENTER_OTP} component={EnterOTP} />
            <Stack.Screen name={constants.ENTER_NAME} component={EnterName} />
            <Stack.Screen
              name={constants.USER_WORKOUT_DURATION}
              component={UserWorkoutDuration}
            />
            <Stack.Screen
              name={constants.USER_WORKOUT_DAYS}
              component={UserWorkoutDays}
            />
            <Stack.Screen
              name={constants.EQUPMENTAVAILABILITY}
              component={EquipmentAvailability}
            />
            <Stack.Screen
              name={constants.DASHBOARD_SCREEN}
              component={DashBoardScreen}
            />
            <Stack.Screen
              name={constants.SELECTEDEXERCISE}
              component={SelectedExercises}
            />
            <Stack.Screen
              name={constants.WORKOUTCOMPLETE}
              component={WorkoutComplete}
            />
            <Stack.Screen
              name={constants.WORKOUTSUMMARY}
              component={WorkoutSummary}
            />
            <Stack.Screen
              name={constants.SELECTEDEXERCISEREEL}
              component={SelectedExerciseReels}
            />
            <Stack.Screen
              name={constants.PROFILESETTINGS}
              component={ProfileSettings}
            />
            <Stack.Screen
              name={constants.EXERCISE_GROUP_LIST}
              component={ExerciseGroupList}
            />
            <Stack.Screen
              name={constants.SELECTED_EXERCISE_DETAILS}
              component={SelectedExerciseDetails}
            />
            <Stack.Screen
              name={constants.EXERCISE_PLAN}
              component={ExercisePlan}
            />
            <Stack.Screen
              name={constants.SELECT_GENDER}
              component={SelectGender}
            />
            <Stack.Screen name={constants.SELECT_AGE} component={SelectAge} />
            <Stack.Screen
              name={constants.SELECT_WEIGHT}
              component={SelectWeight}
            />
            <Stack.Screen
              name={constants.SELECT_HEIGHT}
              component={SelectHeight}
            />
            <Stack.Screen
              name={constants.ADDEXERCISE}
              component={AddExercises}
            />
            <Stack.Screen
              name={constants.USER_FITNESS_GOAL}
              component={UserFitnessGoal}
            />
            <Stack.Screen
              name={constants.USER_FITNESS_LEVEL}
              component={UserFitnessLevel}
            />
            <Stack.Screen
              name={constants.USER_PROFILE}
              component={UserProfile}
            />
            <Stack.Screen
              name={constants.CREATE_WORKOUT_PLAN}
              component={CreateWorkoutPlan}
            />
            <Stack.Screen name={constants.MY_PLANS} component={MyPlans} />
          </>
        ) : (
          <>
            {console.log('userinfo in else', user._userInfo)}

            <Stack.Screen
              name={constants.EXERCISEREELS}
              component={ExerciseReels}
            />
            <Stack.Screen name={constants.SIGNUP_PAGE} component={Signuppage} />
            <Stack.Screen name={constants.ENTER_OTP} component={EnterOTP} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
