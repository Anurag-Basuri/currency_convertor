# Currency Converter

This project is a responsive and user-friendly Currency Converter built with React.js. It fetches real-time exchange rates using the RapidAPI service and allows users to convert amounts between different currencies. The project also features a clean UI with Tailwind CSS and a visually appealing background video.

## Features

- **Real-time Exchange Rates**: Fetches live currency conversion rates via RapidAPI.
- **Two-way Conversion**: Allows swapping between "From" and "To" currencies seamlessly.
- **Responsive Design**: Works on different screen sizes with a clean and modern interface.
- **Background Video**: Includes a smooth background video for an enhanced visual experience.
- **Accessibility**: Fully accessible with proper labels and ARIA attributes.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **API Integration**: RapidAPI for fetching live currency exchange rates
- **State Management**: React `useState` and custom hooks

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
    ```plaintext
    VITE_API_KEY=your_rapidapi_key_here
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the app in your browser:
    ```
    http://localhost:5173
    ```

## Usage

1. Enter the amount to convert in the "From" input box.
2. Select the source and target currencies from the dropdowns.
3. Click the **Convert** button to get the converted amount.
4. Use the **Swap** button to switch the source and target currencies.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [RapidAPI](https://rapidapi.com/) for providing the currency exchange rate API.
- Background video by [pexels.com](https://www.pexels.com/).
