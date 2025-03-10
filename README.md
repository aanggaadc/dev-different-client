# Image Upload (Frontend) Documentation

## Overview
This is an Angular 19 frontend application that allows users to upload images and retrieve them from a backend server. The application consists of a simple form for uploading images and a gallery to display uploaded images.

## Prerequisites
Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli)
- A running backend server (configured separately)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/aanggaadc/dev-different-client.git
   cd dev-different-client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration
The API URL is managed using Angular environments. Update `src/environments/environment.ts` with the correct backend URL:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
};
```

## Project Structure
```
frontend/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── image-upload/
│   │   ├── services/
│   │   │   ├── image.service.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│── environments/
│── assets/
```

## Usage
### Running the Application
Start the development server:
```sh
ng serve
```
The application will be accessible at `http://localhost:4200/`.

### Uploading an Image
1. Click the **Choose File** button.
2. Select an image file from your computer.
3. Click the **Upload** button to send the image to the backend.

### Viewing Uploaded Images
- The uploaded images will be displayed after upload process success.
- Each image is fetched from the backend dynamically.

## Components
### Image Upload Component (`image-upload`)
Handles image selection and upload functionality.
#### Methods:
- `onFileSelected(event: Event)`: Handles file selection.
- `uploadImage()`: Sends the image to the backend.

### Image Gallery Component (`image-gallery`)
Displays uploaded images.
#### Methods:
- `fetchImages()`: Retrieves images from the backend and displays them.

## Service
### ImageService (`image.service.ts`)
Handles HTTP requests to interact with the backend.
#### Methods:
- `uploadImage(image: File)`: Uploads an image.
- `getImages()`: Retrieves all images.

## Deployment
1. Build the project:
   ```sh
   ng build --configuration=production
   ```
2. The build output will be in `dist/`. Deploy it to a web server.

