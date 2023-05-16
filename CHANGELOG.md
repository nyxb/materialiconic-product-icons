# Changelog


## ...main


### 🚀 Enhancements

  - **release.yml:** Add emojis to workflow name and step names for better readability This commit adds emojis to the workflow name and step names to make them more readable and visually appealing. The workflow name now includes a rocket and a megaphone emoji to represent the release and publish actions respectively. The step names now include emojis that represent their respective actions, such as a bell for checkout, a gear for setup, a package for build, a pushpin for pushing tags, and a globe for publishing to registries. ([a587c71](https://github.com/nyxblabs/materialiconic-product-icons/commit/a587c71))

### 🩹 Fixes

  - **README.md:** Update cover-src link to point to the correct location The cover-src link was pointing to the wrong location, which resulted in a broken image. This commit fixes the link to point to the correct location. ([47aed9a](https://github.com/nyxblabs/materialiconic-product-icons/commit/47aed9a))
  - **release.yml:** Change npm ci to npm i to fix issue with installing dependencies The `npm ci` command was causing issues with installing dependencies, so it was changed to `npm i` to fix the issue. ([1dc6380](https://github.com/nyxblabs/materialiconic-product-icons/commit/1dc6380))
  - **release.yml:** Add --no-dependencies flag to vsce package command The --no-dependencies flag is added to the vsce package command to prevent the inclusion of unnecessary dependencies in the package. This reduces the package size and improves the installation time of the package. ([9d2b56f](https://github.com/nyxblabs/materialiconic-product-icons/commit/9d2b56f))
  - **release.yml:** Use pnpm instead of npm to run vsce package command The vsce package command is now run using pnpm instead of npm to ensure that the correct dependencies are installed and used during the build process. This ensures that the package is built correctly and without any issues. ([7acbbcc](https://github.com/nyxblabs/materialiconic-product-icons/commit/7acbbcc))
  - **package.json:** Replace nyxlx with npx in changelog, preversion and version scripts The nyxlx command was replaced with npx to ensure that the changelogen package is executed from the latest version. The preversion script was also updated to run the preview script using npm run. ([7ed49da](https://github.com/nyxblabs/materialiconic-product-icons/commit/7ed49da))

### 💅 Refactors

  - **package.json:** Remove main entry point The main entry point is no longer necessary as the application is now being run using the dynot package. ([17e5948](https://github.com/nyxblabs/materialiconic-product-icons/commit/17e5948))

### 🏡 Chore

  - **release.yml:** Update git user name and email The git user name and email have been updated to reflect the current user's information. This is important for proper attribution of commits and tags. ([97af949](https://github.com/nyxblabs/materialiconic-product-icons/commit/97af949))
  - **release.yml:** Add global installation of @nyxb/nyxi package The @nyxb/nyxi package is now installed globally to be able to use it in the release workflow. ([d40a7e2](https://github.com/nyxblabs/materialiconic-product-icons/commit/d40a7e2))
  - **release.yml): switch from npm to pnpm package manager ✨ feat(release.yml:** Add PNPM setup and install @nyxb/nyxi globally The commit switches the package manager from npm to pnpm, which is a faster and more efficient package manager. The commit also adds a setup for PNPM and installs @nyxb/nyxi globally using pnpm. ([fed60bc](https://github.com/nyxblabs/materialiconic-product-icons/commit/fed60bc))
  - **.eslintignore:** Add node_modules to ignore list The node_modules directory is added to the ignore list to prevent eslint from analyzing the contents of this directory. This improves performance and avoids errors that may arise from analyzing third-party code. ([3e745fb](https://github.com/nyxblabs/materialiconic-product-icons/commit/3e745fb))
  - **release.yml): add pnpm run vscode:prepublish to install and build vscode extension 🐛 fix(.gitignore): add dist folder to ignore list to avoid committing built files 🐛 fix(.vscodeignore): add dist folder to ignore list to avoid committing built files ✨ feat(karium.config.ts): add build configuration for rollup to build the project ✨ feat(package.json:** Add buildkarium to build the project and set main to point to the built file The changes in the release.yml file add a new step to the build process to install and build the vscode extension. The .gitignore and .vscodeignore files are updated to ignore the dist folder to avoid committing built files. The karium.config.ts file is added to define the build configuration for rollup to build the project. The package.json file is updated to add buildkarium to build the project and set the main field to point ([25eb28c](https://github.com/nyxblabs/materialiconic-product-icons/commit/25eb28c))
  - **release.yml:** Update git user name and email The git user name and email have been updated to reflect the current maintainer of the repository. This change is necessary to ensure that the correct user is associated with the commits and tags created during the release process. ([7246284](https://github.com/nyxblabs/materialiconic-product-icons/commit/7246284))

### 🎨 Styles

  - **cover-github-materialiconic-product-icons.png:** Add cover image for GitHub repository The commit adds a cover image for the GitHub repository. The image is named cover-github-materialiconic-product-icons.png. ([9c4bca4](https://github.com/nyxblabs/materialiconic-product-icons/commit/9c4bca4))
  - **github-assets:** Add cover image for GitHub repository This commit adds a cover image for the GitHub repository. The image is located in the .github/assets directory and is named cover-github-materialiconic-product-icons.png. The image is a PNG file and is 100644 mode. ([c08a5dd](https://github.com/nyxblabs/materialiconic-product-icons/commit/c08a5dd))
  - **release.yml): fix typo in required field name 🚀 chore(release.yml): update release workflow to use actions/checkout@v2 and actions/setup-node@v2 🚀 chore(release.yml): update release workflow to use npm instead of pnpm 🚀 chore(release.yml): update release workflow to use correct user name and email 🚀 chore(release.yml): update release workflow to use vsce package instead of vsce package --no-dependencies 🚀 chore(release.yml): update release workflow to change the order of the name and version in the generated file name 🚀 chore(release.yml): update release workflow to use softprops/action-gh-release@v1 instead of actions/create-release@v1 🚀 chore(release.yml:** Update release workflow to use HaaLeo/publish-vscode-extension@v1 instead of ms-vscode.vscode-extension-publish ([be4351d](https://github.com/nyxblabs/materialiconic-product-icons/commit/be4351d))
  - **release.yml:** Reorder job names to improve readability The job names in the release.yml file have been reordered to improve readability and make it easier to understand the sequence of events. The order of the jobs has not been changed, only the names of the jobs have been reordered. ([918e09a](https://github.com/nyxblabs/materialiconic-product-icons/commit/918e09a))
  - **build.yml): update step names to use GitMoji and improve readability 🚀 chore(release.yml): update Git user name and email, remove unused steps, and update step names to use GitMoji 📦 chore(package.json:** Remove unused dependencies and scripts, and update build script to use dynot The step names in the build.yml and release.yml files have been updated to use GitMoji and improve readability. The Git user name and email have been updated in the release.yml file. Unused steps have been removed from the release.yml file. The build script in the package.json file has been updated to use dynot instead of buildkarium. Unused dependencies have been removed from the package.json file. ([83c49dd](https://github.com/nyxblabs/materialiconic-product-icons/commit/83c49dd))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

