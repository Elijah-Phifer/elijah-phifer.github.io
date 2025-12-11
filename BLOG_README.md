# Blog System - Quick Start Guide

## How to Add a New Blog Post

### Step 1: Create a New Blog File

1. Go to the `blogs/` folder
2. Create a new `.js` file (e.g., `my-new-post.js`)
3. Copy the template below and edit the content:

```javascript
(function() {
  const blogPost = {
    // Unique ID (use date-based format recommended)
    id: "2024-12-15-my-post-title",
    
    // Publication date (YYYY-MM-DD format)
    date: "2024-12-15",
    
    // Title that appears in the list and post page
    title: "My Amazing Blog Post",
    
    // Short excerpt for the blog list (1-2 sentences)
    excerpt: "A brief description of what this post is about.",
    
    // Main content (HTML supported)
    content: `
      <p>Your blog content goes here.</p>
      
      <h3>Section Title</h3>
      <p>More content...</p>
      
      <img src="path/to/image.jpg" alt="Description" style="max-width: 100%; border-radius: 8px; margin: 20px 0;">
    `,
    
    // Optional: Featured image URL (appears in list and at top of post)
    featuredImage: "https://example.com/image.jpg"
  };
  
  // Register this blog post (DO NOT REMOVE THIS LINE)
  if (typeof window.registerBlogPost === 'function') {
    window.registerBlogPost(blogPost);
  }
})();
```

**Important:** Always keep the registration code at the bottom!

### Step 2: Register Your Blog File

1. Open `blog-loader.js`
2. Add your new file to the `blogFiles` array:

```javascript
const blogFiles = [
  'blogs/example-blog-post.js',
  'blogs/research-update.js',
  'blogs/my-new-post.js'  // <-- Add your new file here
];
```

### Step 3: Done!

That's it! Your blog post will automatically appear in the blog list, sorted by date (newest first).

## Content Formatting Tips

### Paragraphs
```html
<p>Your paragraph text here.</p>
```

### Headings
```html
<h3>Main Section Heading</h3>
<h4>Subsection Heading</h4>
```

### Images
```html
<img src="URL" alt="Description" style="max-width: 100%; border-radius: 8px; margin: 20px 0;">
```

### Lists
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Text Formatting
```html
<strong>Bold text</strong>
<em>Italic text</em>
<a href="URL">Link text</a>
```

## Best Practices

1. **ID Format**: Use `YYYY-MM-DD-descriptive-name` for easy sorting and uniqueness
2. **Dates**: Use `YYYY-MM-DD` format for proper chronological ordering
3. **Excerpts**: Keep under 150 characters for best display
4. **Images**: Use high-quality images, ideally 1200px wide for featured images
5. **Content**: Use semantic HTML and keep paragraphs concise

## File Structure

```
elijah-phifer.github.io/
├── blogs/
│   ├── example-blog-post.js
│   ├── research-update.js
│   └── your-new-post.js
├── blog-loader.js
├── index.html
├── script.js
└── styles.css
```

## Troubleshooting

- **Post not appearing?** Make sure you added it to the `blogFiles` array in `blog-loader.js`
- **Wrong order?** Check that your date format is `YYYY-MM-DD`
- **Images not showing?** Verify the image URL is correct and accessible
- **Formatting issues?** Make sure your HTML is properly closed and valid
