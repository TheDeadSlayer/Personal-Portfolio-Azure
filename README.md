# Personal-Portfolio-Azure
Welcome to my portfolio! This project highlights my skills, projects, and experiences as a web developer, all showcased through an elegant React.js application.
### Weblink: [Live Website](https://mahmoudmohamed.vercel.app/)

## ✨ Features  
- **About Me**: Highlights my background, skills, and experiences.  
- **Projects**: Showcases my key projects with detailed descriptions, screenshots, and live links.  
- **Skills**: Lists my technical proficiencies.  
- **Resume**: Includes a link to download my professional resume.  
- **Contact**: Features a form for inquiries or messages.
- 
## 🛠 Technologies Used  
- **React.js**: For building dynamic user interfaces.  
- **HTML5 & CSS3**: For structuring and styling web pages.  
- **JavaScript**: For adding interactivity.  
- **Styled-Components**: For creating modern and responsive designs.  
- **Git**: For version control and collaboration.  
- **GitHub Pages**: For hosting and deploying the website.  

## ⚙️ Installation  
Follow these steps to run the portfolio locally:  
1. Clone the repository: 
2. Navigate to the project directory: 
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`


## 🚀 Deployment

This web app was deployed on **Azure** using **Azure DevOps Pipelines**. The deployment process is automated and follows a Continuous Integration/Continuous Deployment (CI/CD) approach. The process ensures that the latest version of the app is always deployed, tested, and accessible to users. Below is a detailed breakdown of the deployment steps:

### 1. **Build & Archive**
- **Code Compilation**: The pipeline is triggered whenever changes are pushed to the `master` branch. Azure DevOps automatically detects the change and begins the build process.
- **Dependencies Installation**: The build step involves installing any necessary dependencies, such as Node.js packages, ensuring the application is up-to-date with the latest libraries and tools.
- **Archiving the Code**: Once the dependencies are installed and the app is ready to be deployed, the build artifacts (i.e., the compiled code, assets, etc.) are archived into a ZIP file. This process uses the `ArchiveFiles` task in the pipeline. The ZIP file contains all the files needed for deployment, including the React app's static assets and configuration files.
- **Storage of Artifacts**: The archived file is stored in the pipeline’s artifact staging directory. This ensures the build artifacts are available for the next stage of the process, which is deployment.

### 2. **Deployment**
- **Preparation for Deployment**: Once the code is archived, the pipeline moves to the deployment stage. The previously created ZIP archive containing the build artifacts is ready to be deployed to the production environment.
- **Azure Web App Configuration**: The Azure DevOps pipeline connects to the Azure platform using a service connection (`azureSubscription`) created during pipeline setup. This connection ensures that the pipeline has permission to deploy to your Azure resources.
- **Azure Web App Settings**: The Azure Web App instance is configured with specific settings before deployment. This step ensures that the app is ready for deployment on a Linux-based web app service in Azure.
- **Deploying to Azure**: The application is deployed to an **Azure Linux Web App**. During this step, the ZIP file containing the code is transferred to the web app. Azure handles the configuration and sets up the runtime environment (in this case, a Node.js environment) for the app to run smoothly.
- **App Configuration and Runtime Setup**: The deployed app is configured to run on the selected runtime stack (`NODE|10.14`). This ensures that the app runs in a consistent environment regardless of the underlying server. The Azure App Service makes sure the app is always up and running, with automatic scaling and load balancing.

### 3. **Post-Deployment**
- **Testing and Verification**: After deployment, Azure DevOps provides feedback on the success or failure of the deployment. This allows for quick identification of any issues that may arise during the process.
- **Monitoring**: The deployed web app is automatically monitored through Azure’s built-in logging and monitoring features. If there are any issues or errors, logs can be accessed to troubleshoot and resolve them.
- **Live Website**: Once the app is successfully deployed, it becomes live and accessible via the Azure-provided URL or a custom domain. This allows users to view the portfolio on the web without any manual intervention.

By using **Azure DevOps Pipelines** and **Azure Web Apps**, the deployment process becomes automated, scalable, and reliable, ensuring that updates to the portfolio are continuously delivered with minimal manual effort.
