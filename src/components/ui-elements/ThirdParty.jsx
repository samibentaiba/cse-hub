import React, { useEffect, useRef } from "react";
const ThirdParty = ({ onSuccess, onFailure }) => {
  const tokenClientRef = useRef(null);
  useEffect(() => {
    tokenClientRef.current = google.accounts.oauth2.initTokenClient({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
      callback: (response) => {
        if (response && response.access_token) {
          onSuccess(response.access_token);
        } else {
          onFailure("Login failed");
        }
      },
    });
  }, []);
  const handleGoogleLogin = () => {
    if (tokenClientRef.current) {
      tokenClientRef.current.requestAccessToken();
    }
  };
  return (
    <button
      style={{
        display: "flex",
        padding: "var(--sm, 8px)",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "var(--sm, 8px)",
        flex: "1 0 0",
        cursor: "pointer",
        borderRadius: "var(--sm, 8px)",
        border: "1px solid var(--Neutral-gray-300, #9D9D9F)",
        background: "var(--Neutral-gray-200, #CECECF)",
      }}
      className="custom-google-button"
      onClick={handleGoogleLogin}
    >
      <span className="google-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_3088_539)">
            <path
              d="M23.4441 12.2245C23.4441 11.2413 23.3643 10.5238 23.1916 9.77966H11.9636V14.2176H18.5542C18.4214 15.3205 17.7038 16.9815 16.1093 18.0976L16.087 18.2462L19.637 20.9964L19.883 21.0209C22.1418 18.9347 23.4441 15.8653 23.4441 12.2245Z"
              fill="#4285F4"
            />
            <path
              d="M11.9635 23.9176C15.1923 23.9176 17.9029 22.8545 19.8828 21.0209L16.1092 18.0976C15.0993 18.8018 13.744 19.2934 11.9635 19.2934C8.80107 19.2934 6.11701 17.2074 5.16021 14.324L5.01997 14.3359L1.32855 17.1927L1.28027 17.3269C3.24681 21.2334 7.28623 23.9176 11.9635 23.9176Z"
              fill="#34A853"
            />
            <path
              d="M5.16039 14.324C4.90794 13.5799 4.76183 12.7826 4.76183 11.9588C4.76183 11.1349 4.90794 10.3377 5.14711 9.5936L5.14042 9.43513L1.40275 6.53241L1.28046 6.59058C0.469952 8.21168 0.00488281 10.0321 0.00488281 11.9588C0.00488281 13.8855 0.469952 15.7058 1.28046 17.3269L5.16039 14.324Z"
              fill="#FBBC05"
            />
            <path
              d="M11.9635 4.62403C14.209 4.62403 15.7238 5.59402 16.5875 6.40461L19.9625 3.10928C17.8897 1.1826 15.1923 0 11.9635 0C7.28623 0 3.24681 2.68406 1.28027 6.59056L5.14693 9.59359C6.11701 6.7102 8.80107 4.62403 11.9635 4.62403Z"
              fill="#EB4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_3088_539">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </button>
  );
};
export default ThirdParty;
