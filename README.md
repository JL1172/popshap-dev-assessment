# Developer assignment

This is an application designed with a 1080px * 1920px layout, following the design file and guidelines provided. The app includes graceful error handling for both known and unexpected errors, ensuring a smooth user experience.

## Features

- **Serverless Implementation**: Utilizes Firebase for a serverless backend.
- **Graceful UI**: Uses `react-spinner` to show a loading UI while updating the database.
- **Seamless Navigation**: Implements `react-router-dom` for smooth and intuitive page navigation.
- **Scalability & Design Principles**: Abstracted features are designed to follow battle-tested design principles with scalability in mind.
- **State Management**: Custom hooks and Context API are used for managing and sharing the simple state across the application.

## Dependencies

- `firebase`: For serverless backend services.
- `react-spinner`: For a graceful loading UI during database updates.
- `react-router-dom`: For seamless navigation between pages.
  
## Design & Architecture

The design was incorporated from the provided design file while adhering to established design principles. I aimed to keep the codebase minimal by utilizing only the requested dependencies and focusing on scalability. Custom hooks and Context API are employed to manage the application's simple state, making it easy to extend in the future.

## Error Handling

The application gracefully handles both known and unexpected errors to ensure a smooth user experience. Error states are displayed clearly, but without exposing sensitive information.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>

   cd <into project>

   npm install 

   npm run dev
   ```
