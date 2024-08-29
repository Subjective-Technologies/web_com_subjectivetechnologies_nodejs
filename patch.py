import os
import argparse
import shutil

# Menu path
menu_js_path = os.path.join(os.getcwd(), 'components', 'Menu.js')
backup_menu_js_path = os.path.join(os.getcwd(), 'components', 'Menu_backup.js')

# Corrected Menu.js content
updated_menu_js_content = """
import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/staticlanding">Static Landing</Link></li>
                <li><Link href="/howitworks">How it works</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
"""

# Function to backup the Menu.js file
def backup_file(path):
    if os.path.exists(path):
        shutil.copy(path, backup_menu_js_path)
        print(f"Backup created: {backup_menu_js_path}")

# Function to restore the Menu.js file from backup
def restore_file():
    if os.path.exists(backup_menu_js_path):
        shutil.copy(backup_menu_js_path, menu_js_path)
        print(f"Menu restored from backup: {menu_js_path}")
        os.remove(backup_menu_js_path)
    else:
        print("No backup found to restore.")

# Function to update the Menu.js file
def update_menu():
    backup_file(menu_js_path)
    with open(menu_js_path, 'w') as file:
        file.write(updated_menu_js_content)
    print(f"Updated Menu: {menu_js_path}")

# Main function
def main(undo=False):
    if undo:
        restore_file()
    else:
        update_menu()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Fix <Link> component in Menu.js and implement undo.")
    parser.add_argument('--undo', action='store_true', help="Undo the changes.")
    args = parser.parse_args()
    
    main(undo=args.undo)
