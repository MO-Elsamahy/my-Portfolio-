# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website is designed to showcase your work, skills, and experience in a professional and creative way.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🔍 SEO-friendly structure
- 📝 Contact form
- 🎯 Easy to customize
- 🌐 Ready for GitHub Pages deployment

## Getting Started

1. Clone this repository or download the files
2. Customize the content in `index.html` to match your information
3. Update the styling in `css/style.css` if desired
4. Add your own projects to the projects section
5. Test the website locally

## Customization

### Changing Colors

The color scheme can be modified in the `css/style.css` file. Look for the `:root` selector at the top of the file:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

### Adding Projects

To add a new project, add the following HTML structure inside the `project-grid` div in `index.html`:

```html
<div class="project-card">
    <img src="path/to/project-image.jpg" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description goes here.</p>
    <div class="project-links">
        <a href="#" class="btn primary">View Live</a>
        <a href="#" class="btn secondary">Source Code</a>
    </div>
</div>
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Your site will be published at `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)

1. Purchase a domain name from a domain registrar
2. Add a CNAME record pointing to `yourusername.github.io`
3. Add a file named `CNAME` to your repository containing your domain name
4. Configure custom domain in GitHub Pages settings

## Browser Support

The website is compatible with:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or need help, please open an issue in the repository. 