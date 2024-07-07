# React + Vite + HMR

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

This stuff will provide a minimal esque way to get started with React JS. in this Space.

SendGif Component:

    The SendGif component allows users to search for GIFs using the GIPHY API and select one to send.
    It maintains state for the search term and fetched GIFs.
    The searchGifs function makes an API request to GIPHY to fetch GIFs based on the search term.
    When a GIF is selected, the onGifSelect callback is called with the GIF URL, and the search modal is closed.

Chat Component:

    The Chat component maintains the state for messages and the current message being typed.
    It integrates both the SendEmoji and SendGif components.
    Messages can be either text or GIFs. GIF messages are displayed as images.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
