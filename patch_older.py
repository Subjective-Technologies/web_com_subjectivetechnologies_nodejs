import os
import argparse

# Define the paths for the files to be created
base_path = os.getcwd()
pages_path = os.path.join(base_path, 'pages')
components_path = os.path.join(base_path, 'components')
styles_path = os.path.join(base_path, 'components')

# File paths
staticlanding_js_path = os.path.join(pages_path, 'staticlanding.js')
static_landing_component_js_path = os.path.join(components_path, 'StaticLandingComponent.js')
static_landing_css_path = os.path.join(styles_path, 'StaticLanding.module.css')

# Content for the files
staticlanding_js_content = """
import React from 'react';
import StaticLandingComponent from '../components/StaticLandingComponent';

const StaticLandingPage = () => {
    return <StaticLandingComponent />;
};

export default StaticLandingPage;
"""

static_landing_component_js_content = """
import React from 'react';
import styles from './StaticLanding.module.css';
import Image from 'next/image';
import worktwinsImage from '../public/images/worktwins.png';

const StaticLandingComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the Static Landing Page</h1>
            <Image src={worktwinsImage} alt="WorkTwins" className={styles.image} />
            <p className={styles.description}>
                This is the static landing page. You can customize this section with relevant content.
            </p>
        </div>
    );
};

export default StaticLandingComponent;
"""

static_landing_css_content = """
.container {
    text-align: center;
    padding: 20px;
}

.title {
    font-size: 2em;
    margin-bottom: 20px;
}

.image {
    width: 100%;
    height: auto;
    max-width: 600px;
    margin: 0 auto;
}

.description {
    font-size: 1.2em;
    margin-top: 20px;
}
"""

# Function to create files
def create_file(path, content):
    with open(path, 'w') as file:
        file.write(content)
    print(f"Created: {path}")

# Function to remove files
def remove_file(path):
    if os.path.exists(path):
        os.remove(path)
        print(f"Removed: {path}")
    else:
        print(f"File not found: {path}")

# Main function
def main(undo=False):
    if undo:
        # Remove the files
        remove_file(staticlanding_js_path)
        remove_file(static_landing_component_js_path)
        remove_file(static_landing_css_path)
    else:
        # Create the files
        os.makedirs(pages_path, exist_ok=True)
        os.makedirs(components_path, exist_ok=True)
        os.makedirs(styles_path, exist_ok=True)

        create_file(staticlanding_js_path, staticlanding_js_content)
        create_file(static_landing_component_js_path, static_landing_component_js_content)
        create_file(static_landing_css_path, static_landing_css_content)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Apply or undo the patch.")
    parser.add_argument('--undo', action='store_true', help="Undo the patch by removing the files.")
    args = parser.parse_args()
    
    main(undo=args.undo)
