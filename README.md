# Portfolio Website

This is a portfolio website showcasing various experimental observations through videos and images. The website is built using React and includes several components and pages.

## Project Structure

```
portfolio-website
├── public
│   ├── assets
│   │   ├── photos
│   │   │   ├── 1.jpg
│   │   │   ├── Picture1.png
│   │   │   ├── Picture3.png
│   │   │   └── Picture4.png
│   │   └── videos
│   │       ├── fast_spiral.mp4
│   │       └── output.mp4
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Footer.js
│   │   └── Navbar.js
│   ├── pages
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Home.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── package-lock.json
```

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

### Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will generate an optimized build in the `build` directory.

## Publishing the Website

1. **Choose a Hosting Service**: Select a hosting service such as GitHub Pages, Netlify, or Vercel.
2. **Deploy the Build**:
   - For **GitHub Pages**: Push your code to a GitHub repository and deploy the `build` directory to the `gh-pages` branch.
   - For **Netlify**: Drag and drop the `build` folder into the Netlify dashboard or connect your GitHub repository.
   - For **Vercel**: Connect your GitHub repository for automatic deployments.
3. **Configure Domain (Optional)**: Set up a custom domain if desired.
4. **Test the Live Site**: Visit the URL provided by your hosting service to ensure everything is functioning correctly.

## License

This project is licensed under the MIT License. See the LICENSE file for details.