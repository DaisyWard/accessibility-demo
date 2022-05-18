# Daisy's Accessibility Demo
This repo was created to help show examples of how to make basic, common components with good accessibility

## Table of Contents

- [Running the Project](#running-the-project)
- [ESLint A11y Tool](#eslint-a11y-tool)
- [Components](#components)
- [What not to use this Repo for](#what-not-to-use-this-repo-for)

## Running the Project
This project uses Create React App.

`npm start` to run the project


## ESlint A11y Tool
Setup in this project is an example of how to setup ESLint A11y.

`npm a11y` is a custom script added to the repo.

.eslintrc.json file was also added with streamlined config options. This configuration file can be expanded but this config works as a good starting point.

See [ESLint A11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) for more details

If you are using VSCode the ESLint extension will work with this setup and flag issues.

See extensions.js for the recommended plugin

## Components
### Checkbox
Accessibility Considerations
- aria-required
- aria-invalid
- Associated label with input without the label wrapping around the input
- Role on error message
- Error state and error message

### Dropdown
Accessibility Considerations
- aria-labelledby
- aria-invalid
- aria-required
- How to set a default value
- Role on error message
- Error state and error message

### Modal
Accessibility Considerations
- Trapped focus using external package
- aria-modal
- aria-labelledby
- Dialog Role
- describedby
- aria-label
- Large target size using padding
- Focus visible
- Accessible icon button

### Radio Buttons
Accessibility Considerations
- Use of fieldset
- Use of legend
- Error state and error message
- required
- Being able to click on the label to activate the radio button

### Search
Accessibility Considerations
- Use of form
- Search Role
- Associated label to input
- Type Search
- Accessible icon button

### Text Field
Accessibility Considerations
- aria-label
- required
- aria-invalid
- name
- Role on error message
- Error state and error message
- Associated label with input without the label wrapping around the input

### Toggle Buttons
Accessibility Considerations
- Using a none recommended element and making it accessible
- aria-label
- Associated label with custom elements
- Error state and error message
- Role on error message

### Tooltip
Accessibility Considerations
- You should be able to achieve this through id but it wasn't working for me so I came up with another option.
- See TextField and aria-label to see how I achieved this
- See [ARIA: tooltip role](#https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role) for further implementation suggestions

## What not to use this Repo for
This repo focuses on good accessibility implementation. It doesn't follow coding best practices in places. If you use any code from this repo, make sure to follow your team's coding standards.