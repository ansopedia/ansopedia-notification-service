# Changelog

## [Unreleased]

### Added

- New reusable UI components:
  - Header component (#8)
  - Footer component (#8)
  - Button component (#6)
- Email verification system:
  - EmailVerificationOTP template for OTP-based verification (#10)
  - EmailWrapper component (#11)
  - WithEmailWrapper Higher-Order Component (HOC) (#11)
- Factory Design Pattern implementation using HOC in React (#11)
- `recipientName` field in `emailVerificationOTPPayload` (#11)

### Changed

- Integrated Tailwind CSS for styling across components (#8)

### Improved

- Enhanced code reusability and maintainability through the use of design patterns and HOCs (#11)
- Standardized UI styling with Tailwind CSS (#8)

### Developer Notes

- The new email verification system utilizes a Factory Design Pattern with Higher-Order Components in React. This approach allows for more flexible and extensible email-related functionality.
- Developers should now use the WithEmailWrapper HOC when creating new email-related components to ensure consistent behavior and styling.
- The addition of the `recipientName` field in `emailVerificationOTPPayload` allows for more personalized email verification messages.
