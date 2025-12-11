// ==========================
// BLOG MANAGEMENT SYSTEM
// Automatically loads all blog posts from the blogs folder
// ==========================

// This will store all loaded blog posts
let allBlogPosts = [];

// List of blog post files to load (add new blog files here)
const blogFiles = [
  'blogs/example-blog-post.js',
  'blogs/research-update.js'
  // Add new blog files here as you create them
];

// Function to load all blog posts
async function loadBlogPosts() {
  allBlogPosts = [];
  
  for (const file of blogFiles) {
    try {
      // Load the script
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = file;
        script.onload = () => {
          // The blog file sets a global 'blogPost' variable
          if (typeof blogPost !== 'undefined') {
            allBlogPosts.push({...blogPost});
          }
          resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    } catch (error) {
      console.error(`Error loading blog post from ${file}:`, error);
    }
  }
  
  // Sort by date (newest first)
  allBlogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return allBlogPosts;
}

// Format date for display
function formatBlogDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Get blog post by ID
function getBlogPostById(id) {
  return allBlogPosts.find(post => post.id === id);
}
