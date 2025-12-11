// ==========================
// PORTFOLIO SCRIPT
// Handles page generation and interactions
// ==========================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', async function() {
  // Load blog posts first
  if (typeof loadBlogPosts !== 'undefined') {
    await loadBlogPosts();
  }
  generatePages();
  initializeNavigation();
});

// Generate all pages from data
function generatePages() {
  const container = document.getElementById('container');
  
  // Page 1: Cover
  container.innerHTML += `
    <div class="page cover">
      <div class="cover-content">
        <h1>${portfolioData.title}</h1>
        <div class="issue">Volume I · Issue I · December 2024</div>
        <div class="tagline">${portfolioData.tagline}</div>
      </div>
    </div>
  `;

  // Page 2: Full Image - Research
  container.innerHTML += `
    <div class="page image-page">
      <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80" alt="Academic workspace">
      <div class="image-caption">The pursuit of knowledge: where ideas take form</div>
    </div>
  `;

  // Page 3: Overview
  container.innerHTML += `
    <div class="page light">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>
      
      <div class="section-title">Overview</div>
      
      <div class="intro-text">
        ${portfolioData.overview.intro}
      </div>

      <div style="text-align: center; margin: 20px 0;">
        <a href="${portfolioData.cv}" target="_blank" style="color: #9F8082; text-decoration: none; margin-right: 20px;">
          📄 Curriculum Vitae
        </a>
        <a href="${portfolioData.googleScholar}" target="_blank" style="color: #9F8082; text-decoration: none;">
          🎓 Google Scholar
        </a>
      </div>

      <div class="accent-bar"></div>

      <div class="two-column">
        ${portfolioData.overview.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>

      <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="University campus" class="featured-image">
    </div>
  `;

  // Page 4: Education
  container.innerHTML += `
    <div class="page light">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>

      <div class="section-title">Education</div>

      ${portfolioData.education.map(edu => `
        <div class="timeline-item">
          <h3>${edu.degree}</h3>
          <div class="meta">${edu.institution} | ${edu.period}</div>
          ${edu.details.map(detail => `<p>${detail}</p>`).join('')}
        </div>
      `).join('')}

      <div class="pull-quote">
        "Education is not the filling of a pail, but the lighting of a fire."
      </div>

      <div class="content-block">
        <h3>Key Achievements</h3>
        <p>
          • Graduated with Honors Diploma from Southeastern Louisiana University<br>
          • Received multiple academic awards and scholarships<br>
          • Conducted undergraduate research in phylogenetic paleobiology and software engineering
        </p>
      </div>
    </div>
  `;

  // Page 5: Full Image - Library
  container.innerHTML += `
    <div class="page image-page">
      <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80" alt="Library interior">
      <div class="image-caption">Where research happens: among the archives and stacks</div>
    </div>
  `;

  // Page 6: Experience
  container.innerHTML += `
    <div class="page dark">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>

      <div class="section-title">Experience</div>

      ${portfolioData.experience.map(exp => `
        <div class="content-block">
          <h3>${exp.title}</h3>
          <div class="meta">${exp.organization} | ${exp.period}</div>
          <p>${exp.description}</p>
        </div>
      `).join('')}

      <div class="accent-bar"></div>

      <div class="content-block">
        <h3>Skills & Competencies</h3>
        <p>${portfolioData.skills}</p>
      </div>
    </div>
  `;

  // Page 7: Goings On About Elijah (First Half)
  const midpoint = Math.ceil(portfolioData.news.length / 2);
  container.innerHTML += `
    <div class="page light">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>

      <div class="section-title">Goings On About ${portfolioData.name.split(' ')[0]}</div>

      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" alt="Conference hall" class="featured-image">

      ${portfolioData.news.slice(0, midpoint).map(item => `
        <div class="news-item">
          <div class="news-date">${item.date}</div>
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        </div>
      `).join('')}
    </div>
  `;

  // Page 8: More News
  container.innerHTML += `
    <div class="page light">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>

      <div class="section-title">Goings On About ${portfolioData.name.split(' ')[0]} (Continued)</div>

      ${portfolioData.news.slice(midpoint).map(item => `
        <div class="news-item">
          <div class="news-date">${item.date}</div>
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        </div>
      `).join('')}

      <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80" alt="Laptop and notebook" class="featured-image">

      <div class="pull-quote">
        "The best research emerges from curiosity, persistence, and collaboration."
      </div>
    </div>
  `;

  // Page 9: Publications
  container.innerHTML += `
    <div class="page dark">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>

      <div class="section-title">Publications & Scholarship</div>

      ${portfolioData.publications.map(pub => `
        <div class="publication-item">
          <h3>${pub.authors} (${pub.year}). "${pub.title}"</h3>
          <p class="meta">${pub.venue}</p>
          <p>${pub.abstract}</p>
          ${pub.links.length > 0 ? `
            <p class="publication-links">
              ${pub.links.map(link => `<a href="${link.url}" target="_blank">[${link.text}]</a>`).join('')}
            </p>
          ` : ''}
        </div>
      `).join('')}

      <div class="accent-bar"></div>

      <div class="content-block">
        <h3>Works in Progress</h3>
        <p>
          • Research on conversational robot programming and natural language interfaces for HRI<br>
          • Investigations into intuitive human-machine collaboration frameworks<br>
          • Software engineering methodologies for robotics applications
        </p>
      </div>
    </div>
  `;

  // Page 10: Full Image - Research
  container.innerHTML += `
    <div class="page image-page">
      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80" alt="Research notes">
      <div class="image-caption">Ideas in motion: the research process</div>
    </div>
  `;

  // Page 11: Gallery
  container.innerHTML += `
    <div class="page light">
      <div class="masthead">
        <h1>${portfolioData.title}</h1>
        <div class="subtitle">${portfolioData.subtitle}</div>
      </div>

      <div class="section-title">Gallery</div>

      <p style="margin-bottom: 20px;">
        A collection of moments from my academic journey—research, teaching, conferences, and the experiences that shape my work.
      </p>

      <div class="gallery">
        ${portfolioData.galleryImages.map((img, i) => `
          <div class="gallery-item">
            <img src="${img}" alt="Gallery image ${i + 1}">
          </div>
        `).join('')}
      </div>

      <p style="margin-top: 30px; text-align: center; font-style: italic; color: #8D918B;">
        More images to come as the journey continues...
      </p>
    </div>
  `;

  // Page 12: Blog List
  if (typeof allBlogPosts !== 'undefined' && allBlogPosts.length > 0) {
    container.innerHTML += `
      <div class="page light" id="blog-list-page">
        <div class="masthead">
          <h1>${portfolioData.title}</h1>
          <div class="subtitle">${portfolioData.subtitle}</div>
        </div>

        <div class="section-title">Blog</div>

        <p style="margin-bottom: 30px;">
          Thoughts, updates, and reflections on research, technology, and the academic journey.
        </p>

        <div class="blog-list">
          ${allBlogPosts.map(post => `
            <article class="blog-list-item" data-blog-id="${post.id}">
              ${post.featuredImage ? `
                <div class="blog-thumbnail">
                  <img src="${post.featuredImage}" alt="${post.title}">
                </div>
              ` : ''}
              <div class="blog-info">
                <div class="blog-date">${formatBlogDate(post.date)}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more" data-blog-id="${post.id}">Read more →</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Initialize navigation
function initializeNavigation() {
  const container = document.getElementById('container');
  const indicator = document.getElementById('indicator');
  const pages = document.querySelectorAll('.page');
  const menuButton = document.getElementById('menuButton');
  const tocOverlay = document.getElementById('tocOverlay');
  const tocList = document.getElementById('tocList');
  
  const isMobile = window.innerWidth <= 768;
  
  let currentPage = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let startTransform = 0;

  // Table of contents data
  const tocItems = [
    { title: 'Cover', page: 0 },
    { title: 'Opening', page: 1 },
    { title: 'Overview', page: 2 },
    { title: 'Education', page: 3 },
    { title: 'In Focus', page: 4 },
    { title: 'Experience', page: 5 },
    { title: 'Goings On About ' + portfolioData.name.split(' ')[0], page: 6 },
    { title: 'Recent Happenings', page: 7 },
    { title: 'Publications', page: 8 },
    { title: 'Research Notes', page: 9 },
    { title: 'Gallery', page: 10 },
    { title: 'Blog', page: 11 }
  ];

  // Build table of contents
  tocItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'toc-item';
    li.innerHTML = `
      <div class="toc-item-number">Page ${index + 1}</div>
      <div class="toc-item-title">${item.title}</div>
    `;
    li.addEventListener('click', () => {
      currentPage = item.page;
      updatePage();
      toggleMenu();
    });
    tocList.appendChild(li);
  });

  // Menu toggle
  function toggleMenu() {
    menuButton.classList.toggle('active');
    tocOverlay.classList.toggle('active');
  }

  menuButton.addEventListener('click', toggleMenu);
  
  tocOverlay.addEventListener('click', (e) => {
    if (e.target === tocOverlay) {
      toggleMenu();
    }
  });

  // Create indicator dots
  pages.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      currentPage = i;
      updatePage();
    });
    indicator.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updatePage() {
    const offset = -currentPage * window.innerWidth;
    container.style.transform = `translateX(${offset}px)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPage);
    });
  }

  function handleStart(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const transform = new WebKitCSSMatrix(window.getComputedStyle(container).transform);
    startTransform = transform.m41;
    container.style.transition = 'none';
  }

  function handleMove(e) {
    if (!isDragging) return;
    
    currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = currentX - startX;
    const newTransform = startTransform + diff;
    
    container.style.transform = `translateX(${newTransform}px)`;
  }

  function handleEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    const diff = currentX - startX;
    const threshold = window.innerWidth * 0.2;
    
    container.style.transition = 'transform 0.3s ease-out';
    
    if (diff > threshold && currentPage > 0) {
      currentPage--;
    } else if (diff < -threshold && currentPage < pages.length - 1) {
      currentPage++;
    }
    
    updatePage();
  }

  // Mouse events (desktop only)
  if (!isMobile) {
    container.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    // Touch events
    container.addEventListener('touchstart', handleStart);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentPage > 0) {
      currentPage--;
      updatePage();
    } else if (e.key === 'ArrowRight' && currentPage < pages.length - 1) {
      currentPage++;
      updatePage();
    } else if (e.key === 'Escape' && tocOverlay.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Prevent text selection while dragging
  container.addEventListener('selectstart', (e) => {
    if (isDragging) e.preventDefault();
  });

  // Blog post navigation
  setupBlogNavigation();

  updatePage();
}

// Blog navigation functions
function setupBlogNavigation() {
  // Add click handlers for "Read more" links
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more')) {
      e.preventDefault();
      const blogId = e.target.getAttribute('data-blog-id');
      openBlogPost(blogId);
    }
    
    if (e.target.classList.contains('back-to-blog-list')) {
      e.preventDefault();
      closeBlogPost();
    }
  });
}

function openBlogPost(blogId) {
  const post = getBlogPostById(blogId);
  if (!post) return;
  
  const container = document.getElementById('container');
  
  // Create blog post page
  const blogPostPage = document.createElement('div');
  blogPostPage.className = 'page light blog-post-page';
  blogPostPage.innerHTML = `
    <div class="blog-post-header">
      <a href="#" class="back-to-blog-list">← Back to Blog</a>
    </div>
    
    <article class="blog-post">
      <div class="blog-post-date">${formatBlogDate(post.date)}</div>
      <h1 class="blog-post-title">${post.title}</h1>
      
      ${post.featuredImage ? `
        <img src="${post.featuredImage.replace('w=400', 'w=1200')}" alt="${post.title}" class="blog-post-featured-image">
      ` : ''}
      
      <div class="blog-post-content">
        ${post.content}
      </div>
    </article>
  `;
  
  // Insert after blog list page
  const blogListPage = document.getElementById('blog-list-page');
  blogListPage.parentNode.insertBefore(blogPostPage, blogListPage.nextSibling);
  
  // Navigate to the new page
  const pages = document.querySelectorAll('.page');
  const blogListIndex = Array.from(pages).indexOf(blogListPage);
  
  // Trigger navigation to show the blog post
  setTimeout(() => {
    const event = new CustomEvent('navigateToBlogPost', { detail: { pageIndex: blogListIndex + 1 } });
    document.dispatchEvent(event);
  }, 100);
}

function closeBlogPost() {
  // Remove blog post page
  const blogPostPage = document.querySelector('.blog-post-page');
  if (blogPostPage) {
    blogPostPage.remove();
  }
  
  // Navigate back to blog list
  const blogListPage = document.getElementById('blog-list-page');
  const pages = document.querySelectorAll('.page');
  const blogListIndex = Array.from(pages).indexOf(blogListPage);
  
  const event = new CustomEvent('navigateToBlogPost', { detail: { pageIndex: blogListIndex } });
  document.dispatchEvent(event);
}

// Listen for blog navigation events
document.addEventListener('navigateToBlogPost', (e) => {
  const container = document.getElementById('container');
  const pages = document.querySelectorAll('.page');
  const targetPage = e.detail.pageIndex;
  
  container.style.transform = `translateX(-${targetPage * 100}vw)`;
  
  const indicator = document.getElementById('indicator');
  indicator.textContent = `${targetPage + 1} / ${pages.length}`;
});