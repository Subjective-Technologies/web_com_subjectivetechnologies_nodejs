import subprocess
import sys
from progress.bar import Bar

def run_command(command, bar, step_message):
    """Run a shell command and handle errors."""
    bar.message = step_message
    result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if result.returncode != 0:
        print(f"\nError during {step_message}: {result.stderr.decode('utf-8')}")
        sys.exit(1)
    bar.next()
    print(f" ✓ [{step_message}]")

def create_or_update_application(application_name, environment_name, version_label, repository_url, branch):
    # Initialize the overall progress bar
    overall_bar = Bar('Overall progress', max=3)

    # Step 1: Check if the application exists
    run_command(f"aws elasticbeanstalk describe-applications --application-names {application_name}", 
                overall_bar, "Checking application existence")

    # Step 2: Create or update application version from GitHub
    run_command(
        f"aws elasticbeanstalk create-application-version --application-name {application_name} "
        f"--version-label {version_label} --source-build-information "
        f"SourceRepository=GitHub,SourceType=Git,SourceLocation={repository_url}#{branch} --process",
        overall_bar, "Creating/updating application version from GitHub"
    )

    # Step 3: Check if environment exists, if not, create or update it
    describe_env_command = (
        f"aws elasticbeanstalk describe-environments --application-name {application_name} "
        f"--environment-names {environment_name}"
    )
    result = subprocess.run(describe_env_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if b'No Environment found for EnvironmentName' in result.stdout:
        run_command(
            f"aws elasticbeanstalk create-environment --application-name {application_name} "
            f"--environment-name {environment_name} --version-label {version_label} "
            f"--solution-stack-name '64bit Amazon Linux 2 v5.4.6 running Node.js 14'",
            overall_bar, "Creating new environment"
        )
    else:
        run_command(
            f"aws elasticbeanstalk update-environment --environment-name {environment_name} --version-label {version_label}",
            overall_bar, "Updating existing environment"
        )

    overall_bar.finish()
    print("Deployment process completed successfully.")

if __name__ == "__main__":
    # Example usage
    application_name = 'your-application-name'
    environment_name = 'your-environment-name'
    version_label = 'v1'
    repository_url = 'https://github.com/yourusername/yourrepository.git'
    branch = 'main'

    create_or_update_application(application_name, environment_name, version_label, repository_url, branch)
