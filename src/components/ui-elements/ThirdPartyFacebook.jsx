import React, { useEffect } from "react";

const ThirdParty = ({ onSuccess, onFailure }) => {
  const facebookAppId = "YOUR_FACEBOOK_APP_ID"; // Replace with your Facebook App ID
  
  // Load Facebook SDK when the component mounts
  useEffect(() => {
    // Add Facebook SDK script to the document
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.onload = () => {
      // Initialize the Facebook SDK
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: "v15.0", // You can use the latest version
      });
    };
    document.body.appendChild(script);
  }, [facebookAppId]);

  // Facebook login handler
  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          // Successful login
          const accessToken = response.authResponse.accessToken;
          onSuccess(accessToken);
        } else {
          // Login failed
          onFailure("Login failed");
        }
      },
      { scope: "public_profile,email" } // The scope of permissions you request
    );
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
      className="custom-facebook-button"
      onClick={handleFacebookLogin}
    >
      <span className="facebook-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_3095_546)">
            <path
              d="M23.73 12C23.73 5.37262 18.3574 0 11.73 0C5.10261 0 -0.27002 5.37262 -0.27002 12C-0.27002 17.9895 4.11823 22.954 9.85498 23.8542V15.4688H6.80811V12H9.85498V9.35625C9.85498 6.34875 11.6465 4.6875 14.3876 4.6875C15.7005 4.6875 17.0737 4.92188 17.0737 4.92188V7.875H15.5606C14.0699 7.875 13.605 8.80003 13.605 9.74906V12H16.9331L16.4011 15.4688H13.605V23.8542C19.3417 22.954 23.73 17.9896 23.73 12Z"
              fill="#1877F2"
            />
            <path
              d="M16.4011 15.4688L16.9331 12H13.605V9.74906C13.605 8.79994 14.0699 7.875 15.5606 7.875H17.0737V4.92188C17.0737 4.92188 15.7005 4.6875 14.3875 4.6875C11.6465 4.6875 9.85498 6.34875 9.85498 9.35625V12H6.80811V15.4688H9.85498V23.8542C10.4752 23.9514 11.1021 24.0001 11.73 24C12.3578 24.0001 12.9847 23.9514 13.605 23.8542V15.4688H16.4011Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3095_546">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </button>
  );
};

export default ThirdParty;
