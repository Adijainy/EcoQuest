# [EcoQuest](https://eco-quest.vercel.app/) - Small Steps, Big Change

## Problem Statement

Millions of individuals worldwide lack clear, personalized guidance and motivation to reduce their carbon footprint, hindering collective progress towards mitigating climate change.

This lack of awareness and engagement jeopardizes not only environmental health but also economic stability and societal well-being, demanding immediate and innovative solutions to empower individuals to become active participants in building a sustainable future.

## Our Solution - Gamified Web Application to Empower Individual Climate Action

This solution tackles the challenge of limited individual engagement in climate action by proposing a **gamified web application**. It aims to **motivate and incentivize users** to adopt sustainable habits through a dynamic and engaging platform.

### Features:

- **Curated Task Lists:** Users are presented with various tasks, each assigned **points** upon completion. These tasks represent actions that minimize their carbon footprint.
- **Categorized Tasks:** Tasks are organized into categories like transportation, energy, and consumption, allowing users to focus on areas of personal interest or impact.
- **Carbon Footprint Tracker:** The application tracks the total carbon emissions reduced by users compared to the average footprint, providing **tangible feedback** on their environmental impact.
- **Monthly Leaderboards:** Users compete on leaderboards to track their progress compared to others, fostering **healthy competition and community engagement**.
- **Badges and Points:** Completing tasks and demonstrating overall progress earns users badges and points, signifying their **achievements and commitment to sustainability**.
- **Admin Dashboard:** An admin dashboard facilitates task management, event creation, and user engagement monitoring, ensuring the platform remains **dynamic and responsive**.
- **Top Performer Recognition:** A dedicated section highlights top performers, celebrating their dedication and encouraging continued participation.
- **Social Sharing:** Users can share their achievements and progress on social media, inspiring others and raising awareness about sustainability.

### Next Steps:

To further enhance the community aspect, we plan to introduce:

- **User forum:** A dedicated space for users to share experiences, ideas, and tips for reducing carbon footprint.
- **User-generated content:** Allow users to post about their sustainable activities and campaigns, inspiring and motivating others.

By continuously developing the platform and fostering a supportive community, we aim to empower individuals to be active participants in creating a more sustainable future.

## Installation Instructions

### Prerequisites

Before installing the application, ensure you have the following tools installed:

- Node.js and npm (or yarn)

### Installation Steps

1. **Fork the repository:**
   Navigate to the project repository on GitHub at [EcoQuest](https://github.com/Adijainy/EcoQuest) and click the "Fork" button. This will create a copy of the repository in your own GitHub account.

2. **Clone the repository locally:**
   Open your terminal and navigate to the directory where you want to work on the project. Then, use the `git clone` command to clone your forked repository, replacing `<your-username>` with your actual GitHub username:

   ```bash
   git clone https://github.com/<your-username>/EcoQuest.git
   ```

3. **Install dependencies:**
   Navigate into the project directory:

   ```bash
   cd EcoQuest
   ```

   Install dependencies for both the client and server applications:

   ```bash
   npm install
   ```

4. **Start the application:**

   - **Client Application:**
     Navigate to the client directory:

     ```bash
     cd client
     ```

     Start the development server:

     ```bash
     npm run start
     ```

   - **Server Application:**
     Navigate to the server directory:

     ```bash
     cd server
     ```

     Start the server:

     ```bash
     npm run start
     ```

**Additional Notes:**

- For production deployment, additional configuration steps might be necessary depending on your chosen hosting environment.
- Ensure you replace `<your-username>` in the clone command with your actual GitHub username.

Following these steps should successfully set up your local development environment for the EcoQuest application.

## Additional Dependencies or Libraries Used

By running `npm install` in both the `client` and `server` directories, you can automatically install the following additional dependencies:

**Client-Side:**

- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `axios`
- `react-hook-form`
- `react-icons`
- `react-router-dom`
- `react-share`
- `web-vitals`

**Server-Side:**

- `bcrypt`
- `cloudinary`
- `cookie-parser`
- `cors`
- `dotenv`
- `express-fileupload`
- `jsonwebtoken`
- `nodemon`

## Documentation Link

For more information of architecture used, you can refer to the document-
[EcoQuest- Doc](https://docs.google.com/document/d/1tyrFlzIcs9RE-onJNck0kV06BXlQlY3DMe6l6Hu_19A/edit?usp=sharing)
