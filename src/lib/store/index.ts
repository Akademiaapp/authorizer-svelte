/* eslint-disable @typescript-eslint/no-empty-function */
import { writable } from 'svelte/store';
import { Authorizer } from '@authorizerdev/authorizer-js';
import { hasWindow } from '../utils/window';
export const store = writable({
    config: {
        authorizerURL: '',
        redirectURL: '/',
        client_id: '',
        is_google_login_enabled: false,
        is_github_login_enabled: false,
        is_facebook_login_enabled: false,
        is_linkedin_login_enabled: false,
        is_apple_login_enabled: false,
        is_twitter_login_enabled: false,
        is_microsoft_login_enabled: false,
        is_email_verification_enabled: false,
        is_basic_authentication_enabled: false,
        is_magic_link_login_enabled: false,
        is_sign_up_enabled: false,
        is_strong_password_enabled: true
    },
    user: JSON.parse(sessionStorage.getItem('authUser')) || null,
    token: JSON.parse(sessionStorage.getItem('authToken')) || null,
    loading: false,
    setLoading: () => { },
    setToken: () => { },
    setUser: () => { },
    setAuthData: () => { },
    authorizerRef: new Authorizer({
        authorizerURL: `http://localhost:8080`,
        redirectURL: hasWindow() ? window.location.origin : '/',
        clientID: ''
    }),
    logout: async () => { }
});
store.subscribe(state => {
    sessionStorage.setItem("authToken", JSON.stringify(state.token));
    sessionStorage.setItem("authUser", JSON.stringify(state.user));
});
