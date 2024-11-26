# Matomo Plugin for Omeka Classic

This plugin integrates [Matomo Analytics](https://github.com/matomo-org/matomo) into your [Omeka Classic](https://omeka.org/classic/) installation. It enables site administrators to track and analyze visitor behavior within their Omeka sites seamlessly.

## Features

- Adds Matomo tracking code to all public-facing Omeka pages.
- Tracks user interactions and provides insights through the Matomo dashboard.
- *(Maybe in the future: Customizable tracking settings within the configuration panel.)*

## Requirements

- **Omeka Classic**: Version 2.0 or higher.
- **Matomo Analytics**: A running instance of Matomo, either self-hosted or via Matomo Cloud.

## Installation

1. Clone or download this repository to your local system.
2. Upload the plugin folder to the `/plugins` directory of your Omeka Classic installation.
3. Install the plugin via the Omeka plugin panel.
4. Configure the plugin by entering your **Matomo instance URL**  and **Site ID**.
   - Your Matomo instance URL (e.g., `https://analytics.example.com`).
   - Your Site ID from Matomo (found in the Matomo admin panel under **Settings > Websites**).
   - *(Maybe in the future: Customize tracking options such as anonymizing IPs or enabling consent.)*

## Usage

Once configured, the plugin will automatically inject the Matomo tracking code into your Omeka site's public theme. All visitor data will be available in your Matomo dashboard.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter a bug or have a feature request.

## License

This plugin is released under the [GPLv3 License](https://opensource.org/licenses/GPL-3.0). See the LICENSE file for details.
