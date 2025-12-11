// Example blog post
// Copy this file and edit to create new blog posts
// The filename doesn't matter - only the data inside

const blogPost = {
  // Unique ID for this post (use a simple incrementing number or date-based ID)
  id: "2024-12-10-first-post",
  
  // Publication date (YYYY-MM-DD format for proper sorting)
  date: "2024-12-10",
  
  // Blog post title
  title: "My First Blog Post",
  
  // Short description/excerpt (appears in blog list)
  excerpt: "This is an example blog post showing how to create content for the blog system.",
  
  // Main content (HTML supported)
  content: `
    <p>Welcome to my first blog post! This is where you can write your content.</p>
    
    <p>You can use HTML tags for formatting like <strong>bold text</strong>, <em>italic text</em>, and more.</p>
    
    <h3>Adding Images</h3>
    <p>You can add images using the img tag:</p>
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800" alt="Example image" style="max-width: 100%; border-radius: 8px; margin: 20px 0;">
    
    <h3>Formatting Tips</h3>
    <ul>
      <li>Use paragraph tags for text blocks</li>
      <li>Use heading tags (h3, h4) for sections</li>
      <li>Add images with img tags</li>
      <li>Style inline or use the existing blog CSS</li>
    </ul>
    
    <p>The blog system will automatically display your content with proper styling!</p>
  `,
  
  // Optional: Featured image for the blog list
  featuredImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400"
};
