import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaGknci1DLmxi7dT9w3mWDY-oxiBBM8Xs",
    authDomain: "exponovel.firebaseapp.com",
    projectId: "exponovel",
    storageBucket: "exponovel.appspot.com",
    messagingSenderId: "68831583586",
    appId: "1:68831583586:web:ee55040d80bbf49d70e03b",
    measurementId: "G-F0TJWDPDJ3"
};

const app = initializeApp(firebaseConfig);

// 只在客户端初始化 analytics
let analytics = null;
if (typeof window !== 'undefined') {
    // 动态导入 analytics
    import('firebase/analytics').then(({ getAnalytics }) => {
        analytics = getAnalytics(app);
    });
}

export const auth = getAuth(app);