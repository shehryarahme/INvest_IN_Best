import React, {Suspense, useEffect, useState} from 'react';

import MainNavigation from './navigation/stacknavigation';
// import {useStores} from './hooks/use-store';

//import {observer} from 'mobx-react';

const Gymbudyy: React.FC = observer(() => {
  //const {user} = useStores();
  const [loading, setLoading] = useState(true);

  //   const onAuthStateReceived = async () => {
  //     console.log('--------------------------------user logged in ');

  //     user.getLoggedInUser();
  //     if (user.userProfile && user.userProfile.uid) {
  //       console.log('uid in useEffect', user.userProfile.uid);
  //     } else {
  //       console.log(
  //         'User profile data or uid is undefined, navigating to ExerciseReels',
  //       );
  //     }

  //     setLoading(false); // Set loading to false when data is fetched
  //   };

  const onAuthStateError = () => {
    console.log('--------------------------------user is not logged in ');
  };
  //     user.getLoggedInUser();
  //     if (!user.userProfile || !user.userProfile.uid) {
  //       console.log('uid in useEffect', user.userProfile?.uid);
  //     } else {
  //       console.log(
  //         'User profile data or uid is undefined, navigating to ExerciseReels',
  //       );
  //     }

  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     user.currentUser(onAuthStateReceived, onAuthStateError);
  //     //  getuserPlan()
  //   }, []);

  //if (!user._userInfo) <></>;

  //   console.log('userinfo in++++++++++++++++++++++++++', user._userInfo);
  return (
    // <Suspense fallback={'loading'}>
    //   {' '}
    // loading === false ? <MainNavigation /> : ''
    <MainNavigation></MainNavigation>
    // </Suspense>
    // <SelectAge></SelectAge>
    // <SelectWeight></SelectWeight>
  );
});

export default Gymbudyy;
